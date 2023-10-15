import { useContext, useRef, useState } from 'react';
import {
  useRecoilCallback,
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
} from 'recoil';
import { Key } from 'ts-key-enum';
import { v4 } from 'uuid';

import { BoardContext } from '@/companies/states/contexts/BoardContext';
import { ViewFieldsVisibilityDropdownSection } from '@/ui/data/view-bar/components/ViewFieldsVisibilityDropdownSection';
import { useUpsertView } from '@/ui/data/view-bar/hooks/useUpsertView';
import { currentViewScopedSelector } from '@/ui/data/view-bar/states/selectors/currentViewScopedSelector';
import { viewsByIdScopedSelector } from '@/ui/data/view-bar/states/selectors/viewsByIdScopedSelector';
import { viewEditModeState } from '@/ui/data/view-bar/states/viewEditModeState';
import { ViewFieldForVisibility } from '@/ui/data/view-bar/types/ViewFieldForVisibility';
import {
  IconChevronLeft,
  IconLayoutKanban,
  IconPlus,
  IconTag,
} from '@/ui/display/icon';
import { DropdownMenuHeader } from '@/ui/layout/dropdown/components/DropdownMenuHeader';
import { DropdownMenuInput } from '@/ui/layout/dropdown/components/DropdownMenuInput';
import { DropdownMenuInputContainer } from '@/ui/layout/dropdown/components/DropdownMenuInputContainer';
import { DropdownMenuItemsContainer } from '@/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { DropdownMenuSearchInput } from '@/ui/layout/dropdown/components/DropdownMenuSearchInput';
import { StyledDropdownMenu } from '@/ui/layout/dropdown/components/StyledDropdownMenu';
import { StyledDropdownMenuSeparator } from '@/ui/layout/dropdown/components/StyledDropdownMenuSeparator';
import { useDropdown } from '@/ui/layout/dropdown/hooks/useDropdown';
import { MenuItem } from '@/ui/navigation/menu-item/components/MenuItem';
import { MenuItemNavigate } from '@/ui/navigation/menu-item/components/MenuItemNavigate';
import { useScopedHotkeys } from '@/ui/utilities/hotkey/hooks/useScopedHotkeys';
import { HotkeyScope } from '@/ui/utilities/hotkey/types/HotkeyScope';
import { useRecoilScopedValue } from '@/ui/utilities/recoil-scope/hooks/useRecoilScopedValue';
import { useRecoilScopeId } from '@/ui/utilities/recoil-scope/hooks/useRecoilScopeId';

import { BoardOptionsContext } from '../contexts/BoardOptionsContext';
import { useBoardCardFields } from '../hooks/useBoardCardFields';
import { useBoardColumns } from '../hooks/useBoardColumns';
import { boardCardFieldsScopedState } from '../states/boardCardFieldsScopedState';
import { boardColumnsState } from '../states/boardColumnsState';
import { savedBoardCardFieldsFamilyState } from '../states/savedBoardCardFieldsFamilyState';
import { hiddenBoardCardFieldsScopedSelector } from '../states/selectors/hiddenBoardCardFieldsScopedSelector';
import { hiddenBoardColumnsSelector } from '../states/selectors/hiddenBoardColumnsSelector';
import { visibleBoardCardFieldsScopedSelector } from '../states/selectors/visibleBoardCardFieldsScopedSelector';
import { visibleBoardColumnsSelector } from '../states/selectors/visibleBoardColumnsSelector';
import { BoardColumnDefinition } from '../types/BoardColumnDefinition';

import { BoardColumnEditTitleMenu } from './BoardColumnEditTitleMenu';

export type BoardOptionsDropdownContentProps = {
  customHotkeyScope: HotkeyScope;
  onStageAdd?: (boardColumn: BoardColumnDefinition) => void;
};

type BoardOptionsMenu = 'fields' | 'stage-creation' | 'stages';

