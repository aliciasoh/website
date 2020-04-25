import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let's have a coffee:</h2>
          <h4 className={classes.description}>
            Feel free to reach out to me via: aliciasoh7@gmail.com
          </h4>
          <p className={classes.description}>Or you can reach out to me via any social media platforms (links in the header)</p>
        </GridItem>
      </GridContainer>
    </div>
  );
}
