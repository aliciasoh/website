import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Life outside work</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <h4 className={classes.cardTitle}>
                Floorball (Innebandy)
                <br />
                <small className={classes.smallTitle}>I love sports</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  I love to play all kinds of sports. 
                  I have been playing floorball (Innebandy) since 13 years old.
                  You can <a href="https://www.redsports.sg/2012/05/29/a-div-floorball-girls-vjc-yjc/">read this article online</a> that was written when my Junior College team qualified for
                  finals in 2012 (and eventually won champions). Or you can <a href="https://www.youtube.com/watch?v=2eE54e_Mh_g">watch this video</a> where I was interviewed instead.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <h4 className={classes.cardTitle}>
                Women in Tech
                <br />
                <small className={classes.smallTitle}>Advocate</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Women are underrepresented in the tech industry - I hope to inspire, promote and enable gender diversity across all aspects of the digital economy.
                  You can <a href="https://www.sc.com/en/explore-our-world/women-in-tech-alicias-story/">click here to read and watch my interview</a> about my experience working in the tech sector (in Standard Chartered Bank) as a young female.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <h4 className={classes.cardTitle}>
                Travelling & Animals
                <br />
                <small className={classes.smallTitle}>I have a Rottweiler named Mino!</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  I love travelling, experiencing and learning different cultures and way of life.
                  This is why I decided to relocate out of my home, to Stockholm, Sweden! I love animals too.
                  I have a Rottweiler named Mino and his birthday is on 29 September 2019.
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