export const BoardOptionsDropdownContent = ({
  customHotkeyScope,
  onStageAdd,
}: BoardOptionsDropdownContentProps) => {
  const { BoardRecoilScopeContext } = useContext(BoardContext);
  const boardOptionsContext = useContext(BoardOptionsContext);

  const boardRecoilScopeId = useRecoilScopeId(BoardRecoilScopeContext);

  const stageInputRef = useRef<HTMLInputElement>(null);
  const viewEditInputRef = useRef<HTMLInputElement>(null);

  const [currentMenu, setCurrentMenu] = useState<
    BoardOptionsMenu | undefined
  >();

  const [boardColumns, setBoardColumns] = useRecoilState(boardColumnsState);

  const visibleBoardColumns = useRecoilValue(visibleBoardColumnsSelector);

  const hiddenBoardColumns = useRecoilValue(hiddenBoardColumnsSelector);

  const hiddenBoardCardFields = useRecoilScopedValue(
    hiddenBoardCardFieldsScopedSelector,
    BoardRecoilScopeContext,
  );
  const hasHiddenFields = hiddenBoardCardFields.length > 0;
  const visibleBoardCardFields = useRecoilScopedValue(
    visibleBoardCardFieldsScopedSelector,
    BoardRecoilScopeContext,
  );
  const hasVisibleFields = visibleBoardCardFields.length > 0;

  const viewsById = useRecoilScopedValue(
    viewsByIdScopedSelector,
    BoardRecoilScopeContext, // TODO: replace with ViewBarRecoilScopeContext
  );
  const currentView = useRecoilScopedValue(
    currentViewScopedSelector,
    BoardRecoilScopeContext,
  );
  const viewEditMode = useRecoilValue(viewEditModeState);
  const resetViewEditMode = useResetRecoilState(viewEditModeState);

  const { closeDropdown } = useDropdown();

  useScopedHotkeys(
    Key.Escape,
    () => {
      resetViewEditMode();
      closeDropdown();
    },
    customHotkeyScope.scope,
  );

  useScopedHotkeys(
    Key.Enter,
    () => {
      handleStageSubmit();
      handleViewNameSubmit();
      resetViewEditMode();
      closeDropdown();
    },
    customHotkeyScope.scope,
  );

  const { upsertView } = useUpsertView();

  const handleViewNameSubmit = useRecoilCallback(
    ({ set, snapshot }) =>
      async () => {
        const boardCardFields = await snapshot.getPromise(
          boardCardFieldsScopedState(boardRecoilScopeId),
        );
        const isCreateMode = viewEditMode.mode === 'create';
        const name = viewEditInputRef.current?.value;
        const view = await upsertView(name);

        if (view && isCreateMode) {
          set(savedBoardCardFieldsFamilyState(view.id), boardCardFields);
        }
      },
    [boardRecoilScopeId, upsertView, viewEditMode.mode],
  );

  const { handleFieldVisibilityChange } = useBoardCardFields();
  const { handleColumnVisibilityChange, handleColumnReorder } =
    useBoardColumns();

  if (!boardOptionsContext) return <></>;

  const { handleEditColumnTitle, handleDeleteColumn } = boardOptionsContext;

  const handleStageSubmit = () => {
    if (currentMenu !== 'stage-creation' || !stageInputRef?.current?.value)
      return;

    const columnToCreate = {
      id: v4(),
      colorCode: 'gray',
      index: boardColumns.length,
      title: stageInputRef.current.value,
      name: stageInputRef.current.value,
      isVisible: true,
    } as BoardColumnDefinition;

    setBoardColumns((previousBoardColumns) => [
      ...previousBoardColumns,
      columnToCreate,
    ]);
    onStageAdd?.(columnToCreate);
  };

  const resetMenu = () => setCurrentMenu(undefined);

  const handleMenuNavigate = (menu: BoardOptionsMenu) => {
    handleViewNameSubmit();
    setCurrentMenu(menu);
  };

  const boardColumnEditFieldComponent = (field: ViewFieldForVisibility) => {
    return (
      <BoardColumnEditTitleMenu
        color={field.colorCode ?? 'gray'}
        onClose={closeDropdown}
        onTitleEdit={(title, color) =>
          handleEditColumnTitle(field.key, title, color)
        }
        title={field.name}
        onDelete={handleDeleteColumn}
        stageId={field.key}
      />
    );
  };

  const handleReorderField = (fields: ViewFieldForVisibility[]) => {
    handleColumnReorder(fields);
  };

  const sortedVisibleColumns = [...visibleBoardColumns].sort(
    (a, b) => a.index - b.index,
  );

  return (
    <StyledDropdownMenu>
      {!currentMenu && (
        <>
          <DropdownMenuInputContainer>
            <DropdownMenuInput
              ref={viewEditInputRef}
              autoFocus={
                viewEditMode.mode === 'create' || !!viewEditMode.viewId
              }
              placeholder={
                viewEditMode.mode === 'create' ? 'New view' : 'View name'
              }
              defaultValue={
                viewEditMode.mode === 'create'
                  ? ''
                  : viewEditMode.viewId
                  ? viewsById[viewEditMode.viewId]?.name
                  : currentView?.name
              }
            />
          </DropdownMenuInputContainer>
          <StyledDropdownMenuSeparator />
          <DropdownMenuItemsContainer>
            <MenuItemNavigate
              onClick={() => handleMenuNavigate('fields')}
              LeftIcon={IconTag}
              text="Fields"
            />
            <MenuItemNavigate
              onClick={() => handleMenuNavigate('stages')}
              LeftIcon={IconLayoutKanban}
              text="Stages"
            />
          </DropdownMenuItemsContainer>
        </>
      )}
      {currentMenu === 'stages' && (
        <>
          <DropdownMenuHeader StartIcon={IconChevronLeft} onClick={resetMenu}>
            Stages
          </DropdownMenuHeader>
          <StyledDropdownMenuSeparator />
          <DropdownMenuItemsContainer>
            <ViewFieldsVisibilityDropdownSection
              title="Visible"
              fields={sortedVisibleColumns}
              onVisibilityChange={handleColumnVisibilityChange}
              isDraggable={true}
              onDragEnd={handleReorderField}
              editFieldComponent={boardColumnEditFieldComponent}
            />
            {hiddenBoardColumns.length > 0 && (
              <>
                <StyledDropdownMenuSeparator />
                <ViewFieldsVisibilityDropdownSection
                  title="Hidden"
                  fields={hiddenBoardColumns}
                  onVisibilityChange={handleColumnVisibilityChange}
                  isDraggable={false}
                />
              </>
            )}
            <StyledDropdownMenuSeparator />
            <DropdownMenuItemsContainer>
              <MenuItem
                onClick={() => setCurrentMenu('stage-creation')}
                LeftIcon={IconPlus}
                text="Add stage"
              />
            </DropdownMenuItemsContainer>
          </DropdownMenuItemsContainer>
        </>
      )}
      {currentMenu === 'stage-creation' && (
        <DropdownMenuSearchInput
          autoFocus
          placeholder="New stage"
          ref={stageInputRef}
        />
      )}
      {currentMenu === 'fields' && (
        <>
          <DropdownMenuHeader StartIcon={IconChevronLeft} onClick={resetMenu}>
            Fields
          </DropdownMenuHeader>
          <StyledDropdownMenuSeparator />
          {hasVisibleFields && (
            <ViewFieldsVisibilityDropdownSection
              title="Visible"
              fields={visibleBoardCardFields}
              onVisibilityChange={handleFieldVisibilityChange}
              isDraggable={true}
            />
          )}
          {hasVisibleFields && hasHiddenFields && (
            <StyledDropdownMenuSeparator />
          )}
          {hasHiddenFields && (
            <ViewFieldsVisibilityDropdownSection
              title="Hidden"
              fields={hiddenBoardCardFields}
              onVisibilityChange={handleFieldVisibilityChange}
              isDraggable={false}
            />
          )}
        </>
      )}
    </StyledDropdownMenu>
  );
};
