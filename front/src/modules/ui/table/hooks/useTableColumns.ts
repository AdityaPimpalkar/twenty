import { useCallback } from 'react';

import type { ViewFieldMetadata } from '@/ui/editable-field/types/ViewField';
import { sortAndFilterBarScopedState } from '@/ui/filter-n-sort/states/sortAndFilterBarScopedState';
import { useRecoilScopedState } from '@/ui/utilities/recoil-scope/hooks/useRecoilScopedState';
import { useRecoilScopedValue } from '@/ui/utilities/recoil-scope/hooks/useRecoilScopedValue';
import { useUpdateManyViewFieldMutation } from '~/generated/graphql';

import { TableRecoilScopeContext } from '../states/recoil-scope-contexts/TableRecoilScopeContext';
import { tableColumnsByKeyScopedSelector } from '../states/selectors/tableColumnsByKeyScopedSelector';
import { tableColumnsScopedState } from '../states/tableColumnsScopedState';
import { currentTableViewIdState } from '../states/tableViewsState';
import type { ColumnDefinition } from '../types/ColumnDefinition';

export const useTableColumns = () => {
  const currentTableViewId = useRecoilScopedValue(
    currentTableViewIdState,
    TableRecoilScopeContext,
  );

  const [tableColumns, setTableColumns] = useRecoilScopedState(
    tableColumnsScopedState,
    TableRecoilScopeContext,
  );
  const tableColumnsByKey = useRecoilScopedValue(
    tableColumnsByKeyScopedSelector,
    TableRecoilScopeContext,
  );
  const [, setSortAndFilterBar] = useRecoilScopedState(
    sortAndFilterBarScopedState,
    TableRecoilScopeContext,
  );

  const handleColumnVisibilityChange = useCallback(
    (column: ColumnDefinition<ViewFieldMetadata>) => {
      const nextColumns = tableColumnsByKey[column.key]
        ? tableColumns.map((previousColumn) =>
            previousColumn.key === column.key
              ? { ...previousColumn, isVisible: !column.isVisible }
              : previousColumn,
          )
        : [...tableColumns, { ...column, isVisible: true }].sort(
            (columnA, columnB) => columnA.index - columnB.index,
          );

      setTableColumns(nextColumns);
      setSortAndFilterBar(true);

      nextColumns.map(async (item) => {
        await Promise.all([
          updateManyViewFieldMutation({
            variables: {
              where: {
                viewId: { equals: currentTableViewId },
                key: { equals: item.key },
              },
              data: {
                isVisible: item.isVisible,
              },
            },
          }),
        ]);
      });
    },
    [tableColumnsByKey, tableColumns, setTableColumns, setSortAndFilterBar],
  );

  const [updateManyViewFieldMutation] = useUpdateManyViewFieldMutation();

  function handleColumnOrdering(
    columns: ColumnDefinition<ViewFieldMetadata>[],
  ) {
    setTableColumns(columns);

    columns.map(async (item, index) => {
      await Promise.all([
        updateManyViewFieldMutation({
          variables: {
            where: {
              viewId: { equals: currentTableViewId },
              key: { equals: item.key },
            },
            data: {
              index,
            },
          },
        }),
      ]);
    });
  }

  return { handleColumnVisibilityChange, handleColumnOrdering };
};
