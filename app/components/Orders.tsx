import React from "react";
import OrderCard from "@/components/cards/OrdersCards";
import {
  IncomeIcon,
  OrderIcon,
  RefundIcon,
  SalesIcon,
  GreenGraphIcon,
  RedGraphIcon,
} from "@/components/icons";
type OrderDataItem = {
  title: string;
  value: number | string;
  percentage: number;
  color: string;
  icon: React.ReactNode;
  graph: React.ReactNode;
  trend: boolean;
};

const orderData: OrderDataItem[] = [
  {
    title: "Total Order",
    value: 350,
    percentage: 23.5,
    color: "bg-indigo-500",
    icon: <OrderIcon />,
    graph: <GreenGraphIcon />,
    trend: true,
  },
  {
    title: "Total Refund",
    value: 270,
    percentage: 23.5,
    color: "bg-green-500",
    icon: <RefundIcon />,
    graph: <RedGraphIcon />,
    trend: false,
  },
  {
    title: "Average Sales",
    value: 1567,
    percentage: 23.5,
    color: "bg-red-500",
    icon: <SalesIcon />,
    graph: <RedGraphIcon />,
    trend: false,
  },
  {
    title: "Total Income",
    value: " $350.000",
    percentage: 23.5,
    color: "bg-red-500",
    icon: <IncomeIcon />,
    graph: <GreenGraphIcon />,
    trend: true,
  },
];
export default function Orders() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="grid  gap-4 lg:grid-cols-2">
        {orderData.map((item) => (
          <div key={item.title}>
            <OrderCard key={item.title} content={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
