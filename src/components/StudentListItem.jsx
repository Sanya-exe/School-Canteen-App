import { useNavigate } from "react-router-dom";

// A single row in the students list
export default function StudentListItem({ student }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex items-center justify-between hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        {/* Avatar circle with first letter of name */}
        <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xl">
          {student.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-gray-800">{student.name}</p>
          <p className="text-xs text-gray-400">Code: {student.referralCode}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-xs text-gray-400">Total Spent</p>
          <p className="font-bold text-orange-500">₹{student.totalSpent}</p>
        </div>
        <button
          onClick={() => navigate(`/students/${student.id}`)}
          className="bg-gray-100 hover:bg-orange-100 text-gray-600 hover:text-orange-600 px-4 py-2 rounded-xl text-sm font-medium transition-colors"
        >
          View
        </button>
      </div>
    </div>
  );
}
