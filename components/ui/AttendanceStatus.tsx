'use client';

import { Badge } from '@/components/ui/badge';

const AttendanceStatus = ({
  status,
  noInternship,
  isHolidayForStudent,
}: {
  status: string | null;
  noInternship: boolean;
  isHolidayForStudent: boolean | null;
}) => {
  return (
    <div className="flex items-center">
      {noInternship && (
        <Badge className="bg-gray-500 hover:bg-gray-600 dark:bg-gray-300 dark:hover:bg-gray-400 text-nowrap">
          No Internship
        </Badge>
      )}
      {status === 'present' && (
        <Badge className="bg-green-500 hover:bg-green-600 dark:bg-green-300 dark:hover:bg-green-400">
          Present
        </Badge>
      )}
      {status === 'pending' && (
        <Badge className="bg-yellow-400 hover:bg-yellow-500 dark:bg-yellow-200 dark:hover:bg-yellow-300">
          Pending
        </Badge>
      )}
      {status === 'absent' && (
        <Badge className="bg-red-500 hover:bg-red-600 dark:bg-red-300 dark:hover:bg-red-400">
          Absent
        </Badge>
      )}
      {status === 'holiday' && (
        <Badge className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-300 dark:hover:bg-orange-400 text-nowrap">
          Holiday
        </Badge>
      )}
      {!status && !isHolidayForStudent && !noInternship && (
        <Badge className="bg-yellow-400 hover:bg-yellow-500 dark:bg-yellow-200 dark:hover:bg-yellow-300">
          Not submitted
        </Badge>
      )}
      {!status && isHolidayForStudent && !noInternship && (
        <Badge className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-300 dark:hover:bg-orange-400 text-nowrap">
          Holiday
        </Badge>
      )}
    </div>
  );
};

export default AttendanceStatus;
