import { useApp } from "../context/AppContext";
import StudentListItem from "../components/StudentListItem";
import { useNavigate } from "react-router-dom";

export default function StudentsPage() {
  const { students } = useApp();
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-3xl font-bold text-gray-800">Students</h1>
        <button
          onClick={() => navigate("/create-student")}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-xl text-sm transition-colors"
        >
          + Add Student
        </button>
      </div>
      <p className="text-gray-500 mb-8">All registered students and their spending.</p>

      {students.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <p className="text-5xl mb-3">👤</p>
          <p>No students yet. Add one!</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {students.map((student) => (
            <StudentListItem key={student.id} student={student} />
          ))}
        </div>
      )}
    </div>
  );
}
