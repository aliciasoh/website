import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import travel from "assets/img/me/travel.jpg";
import mino from "assets/img/me/mino.jpg";
import fb from "assets/img/me/fb.jpg";
import tech from "assets/img/me/tech.jpg";
import soccer from "assets/img/me/soccer.jpeg";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import classNames from "classnames";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const iconWrapper = classNames({
    [classes.iconWrapper]: true,
    [classes.iconWrapperVertical]: true
  });
  const iconClasses = classNames({
    [classes.icon]: true,
    [classes.iconVertical]: true
  });

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here's more</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <div className={iconWrapper}>
                <img src={fb} className={iconClasses} />
              </div>
              <h4 className={classes.cardTitle}>
                Floorball (Innebandy)
                <br />
                <small className={classes.smallTitle}>I love sports</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  I love to play all kinds of sports. I have been playing
                  floorball (Innebandy) competitively since 13 years old both
                  regionally as well as in overseas competitions.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <div className={iconWrapper}>
                <img src={soccer} className={iconClasses} />
              </div>
              <h4 className={classes.cardTitle}>
                Sports
                <br />
                <small className={classes.smallTitle}>Other sports</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  I do enjoy playing other sports such as soccer and ice hockey!
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <div className={iconWrapper}>
                <img src={travel} className={iconClasses} />
              </div>
              <h4 className={classes.cardTitle}>
                Travelling
                <br />
                <small className={classes.smallTitle}>I love travelling!</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  I love travelling, experiencing and learning different
                  cultures and way of life.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <div className={iconWrapper}>
                <img src={mino} className={iconClasses} />
              </div>
              <h4 className={classes.cardTitle}>
                Animals
                <br />
                <small className={classes.smallTitle}>I love animals!</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  I have a Rottweiler named Mino. His birthday is on the 29th
                  September 2019.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <div className={iconWrapper}>
                <img src={tech} className={iconClasses} />
              </div>
              <h4 className={classes.cardTitle}>
                Technology
                <br />
                <small className={classes.smallTitle}></small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  I enjoy working with technologies and using my creativity to
                  create new ideas/ software/ platforms/ tools to make lives
                  simpler and easier. Regardless of whether it is software
                  developing, analytics, UI/UX design, I'd be so eager to get my
                  hands dirty on it. You can view more of my software
                  development/ analytics/ UI/UX designs that I have done in my
                  github account here:{" "}
                  <a href="https://github.com/aliciasoh">
                    https://github.com/aliciasoh
                  </a>
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
