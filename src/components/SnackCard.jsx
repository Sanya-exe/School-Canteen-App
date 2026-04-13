// SnackCard shows a single snack with its details and an Order button
export default function SnackCard({ snack, onOrder }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col gap-3 border border-gray-100 hover:shadow-lg transition-shadow">
      {/* Snack emoji based on name — just for fun */}
      <div className="text-4xl text-center">
        {snack.name === "Samosa" && "🥟"}
        {snack.name === "Bread Omelette" && "🍳"}
        {snack.name === "Maggi" && "🍜"}
        {snack.name === "Cold Drink" && "🥤"}
        {snack.name === "Veg Burger" && "🍔"}
        {snack.name === "Chips" && "🍟"}
        {!["Samosa","Bread Omelette","Maggi","Cold Drink","Veg Burger","Chips"].includes(snack.name) && "🍽️"}
      </div>

      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-800">{snack.name}</h3>
        <p className="text-orange-500 font-bold text-xl">₹{snack.price}</p>
        <p className="text-xs text-gray-400 mt-1">{snack.ordersCount} orders so far</p>
      </div>

      <button
        onClick={() => onOrder(snack)}
        className="mt-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-xl transition-colors"
      >
        Order
      </button>
    </div>
  );
}
