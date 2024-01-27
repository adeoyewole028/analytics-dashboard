"use client";
import React, { useEffect, useState } from "react";
import { Skeleton, Select, SelectItem } from "@nextui-org/react";
import { Box } from "@mui/material";

const PeriodType = [
  {
    label: "Month",
    value: "month",
  },
  {
    label: "Week",
    value: "week",
  },
  {
    label: "Year",
    value: "year",
  },
  {
    label: "Today",
    value: "today",
  },
];
const BarChart = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const renderChart = () => {
    if (!isClient) {
      // Return a placeholder or loading indicator on the server-side
      return (
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
      );
    }

    // Import and render the chart component on the client-side
    const ReactApexChart = require("react-apexcharts").default;
    const uData = [
      40.0, 20.0, 30.0, 50.0, 5.0, 10.0, 50.0, 40.0, 5.0, 30.0, 20.0, 10.0,
    ];
    const uDataFormatted = uData.map((value) => (value / 1000).toFixed(1));

    const xLabels = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    // Define custom colors for bars

    const colors = [
      "#34CAA5", 
    ];
    const chartOptions = {
      chart: {
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: xLabels,
      },
      yaxis: {
        labels: {
          formatter: function (val: string) {
            return val + ".000";
          },
        },
      },
      colors: colors,

      title: {
        text: "Sales Trends",
        className: "text-[18px] font-semibold",
      },
      dataLabels: {
        enabled: false, // Set this to false to hide data labels inside bars
      },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10,
          borderRadiusApplication: "top",
          barHeight: "50%", // Adjust the barHeight to control the size of the bars
          columnWidth: "40%",
          distributed: true,
          fillColor: ({ seriesIndex }: { seriesIndex: number }) =>
            colors[seriesIndex],
        },
      },
      legend: {
        show: false,
      },
      tooltip: {
        marker: {
            show: true,
        },
        custom: function ({
          series,
          seriesIndex,
          dataPointIndex,
        }: {
          series: number[][];
          seriesIndex: number;
          dataPointIndex: number;
        }) {
          return (
            '<div class="arrow_box bg-black text-white p-1">' +
            "<span>" +
            "$" +
            series[seriesIndex][dataPointIndex] +
            ".000" +
            "</span>" +
            "</div>"
          );
        },
      },
    };

    const series = [
      {
        data: uData,
      },
    ];

    return (
      <div className="relative dark:bg-light dark:text-white">
        <div className="absolute -top-5 right-0 p-3 z-10">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { m: 1 },
            }}
          >
            <label htmlFor="sort_by" className="w-full text-sm hidden lg:block">
              Sort by:
            </label>
            <Select
              aria-label="select"
              labelPlacement="outside"
              placeholder="Choose period"
              className="max-w-sm w-full"
              variant="bordered"
              name="periodId"
              size="sm"
              radius="full"
              defaultSelectedKeys={["week"]}
              classNames={{
                trigger: "min-h-unit-6  w-28",
                listboxWrapper: "max-h-[300px] dark:bg-light dark:text-white",
              }}
            >
              {PeriodType.map((period: { label: string; value: string }) => (
                <SelectItem key={period.value} value={period.value}>
                  {period.label}
                </SelectItem>
              ))}
            </Select>
          </Box>
        </div>
        <ReactApexChart
          options={chartOptions}
          series={series}
          type="bar"
          height={350}
        />
      </div>
    );
  };
  return <>{renderChart()}</>;
};
export default BarChart;
