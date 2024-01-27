"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Select,
  SelectItem,
  Chip,
  Avatar,
} from "@nextui-org/react";
import { TrendDownIcon, TrendUpIcon } from "../icons";

const PeriodType = [
  {
    label: "This Month",
    value: "month",
  },
  {
    label: "This Week",
    value: "week",
  },
  {
    label: "This Year",
    value: "year",
  },
  {
    label: "Today",
    value: "today",
  },
];
export default function OverviewCard({ content }: { content: any }) {
  return (
    <Card className=" max-w-md sm:max-w-xs md:max-w-7xl bg-white text-black p-1.5 dark:bg-background dark:text-foreground">
      <CardHeader className="flex gap-3 p-1">
        <div className="flex items-center justify-between w-full">
          <div>{content.icon}</div>
          <div>{content.graph}</div>
        </div>
      </CardHeader>
      <CardBody className="p-1">
        <h2 className="text-[18px] font-medium mb-3 text-[#898989] uppercase">
          {content.title}
        </h2>
        <p className="font-semibold text-2xl text-[#3A3F51]">{content.value}</p>
      </CardBody>
      <CardFooter className="p-2 flex flex-wrap font-semibold text-sm">
        <Chip
          color={content.trend ? "success" : "danger"}
          variant="flat"
          startContent={content.trend ? <TrendUpIcon /> : <TrendDownIcon />}
          className={content.trend ? "text-[#2DBE5B]" : "text-[#ED544E]"}
        >
          {content.percentage}%
        </Chip>
        <div className="text-[#606060] font-normal text-sm ml-auto">
          {" "}
          vs. previous month
        </div>
      </CardFooter>
    </Card>
  );
}
