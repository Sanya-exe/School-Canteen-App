import { useState } from "react";
import { useApp } from "../context/AppContext";
import SnackCard from "../components/SnackCard";
import OrderModal from "../components/OrderModal";

export default function SnacksPage() {
  const { snacks } = useApp();
  const [selectedSnack, setSelectedSnack] = useState(null);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Available Snacks</h1>
      <p className="text-gray-500 mb-8">Pick your favourite and place an order!</p>

      {/* Grid of snack cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5">
        {snacks.map((snack) => (
          <SnackCard
            key={snack.id}
            snack={snack}
            onOrder={(snack) => setSelectedSnack(snack)}
          />
        ))}
      </div>

      {/* Show modal only when a snack is selected */}
      {selectedSnack && (
        <OrderModal
          snack={selectedSnack}
          onClose={() => setSelectedSnack(null)}
        />
      )}
    </div>
  );
}
