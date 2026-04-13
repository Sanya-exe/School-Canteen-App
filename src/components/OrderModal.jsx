import { useForm } from "react-hook-form";
import { useApp } from "../context/AppContext";
import { useState } from "react";

// OrderModal is the popup that appears when you click "Order" on a snack
export default function OrderModal({ snack, onClose }) {
  const { students, placeOrder } = useApp();
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { studentId: "", quantity: 1 },
  });

  // Watch quantity in real-time to show live price calculation
  const quantity = watch("quantity", 1);
  const total = snack.price * quantity;

  function onSubmit(data) {
    placeOrder(Number(data.studentId), snack.id, Number(data.quantity));
    setSuccess(true);
    // Close the modal after a short delay
    setTimeout(() => onClose(), 1500);
  }

  return (
    // Dark overlay behind the modal
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold text-gray-800 mb-1">Order Snack</h2>
        <p className="text-orange-500 font-semibold mb-5">
          {snack.name} — ₹{snack.price} each
        </p>

        {success ? (
          <div className="text-center py-6">
            <div className="text-4xl mb-2">✅</div>
            <p className="text-green-600 font-semibold text-lg">Order placed!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

            {/* Student selector */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Student
              </label>
              <select
                {...register("studentId", { required: "Please select a student" })}
                className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value="">-- Choose a student --</option>
                {students.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
              {errors.studentId && (
                <p className="text-red-500 text-xs mt-1">{errors.studentId.message}</p>
              )}
            </div>

            {/* Quantity input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Quantity (1–5)
              </label>
              <input
                type="number"
                {...register("quantity", {
                  required: "Quantity is required",
                  min: { value: 1, message: "Minimum 1" },
                  max: { value: 5, message: "Maximum 5" },
                })}
                className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              {errors.quantity && (
                <p className="text-red-500 text-xs mt-1">{errors.quantity.message}</p>
              )}
            </div>

            {/* Live total */}
            <div className="bg-orange-50 rounded-xl px-4 py-3 flex justify-between items-center">
              <span className="text-gray-600">Total Payable</span>
              <span className="font-bold text-orange-600 text-lg">₹{total}</span>
            </div>

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-xl transition-colors"
            >
              Confirm Order
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
