'use client';

import AddInternshipDialog from '@/app/dashboard/(roles)/student/internships/AddInternshipDialog';
import GenerateInternshipApprovalLetter from '@/components/internships/GenerateInternshipApprovalLetter';
import InternshipCard from '@/app/dashboard/(roles)/student/internships/InternshipCard';
import { Loader } from '@/components/ui/Loader';
import { useUser } from '@/context/UserContext';
import { useUpdateCompanyMentorEmail } from '@/services/mutations/internships';
import { useStudentInternships } from '@/services/queries';
import { supabaseClient } from '@/utils/supabase/client';
import { useQuery } from '@supabase-cache-helpers/postgrest-swr';
import { useEffect, useState } from 'react';

const supabase = supabaseClient();

const InternshipsPage = () => {
  const { user, instituteId } = useUser();
  const [mounted, setMounted] = useState(false);
  const [showAddButton, setShowAddButton] = useState(false);

  const { data: internships, isLoading: isLoadingInternships } =
    useStudentInternships({
      studentId: user?.uid!,
    });

  const { data: profileData } = useQuery(
    user?.uid
      ? supabase
          .from('students')
          .select(
            'college_mentor_id, department_id, institutes (internship_approval_format_url)'
          )
          .eq('uid', user.uid)
          .single()
      : null
  );

  const { updateCompanyMentorEmail } = useUpdateCompanyMentorEmail({
    studentId: user?.uid!,
  });

  useEffect(() => setMounted(true), []);

  const canAddInternship = () => {
    const today = new Date().getTime();
    const hasActiveInternship = internships?.some((internship) => {
      const endDate = new Date(internship.end_date).getTime();
      const timeDifference = endDate - today;
      const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
      return daysRemaining >= 10;
    });

    return !hasActiveInternship;
  };

  useEffect(() => {
    internships && setShowAddButton(canAddInternship());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [internships]);

  return (
    <>
      <div className="flex justify-between items-center pb-5 h-14">
        <h1 className="font-semibold text-2xl">Internships</h1>
        <div className="flex flex-wrap gap-2">
          {showAddButton &&
            profileData?.college_mentor_id &&
            instituteId &&
            internships && (
              <AddInternshipDialog
                studentId={user?.uid!}
                collegeMentorId={profileData.college_mentor_id}
                departmentId={profileData.department_id}
                instituteId={instituteId}
                internships={internships}
              />
            )}
          {internships &&
            internships.length > 0 &&
            profileData?.institutes &&
            profileData.institutes.internship_approval_format_url && (
              <GenerateInternshipApprovalLetter
                approvalFormatUrl={
                  profileData.institutes.internship_approval_format_url
                }
              />
            )}
        </div>
      </div>
      {(!mounted || isLoadingInternships) && (
        <div className="h-60 flex justify-center items-center">
          <Loader />
        </div>
      )}
      {internships &&
        internships.length !== 0 &&
        profileData?.college_mentor_id && (
          <div className="grid md:grid-cols-2 gap-5">
            {internships &&
              internships.map((internship) => (
                <InternshipCard
                  key={internship.id}
                  internship={internship}
                  updateCompanyMentorEmail={updateCompanyMentorEmail}
                />
              ))}
          </div>
        )}
      {mounted &&
        !isLoadingInternships &&
        profileData?.college_mentor_id === null && (
          <div className="md:text-xl h-60 flex justify-center items-center">
            You need to be assigned a college mentor to add internships.
          </div>
        )}
      {mounted &&
        profileData?.college_mentor_id !== null &&
        internships &&
        internships.length === 0 && (
          <div className="md:text-xl h-60 flex justify-center items-center">
            No internships added yet.
          </div>
        )}
    </>
  );
};

export default InternshipsPage;
