'use client';

import getEvaluationStudentsColumns from '@/app/dashboard/(roles)/college-mentor/evaluations/[id]/EvaluationStudentsColumns';
import { Card } from '@/components/ui/card';
import { Loader } from '@/components/ui/Loader';
import { Skeleton } from '@/components/ui/skeleton';
import TableContent from '@/components/ui/TableContent';
import TablePagination from '@/components/ui/TablePagination';
import TableSearch from '@/components/ui/TableSearch';
import { useStudentsForMentorEvaluation } from '@/services/queries';
import MentorEvaluationStudent from '@/types/mentor-evaluation-students';
import {
  SortingState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useEffect, useMemo, useState } from 'react';

const EvaluationStudentsTable = ({
  mentorEvalId,
}: {
  mentorEvalId: string;
}) => {
  const [mounted, setMounted] = useState(false);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const { data: students, isLoading } = useStudentsForMentorEvaluation({
    mentorEvaluationId: mentorEvalId,
  });

  const parameterColumns = useMemo(() => getEvaluationStudentsColumns(), []);

  const tableData = useMemo(
    () => (isLoading ? Array(10).fill({}) : students),
    [isLoading, students]
  );

  const tableColumns = useMemo(
    () =>
      isLoading
        ? parameterColumns.map((column, index) => ({
            ...column,
            cell: () => (
              <Skeleton key={`loading-cell-${index}`} className="h-8 rounded" />
            ),
          }))
        : parameterColumns,
    [isLoading, parameterColumns]
  );

  const table = useReactTable({
    data: tableData as MentorEvaluationStudent[],
    columns: tableColumns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    state: {
      sorting,
      pagination,
    },
  });

  if (!mounted) {
    return (
      <div className="h-80 flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <Card className="p-5">
      {isLoading ? (
        <Skeleton className="h-10 max-w-xs rounded-md" />
      ) : (
        mounted && (
          <TableSearch table={table} placeholder="Search Name" column="name" />
        )
      )}
      {mounted && (
        <TableContent<MentorEvaluationStudent>
          table={table}
          isLoading={isLoading}
          mounted={mounted}
          tableData={students}
          tableColumns={tableColumns}
        />
      )}
      {students && <TablePagination table={table} />}
    </Card>
  );
};

export default EvaluationStudentsTable;
