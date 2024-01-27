"use client";
import React from "react";
import { Grid, Box } from "@mui/material";
import BarChart from "../../components/charts/BarChart";
import DashboardTable from "../../components/tables/DashboardTable";
import Orders from "./Orders";
import Listing from "./Listing";
import { Card } from "@nextui-org/react";

export default function Main() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={7}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card className="dark:bg-background dark:text-foreground bg-white p-2">
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
              className="dark:bg-background dark:text-foreground"
            >
              <DashboardTable />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={5}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Orders />
          </Grid>

          <Grid item xs={12}>
            <Listing />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
