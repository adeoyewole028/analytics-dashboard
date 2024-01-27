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
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  {
    id: 2,
    name: "Jaydon Vaccaro",
    date: "Nov 15, 2023",
    status: "refund",
    amount: "150,000",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    id: 3,
    name: "Corey Schleifer",
    date: "Nov 15, 2023",
    status: "paid",
    amount: "87,000",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  },
  {
    id: 4,
    name: "Cooper Press",
    date: "Nov 15, 2023",
    status: "refund",
    amount: "100,000",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
  },
  {
    id: 5,
    name: "Phillip Lubin",
    date: "Nov 15, 2023",
    status: "paid",
    amount: "78,000",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
  },
];

export { users, userColumn };
