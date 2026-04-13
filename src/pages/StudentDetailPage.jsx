import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useApp } from "../context/AppContext";
import OrderModal from "../components/OrderModal";

export default function StudentDetailPage() {
  const { id } = useParams(); // get the student id from the URL
  const { students, snacks, getStudentOrders } = useApp();
  const navigate = useNavigate();
  const [showOrder, setShowOrder] = useState(false);
  const [selectedSnack, setSelectedSnack] = useState(null);

  const student = students.find((s) => s.id === Number(id));
  const studentOrders = getStudentOrders(Number(id));

  if (!student) {
    return (
      <div className="text-center py-20 text-gray-400">
        <p className="text-5xl mb-3">😕</p>
        <p>Student not found.</p>
        <button
          onClick={() => navigate("/students")}
          className="mt-4 text-orange-500 underline"
        >
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Back button */}
      <button
        onClick={() => navigate("/students")}
        className="text-gray-400 hover:text-gray-600 mb-6 flex items-center gap-1 text-sm"
      >
        ← Back to Students
      </button>

      {/* Student info card */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-8 border border-gray-100">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-3xl">
            {student.name.charAt(0)}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{student.name}</h1>
            <p className="text-gray-400 text-sm">Referral: {student.referralCode}</p>
          </div>
          <div className="ml-auto text-right">
            <p className="text-xs text-gray-400">Total Spent</p>
            <p className="text-2xl font-bold text-orange-500">₹{student.totalSpent}</p>
          </div>
        </div>
      </div>

      {/* Place new order section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-700 mb-3">Place a New Order</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {snacks.map((snack) => (
            <button
              key={snack.id}
              onClick={() => { setSelectedSnack(snack); setShowOrder(true); }}
              className="bg-white border border-gray-200 rounded-xl p-3 text-left hover:border-orange-400 hover:shadow-sm transition-all"
            >
              <p className="font-medium text-gray-700 text-sm">{snack.name}</p>
              <p className="text-orange-500 text-sm font-semibold">₹{snack.price}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Order history */}
      <h2 className="text-lg font-semibold text-gray-700 mb-3">Order History</h2>
      {studentOrders.length === 0 ? (
        <div className="text-center py-10 text-gray-400 bg-gray-50 rounded-2xl">
          <p>No orders yet.</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
              <tr>
                <th className="text-left px-4 py-3">Snack</th>
                <th className="text-center px-4 py-3">Qty</th>
                <th className="text-right px-4 py-3">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {studentOrders.map((order) => {
                const snack = snacks.find((s) => s.id === order.snackId);
                return (
                  <tr key={order.id} className="hover:bg-orange-50 transition-colors">
                    <td className="px-4 py-3 text-gray-700">{snack?.name || "Unknown"}</td>
                    <td className="px-4 py-3 text-center text-gray-500">{order.quantity}</td>
                    <td className="px-4 py-3 text-right font-semibold text-orange-500">
                      ₹{order.payableAmount}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Order modal */}
      {showOrder && selectedSnack && (
        <OrderModal
          snack={selectedSnack}
          onClose={() => { setShowOrder(false); setSelectedSnack(null); }}
        />
      )}
    </div>
  );
}
