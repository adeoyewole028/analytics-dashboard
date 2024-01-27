import React from "react";
import ListingCard from "@/components/cards/ListingCard";
import { Button, Card } from "@nextui-org/react";

const productList = [
  {
    id: 1,
    name: "Book Bazaar",
    price: "$2,500,000",
    value: 15,
    class: {
      base: "max-w-md",
      track: "drop-shadow-md border border-default",
      indicator: "bg-[#6160DC]",
    },
  },
  {
    id: 2,
    name: "Artisan Aisle",
    price: "$1,800,000",
    value: 10,
    class: {
      base: "max-w-md",
      track: "drop-shadow-md border border-default",
      indicator: "bg-[#54C5EB]",
    },
  },
  {
    id: 3,
    name: "Toy Troop",
    price: "$1,200,000",
    value: 8,
    class: {
      base: "max-w-md",
      track: "drop-shadow-md border border-default",
      indicator: "bg-[#FFB74A]",
    },
  },
  {
    id: 4,
    name: "XStore",
    price: "$1,200,000",
    value: 4,
    class: {
      base: "max-w-md",
      track: "drop-shadow-md border border-default",
      indicator: "bg-[#FF4A55]",
    },
  },
];
export default function Listing() {
  return (
    <Card className="p-2 dark:border-default-foreground">
      <div className="flex justify-between items-center mb-5 px-4 w-full">
        <h1 className="text-[18px] font-semibold">Top Platform</h1>
        <div className="flex gap-3">
          <Button
            variant="light"
            className="text-[#34CAA5] text-[18px] font-medium"
          >
            See all
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-0 h-[366px] overflow-y-auto scrollbar">
        {productList.map((item) => (
          <div key={item.id}>
            <ListingCard key={item.id} content={item} />
          </div>
        ))}
      </div>
    </Card>
  );
}
