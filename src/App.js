import React from "react";
import { Grid } from "@material-ui/core";
import Details from "./components/Details/Details";

import useStyles from "./styles";

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{ height: "100vh" }}
      >
        {/* Income Container */}
        <Grid item xs={12} sm={4}>
          <Details title="Income" />
        </Grid>

        {/* Main Container */}
        <Grid item xs={12} sm={4}>
          Main
        </Grid>

        {/* Expense Container */}
        <Grid item xs={12} sm={4}>
          <Details title="Expense" />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
