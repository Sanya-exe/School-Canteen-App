import { useForm } from "react-hook-form";
import { useApp } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function CreateStudentPage() {
  const { addStudent } = useApp();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    addStudent(data.name.trim());
    navigate("/students"); // go back to students list after creating
  }

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Add New Student</h1>
      <p className="text-gray-500 mb-8">The referral code will be generated automatically.</p>

      <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">

          {/* Name field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Student Name
            </label>
            <input
              type="text"
              placeholder="e.g. Rohit Kumar"
              {...register("name", {
                required: "Name is required",
                minLength: { value: 2, message: "Name must be at least 2 characters" },
              })}
              className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Info about referral code */}
          <div className="bg-orange-50 rounded-xl px-4 py-3 text-sm text-orange-700">
            A unique referral code like <strong>REF-XY89</strong> will be auto-assigned.
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-xl transition-colors"
          >
            Create Student
          </button>

          {/* Cancel */}
          <button
            type="button"
            onClick={() => navigate("/students")}
            className="text-gray-400 hover:text-gray-600 text-sm text-center"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
