# School Canteen App

A simple frontend prototype for a school canteen ordering system.

## What does it do?

Students can browse available snacks, place orders, and you can track how much each student has spent. It's not connected to a real backend — everything runs on mock/fake data stored in the browser's localStorage.

## How to run it locally

Make sure you have Node.js installed, then:

```bash
npm install
npm run dev
```

Open your browser and go to `http://localhost:5173`.

## Pages in the app

- **Snacks** — see all canteen snacks with price and order count. Click "Order" to place an order.
- **Students** — list of all students with their total spending.
- **Student Detail** — click any student to see their full order history and place a new order.
- **Create Student** — fill in a name and a referral code gets auto-generated.

## Libraries used

- **React + Vite** — for building the UI and running the dev server
- **React Router v6** — for switching between pages
- **React Hook Form** — for handling forms and validation
- **TailwindCSS** — for styling (utility classes)

## How the data works

There's no backend. All data (snacks, students, orders) is hardcoded in `src/data/mockData.js`. When you place an order, it gets saved to `localStorage` so it persists even after a page refresh. Students and snack counts update in real time using React Context.

## Folder structure

```
src/
├── components/     # Reusable UI components (SnackCard, StudentListItem, etc.)
├── pages/          # Full page screens
├── context/        # Global state using React Context
└── data/           # Mock data
```
