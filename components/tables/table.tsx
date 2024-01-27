"use client";
import React, { useCallback } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  User,
} from "@nextui-org/react";
import { TableRows } from "@/@types";

type tableProps = {
  rows: TableRows[];
  columns: {
    name: string;
    uid: string;
  }[];
  actionButtons?: {
    name: string;
    onClick: (val: any) => void;
    icon: React.ReactElement;
  }[];
  onRowAction?: (key: any) => void;
};

function CustomTable(props: tableProps) {
  const { rows, columns, actionButtons, onRowAction } = props;

  const renderCell = useCallback((row: TableRows, columnKey: React.Key) => {
    let cellValue;
    if (columnKey !== undefined) {
      cellValue = row[String(columnKey)];
    }

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: row.avatar }}
            name={cellValue}
            className="font-medium dark:text-foreground"
          >
            {row.name}
          </User>
        );
      case "date":
        return (
          <div className="flex flex-col">
            <p className="text-[#737373]  capitalize ">{cellValue}</p>
          </div>
        );
      case "amount":
        return (
          <div className="flex flex-col">
            <p className="font-medium capitalize dark:text-foreground">
              ${cellValue}
            </p>
          </div>
        );
      case "status":
        return (
          <div
            className={
              row.status === "paid"
                ? "text-[#34CAA5] capitalize"
                : "text-[#ED544E] capitalize"
            }
          >
            {cellValue}
          </div>
        );
      case "action":
        return (
          <div className="relative w-full flex justify-start items-center">
            <div className="font-normal text-sm ">
              {actionButtons?.map((action) => (
                <Button
                  key={action.name}
                  onClick={() => action.onClick(row)}
                  size="sm"
                  variant="light"
                  startContent={action.icon}
                  className="dark:text-foreground"
                >
                  {action.name}
                </Button>
              ))}
            </div>
          </div>
        );
      default:
        return (
          <div className="dark:bg-background dark:text-foreground">
            {cellValue}
          </div>
        );
    }
  }, []);

  return (
    <Table
      color="success"
      className=" text-black"
      aria-label="Table"
      checkboxesProps={{
        classNames: {
          wrapper:
            "after:bg-[#2DBE5B] after:text-background text-background !p-0 !px-0 !m-0",
        },
      }}
      classNames={{
        base: "",
        wrapper: "rounded-none shadow-none",
        th: [
          "bg-white",
          "text-[#9CA4AB]",
          "border-b",
          "border-divider",
          "rounded-none",
          "mt-0",
        ],
        sortIcon: "opacity-1",
      }}
      topContentPlacement="outside"
      selectionBehavior={"toggle"}
      onRowAction={onRowAction}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            className={`${
              column.uid === "action" ? "text-center " : ""
            }dark:bg-background dark:text-foreground`}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No users found"} items={rows}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell
                className={
                  item.id === 5 ? "border-b-0" : "!border-b-1 truncate"
                }
              >
                {renderCell && renderCell(item, columnKey)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default CustomTable;
