import React from "react";
import OverviewCard from "@/components/cards/OverviewCard";
import {
  IncomeIcon,
  OrderIcon,
  RefundIcon,
  SalesIcon,
  GreenGraphIcon,
  RedGraphIcon,
} from "@/components/icons";
type OverviewDataItem = {
  title: string;
  value: number | string;
  percentage: number;
  color: string;
  icon: React.ReactNode;
  graph: React.ReactNode;
  trend: boolean;
};

const overviewData: OverviewDataItem[] = [
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
    <div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-2">
        {overviewData.map((item) => (
          <div key={item.title}>
            <OverviewCard key={item.title} content={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
