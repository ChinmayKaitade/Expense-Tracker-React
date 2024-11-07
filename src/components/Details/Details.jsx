import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

import useTransactions from "../../hooks/useTransactions";

import useStyles from "./styles";

// Register the required elements
Chart.register(ArcElement, Tooltip, Legend);

const Details = ({ title }) => {
  const classes = useStyles();

  const { total, chartData } = useTransactions(title);

  return (
    <div>
      <Card className={title === "Income" ? classes.income : classes.expense}>
        <CardHeader title={title} />
        <CardContent>
          <Typography variant="h5">${total}</Typography>

          <Doughnut data={chartData} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Details;
