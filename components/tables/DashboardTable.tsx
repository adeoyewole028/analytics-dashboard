"use client";
import React, { useEffect, useState } from "react";
import CustomTable from "./table";

import { userColumn, users } from "@/config/data";
import { Button } from "@nextui-org/button";
import { Skeleton } from "@nextui-org/react";
import { ViewIcon } from "../icons";

export default function DashboardTable() {
  const [loading, setLoading] = useState(true);
  const actionButtons = [
    {
      name: "View",
      onClick: (val: any) => {
        console.log(val);
      },
      icon: <ViewIcon />,
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <div className="mx-auto max-w-7xl">
        <div className="">
          {/* table */}
          <div className="">
            {loading ? (
              <>
                <div className="max-w-7xl w-full flex items-center gap-3 px-5">
                  <div className="w-full flex flex-col gap-2">
                    <Skeleton className="h-10 w-full rounded-lg" />
                    <Skeleton className="h-10 w-full rounded-lg" />
                    <Skeleton className="h-10 w-full rounded-lg" />
                    <Skeleton className="h-10 w-full rounded-lg" />
                    <Skeleton className="h-10 w-full rounded-lg" />
                    <Skeleton className="h-10 w-full rounded-lg" />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-between items-center pl-6 w-full">
                  <h1 className="text-[18px] font-semibold">Last Orders</h1>
                  <div className="flex gap-3">
                    <Button
                      variant="light"
                      className="text-[#34CAA5] text-[18px] font-medium"
                    >
                      See all
                    </Button>
                  </div>
                </div>
                <CustomTable
                  rows={users}
                  columns={userColumn}
                  actionButtons={actionButtons}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
