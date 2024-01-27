const userColumn = [
  { name: "Name", uid: "name" },
  { name: "Date", uid: "date" },
  { name: "Amount", uid: "amount" },
  { name: "Status", uid: "status" },
  { name: "Invoice", uid: "action" },
];

const users = [
  {
    id: 1,
    name: "Marcus Bergson",
    date: "Nov 15, 2023",
    status: "paid",
    amount: "80,000",
    avatar: "/marcus.png",
  },
  {
    id: 2,
    name: "Jaydon Vaccaro",
    date: "Nov 15, 2023",
    status: "refund",
    amount: "150,000",
    avatar: "/jaydon.png",
  },
  {
    id: 3,
    name: "Corey Schleifer",
    date: "Nov 15, 2023",
    status: "paid",
    amount: "87,000",
    avatar: "/corey.png",
  },
  {
    id: 4,
    name: "Cooper Press",
    date: "Nov 15, 2023",
    status: "refund",
    amount: "100,000",
    avatar: "/cooper.png",
  },
  {
    id: 5,
    name: "Phillip Lubin",
    date: "Nov 15, 2023",
    status: "paid",
    amount: "78,000",
    avatar: "/philip.png",
  },
];

export { users, userColumn };
