"use client";
import React from "react";
import { Grid, Box } from "@mui/material";
import BarChart from "../../components/charts/BarChart";
import DashboardTable from "../../components/tables/DashboardTable";
import Orders from "./Orders";
import Listing from "./Platform";
import { Card } from "@nextui-org/react";

export default function Main() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={7}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card className="dark:bg-background dark:text-foreground bg-white p-2 max-w-md sm:max-w-xs md:max-w-7xl">
              <BarChart />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                bgcolor: "background.paper",
                boxShadow: 2,
                borderRadius: 4,
                p: 1,
                width: "100%",
              }}
              className="dark:bg-background dark:text-foreground max-w-md sm:max-w-xs  md:max-w-7xl"
            >
              <DashboardTable />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={5}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Orders />
          </Grid>

          <Grid item xs={12} className="hidden lg:block">
            <Listing />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="lg:hidden">
        <Listing />
      </Grid>
    </Grid>
  );
}
