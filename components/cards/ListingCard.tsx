"use client";
import React from "react";
import { Card, CardBody, Divider } from "@nextui-org/react";
import ProgressBar from "../Progress";

export default function ListingCard({ content }: { content: any }) {
  return (
    <Card className="max-w-lg rounded-none shadow-none bg-white text-[#14251B] dark:bg-background dark:text-foreground">
      <CardBody className="py-1 grid grid-cols-1 p-5 gap-3">
        <div>
          <h2 className="text-[18px] font-semibold uppercase">{content.name}</h2>
        </div>
        <div className="col-span-2">
          <ProgressBar className={content.class} value={content.value * 5} />
        </div>
        <div className="w-full flex justify-between">
          <p>{content.price}</p>
          <p>+{content.value}%</p>
        </div>
      </CardBody>
      <Divider className="bg-gray-200" />
    </Card>
  );
}
