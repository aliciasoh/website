import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection(props) {
  const classes = useStyles();
  const { title, description, info } = props;

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>{title}</h2>
          <h4 className={classes.description}>
            {description}
          </h4>
          <p className={classes.description} dangerouslySetInnerHTML={{__html: info}}></p>
        </GridItem>
      </GridContainer>
    </div>
  );
}
