import { cloneElement, useCallback } from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import {
  DragDropContext,
  Draggable,
  Droppable,
  OnDragEndResponder,
} from '@hello-pangea/dnd';

import {
  DropdownMenuItem,
  DropdownMenuItemProps,
} from '@/ui/dropdown/components/DropdownMenuItem';
import { StyledDropdownMenuItemsContainer } from '@/ui/dropdown/components/StyledDropdownMenuItemsContainer';
import { StyledDropdownMenuSubheader } from '@/ui/dropdown/components/StyledDropdownMenuSubheader';
import type { ViewFieldMetadata } from '@/ui/editable-field/types/ViewField';

import { useTableColumns } from '../../hooks/useTableColumns';
import type { ColumnDefinition } from '../../types/ColumnDefinition';

const MenuItemContainer = styled.div`
  width: 100%;
`;

type TableOptionsDropdownSectionProps = {
  renderLeftActions?: (
    column: ColumnDefinition<ViewFieldMetadata>,
  ) => DropdownMenuItemProps['actions'];
  renderActions: (
    column: ColumnDefinition<ViewFieldMetadata>,
  ) => DropdownMenuItemProps['actions'];
  title: string;
  columns: ColumnDefinition<ViewFieldMetadata>[];
};

export function TableOptionsDropdownSection({
  renderLeftActions,
  renderActions,
  title,
  columns,
}: TableOptionsDropdownSectionProps) {
  const theme = useTheme();

  const { handleColumnOrdering } = useTableColumns();

  const onDragEnd: OnDragEndResponder = useCallback(
    (result) => {
      if (!result.destination) {
        return;
      }

      const reorderedList = Array.from(columns);
      const [removed] = reorderedList.splice(result.source.index, 1);
      reorderedList.splice(result.destination.index, 0, removed);

      handleColumnOrdering(reorderedList);
    },
    [columns, handleColumnOrdering],
  );

  return (
    <>
      <StyledDropdownMenuSubheader>{title}</StyledDropdownMenuSubheader>
      <StyledDropdownMenuItemsContainer>
        {renderLeftActions && (
          <DragDropContext onDragEnd={onDragEnd}>
            <MenuItemContainer>
              <Droppable droppableId="droppable">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {columns.map((column, index) => (
                      <Draggable
                        key={column.key}
                        draggableId={column.key}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <DropdownMenuItem
                              leftActions={
                                renderLeftActions
                                  ? renderLeftActions(column)
                                  : null
                              }
                              actions={renderActions(column)}
                              isDragging={snapshot.isDragging}
                            >
                              {column.icon &&
                                cloneElement(column.icon, {
                                  size: theme.icon.size.md,
                                })}
                              {column.name}
                            </DropdownMenuItem>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </MenuItemContainer>
          </DragDropContext>
        )}
        {!renderLeftActions &&
          columns.map((column) => (
            <DropdownMenuItem key={column.key} actions={renderActions(column)}>
              {column.icon &&
                cloneElement(column.icon, {
                  size: theme.icon.size.md,
                })}
              {column.name}
            </DropdownMenuItem>
          ))}
      </StyledDropdownMenuItemsContainer>
    </>
  );
}
