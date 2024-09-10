import { DepartmentActions } from '@/app/dashboard/(roles)/institute-coordinator/departments/DepartmentActions';
import { Button } from '@/components/ui/button';
import UserStatus from '@/components/ui/UserStatus';
import Departments from '@/types/departments';
import { ColumnDef } from '@tanstack/react-table';
import { ChevronsUpDownIcon } from 'lucide-react';

type ColumnProps = {
  onDelete: (roleId: string, uid: string, authId: string) => void;
  onSendInvite: (
    email: string,
    uid: string,
    name: string,
    instituteId: number,
    roleId: string
  ) => void;
  roleId: string;
  instituteId: number;
};

export const getDepartmentColumns = ({
  onDelete,
  onSendInvite,
  roleId,
  instituteId,
}: ColumnProps): ColumnDef<Departments>[] => [
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        className="px-0 hover:bg-transparent"
      >
        Department Name
        <ChevronsUpDownIcon className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue('name')}</div>,
  },
  {
    accessorFn: (row) => row.users?.name,
    accessorKey: 'users.name',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        className="px-0 hover:bg-transparent"
      >
        Department Coordinator
        <ChevronsUpDownIcon className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div>{row.original.users?.name}</div>,
  },
  {
    accessorFn: (row) => row.users?.email,
    id: 'users.email',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        className="px-0 hover:bg-transparent"
      >
        Email
        <ChevronsUpDownIcon className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue('users.email') || '-'}</div>
    ),
  },
  {
    id: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <UserStatus
        isRegistered={row.original.users?.is_registered || false}
        isVerified={row.original.users?.is_verified || false}
      />
    ),
  },
  {
    id: 'actions',
    cell: ({ row }) => (
      <DepartmentActions
        onDelete={async () =>
          onDelete(roleId, row.original.uid, row.original.users?.auth_id || '')
        }
        onSendInvite={async () =>
          onSendInvite(
            row.original.users?.email || '',
            row.original.uid,
            row.original.users?.name || '',
            instituteId,
            roleId
          )
        }
        isVerified={row.original.users?.is_verified || false}
      />
    ),
  },
];
