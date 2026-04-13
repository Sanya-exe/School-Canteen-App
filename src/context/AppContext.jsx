import { createContext, useContext, useState, useEffect } from "react";
import { initialSnacks, initialStudents, initialOrders } from "../data/mockData";

// Create the context (like a shared box everyone can access)
const AppContext = createContext();

export function AppProvider({ children }) {
  const [snacks, setSnacks] = useState(initialSnacks);
  const [students, setStudents] = useState(initialStudents);

  // Load orders from localStorage if available, else use mock data
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem("canteen_orders");
    return saved ? JSON.parse(saved) : initialOrders;
  });

  // Save orders to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("canteen_orders", JSON.stringify(orders));
  }, [orders]);

  // Function to add a new student
  function addStudent(name) {
    const randomCode = "REF-" + Math.random().toString(36).substring(2, 6).toUpperCase();
    const newStudent = {
      id: students.length + 1 + Date.now(), // unique id
      name,
      referralCode: randomCode,
      totalSpent: 0,
    };
    setStudents((prev) => [...prev, newStudent]);
    return newStudent;
  }

  // Function to place a new order
  function placeOrder(studentId, snackId, quantity) {
    const snack = snacks.find((s) => s.id === snackId);
    if (!snack) return;

    const payableAmount = snack.price * quantity;

    const newOrder = {
      id: Date.now(),
      studentId,
      snackId,
      quantity,
      payableAmount,
    };

    // Add the order
    setOrders((prev) => [...prev, newOrder]);

    // Update the snack's ordersCount
    setSnacks((prev) =>
      prev.map((s) =>
        s.id === snackId ? { ...s, ordersCount: s.ordersCount + 1 } : s
      )
    );

    // Update the student's totalSpent
    setStudents((prev) =>
      prev.map((s) =>
        s.id === studentId
          ? { ...s, totalSpent: s.totalSpent + payableAmount }
          : s
      )
    );
  }

  // Helper: get all orders for a specific student
  function getStudentOrders(studentId) {
    return orders.filter((o) => o.studentId === studentId);
  }

  return (
    <AppContext.Provider
      value={{ snacks, students, orders, addStudent, placeOrder, getStudentOrders }}
    >
      {children}
    </AppContext.Provider>
  );
}

// Custom hook so we don't have to write useContext(AppContext) everywhere
export function useApp() {
  return useContext(AppContext);
}
