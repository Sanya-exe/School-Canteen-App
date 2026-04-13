// Mock snacks available in the canteen
export const initialSnacks = [
  { id: 1, name: "Samosa", price: 15, ordersCount: 24 },
  { id: 2, name: "Bread Omelette", price: 30, ordersCount: 18 },
  { id: 3, name: "Maggi", price: 25, ordersCount: 35 },
  { id: 4, name: "Cold Drink", price: 20, ordersCount: 42 },
  { id: 5, name: "Veg Burger", price: 40, ordersCount: 12 },
  { id: 6, name: "Chips", price: 10, ordersCount: 55 },
];

// Mock students already registered
export const initialStudents = [
  { id: 1, name: "Riya Sharma", referralCode: "REF-AB12", totalSpent: 120 },
  { id: 2, name: "Aman Verma", referralCode: "REF-CD34", totalSpent: 85 },
  { id: 3, name: "Priya Singh", referralCode: "REF-EF56", totalSpent: 200 },
];

// Mock past orders
export const initialOrders = [
  { id: 1, studentId: 1, snackId: 3, quantity: 2, payableAmount: 50 },
  { id: 2, studentId: 1, snackId: 4, quantity: 1, payableAmount: 20 },
  { id: 3, studentId: 2, snackId: 1, quantity: 3, payableAmount: 45 },
  { id: 4, studentId: 3, snackId: 5, quantity: 2, payableAmount: 80 },
  { id: 5, studentId: 3, snackId: 6, quantity: 4, payableAmount: 40 },
];
