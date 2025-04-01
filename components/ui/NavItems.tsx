/* eslint-disable @next/next/no-img-element */
import { Skeleton } from '@/components/ui/skeleton';
import { Switch } from '@/components/ui/switch';
import { useUser } from '@/context/UserContext';
import { supabaseClient } from '@/utils/supabase/client';
import {
  DotIcon,
  LayoutDashboardIcon,
  LogOutIcon,
  Settings2Icon,
  SunMoonIcon,
  UserCog,
  ScrollText,
} from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const NavItems = ({
  pathname,
  role,
  setSheetOpen,
}: {
  pathname: string;
  role: string;
  setSheetOpen?: (open: boolean) => void;
}) => {
  const { roles } = useUser();
  const { resolvedTheme } = useTheme();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const logout = async () => {
    const supabase = supabaseClient();
    await supabase.auth.signOut({ scope: 'local' });
  };

  const menuitems = [
    {
      path: `/dashboard/${role}`,
      title: 'Home',
      icon: '/home.svg',
      iconLight: '/home.svg',
      iconDark: '/home-dark.svg',
      access: [
        'institute-coordinator',
        'department-coordinator',
        'college-mentor',
        'student',
        'company-mentor',
      ],
    },
    {
      path: `/dashboard/${role}/departments`,
      title: 'Departments',
      icon: '/department.svg',
      iconLight: '/department.svg',
      iconDark: '/department-dark.svg',
      access: ['institute-coordinator'],
    },
    {
      path: `/dashboard/${role}/college-mentors`,
      title: 'College Mentors',
      icon: '/collegeMentor.svg',
      iconLight: '/collegeMentor.svg',
      iconDark: '/collegeMentor-dark.svg',
      access: ['institute-coordinator', 'department-coordinator'],
    },
    {
      path: `/dashboard/${role}/students`,
      title: 'Students',
      icon: '/student.svg',
      iconLight: '/student.svg',
      iconDark: '/student-dark.svg',
      access: [
        'institute-coordinator',
        'department-coordinator',
        'college-mentor',
      ],
    },
    {
      path: `/dashboard/${role}/internships`,
      title: 'Internships',
      icon: '/internship.svg',
      iconLight: '/internship.svg',
      iconDark: '/internship-dark.svg',
      access: ['department-coordinator', 'college-mentor', 'student'],
    },
    {
      path: `/dashboard/${role}/attendance`,
      title: 'Attendance',
      icon: '/attendance.svg',
      iconLight: '/attendance.svg',
      iconDark: '/attendance-dark.svg',
      access: ['college-mentor', 'company-mentor', 'department-coordinator'],
    },
    {
      path: `/dashboard/${role}/reports`,
      title: 'Reports',
      icon: ScrollText,
      access: [
        'college-mentor',
        'company-mentor',
        'department-coordinator',
        'student',
      ],
    },
    {
      path: `/dashboard/${role}/evaluations`,
      title: 'Evaluations',
      access: ['department-coordinator', 'college-mentor', 'student'],
    },
  ];

  return (
    <div className="mt-3 lg:mt-7 lg:mb-4 flex flex-col gap-4 flex-grow overflow-auto">
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 text-muted-foreground items-center">
          <LayoutDashboardIcon className="h-5 w-5" />
          <h4 className="text-muted-foreground font-medium">MENU</h4>
        </div>
        <ul className="flex flex-col gap-1">
          {menuitems.map((item) => {
            if (item.access.includes(role)) {
              let IconComponent;
                  if (!mounted) {
                    IconComponent = <Skeleton className="h-5 w-5" />;
                  } else if (typeof item.icon === 'string') {
                    const iconSrc =
                      resolvedTheme === 'dark' ? item.iconDark : item.iconLight;
                    IconComponent = (
                      <img src={iconSrc} alt={item.title} className="h-5 w-5" />
                    );
                  } else {
                    IconComponent = (
                      <item.icon className="h-5 w-5" strokeWidth={1.5} />
                    );
                  }

              return (
                <li
                  key={item.path}
                  onClick={() => {
                    if (setSheetOpen) {
                      setSheetOpen(false);
                    }
                  }}
                >
                  <Link
                    href={item.path}
                    className={`flex gap-2 w-full p-2 rounded-lg hover:text-primary ${
                      (pathname === item.path ||
                        (item.path !== `/dashboard/${role}` &&
                          pathname.startsWith(item.path))) &&
                      'text-primary'
                    }`}
                  >
                    {IconComponent}
                    {item.title}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 text-muted-foreground items-center">
          <Settings2Icon className="h-5 w-5" />
          <h4 className="text-muted-foreground font-medium">OTHER</h4>
        </div>
        <ul className="flex flex-col gap-1">
          <li
            onClick={() => {
              if (setSheetOpen) {
                setSheetOpen(false);
              }
            }}
          >
            <Link
              href={`/dashboard/${role}/profile`}
              className={`flex gap-2 w-full p-2 rounded-lg hover:text-primary ${
                pathname === `/dashboard/${role}/profile` && 'text-primary'
              }`}
            >
              <UserCog strokeWidth={1.5} />
              Profile
            </Link>
          </li>
          {Object.keys(roles).length > 1 && (
            <li
              onClick={() => {
                if (setSheetOpen) {
                  setSheetOpen(false);
                }
              }}
            >
              <Link
                href={`/dashboard`}
                className={`flex gap-2 w-full p-2 rounded-lg hover:text-primary ${
                  pathname === '/dashboard' && 'text-primary'
                }`}
              >
                {mounted ? (
                  <img
                    src={
                      resolvedTheme === 'dark'
                        ? '/switch-dark.svg'
                        : '/switch.svg'
                    }
                    alt="Switch Roles"
                    className="h-5 w-5"
                  />
                ) : (
                  <Skeleton className="h-5 w-5" />
                )}
                Switch role
              </Link>
            </li>
          )}
        </ul>
      </div>
      <hr className="h-0.5 bg-slate-200 lg:bg-muted dark:bg-muted" />
      <div className="flex flex-col gap-1">
        <div className="flex gap-2 text-muted-foreground items-center p-2">
          <SunMoonIcon className="h-5 w-5" />
          <h4 className="font-medium mr-auto">Dark Mode</h4>
          {mounted ? (
            <Switch
              checked={theme === 'dark'}
              onClick={() => {
                setTheme(theme === 'light' ? 'dark' : 'light');
              }}
            />
          ) : (
            <Skeleton className="h-6 w-11 rounded-full" />
          )}
        </div>
        <div className="p-2">
          <button
            onClick={logout}
            className="flex gap-2 text-muted-foreground items-center w-fit hover:text-destructive"
          >
            <LogOutIcon className="h-5 w-5" />
            <h4 className="font-medium">Logout</h4>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavItems;
