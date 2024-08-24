import AddDepartmentForm from '@/app/dashboard/(roles)/institute-coordinator/departments/AddDepartmentForm';

const DepartmentsPage = async () => {
  return (
    <div>
      <div className="flex justify-between items-center pb-5">
        <h1 className="font-semibold text-2xl">Departments</h1>
        <AddDepartmentForm />
      </div>
      <div className="p-4 bg-card rounded-lg">Table here</div>
    </div>
  );
};

export default DepartmentsPage;