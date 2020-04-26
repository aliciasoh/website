import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import flask from "assets/img/jobs/flask.png";
import qi from "assets/img/jobs/qi.png";
import jtc from "assets/img/jobs/jtc.png";
import sc from "assets/img/jobs/sc.png";
import odafy from "assets/img/jobs/odafy.png";
import sambla from "assets/img/jobs/sambla.png";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>About me</h2>
          <h5 className={classes.description}>
            I see you are interested to know more about me. I graduated from National University of Singapore (NUS)
            with a Bachelor Degree in Computing. I have been playing and representing my schools (since 13 years old) for
            Floorball (Innebandy) competitions regionally as well as in overseas competitions. I am currently residing in Stockholm, Sweden,
            and working as a Fullstack Developer. Here are my list of experiences:
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Web Developer (Internship) 🇸🇬"
              description="💼Flask Media Lab (Jun 2013 - Aug 2013)"
              info="Just graduated from Junior College and while waiting for my GCE A levels results, I decided to do a Web Developer Internship without having prior computing experience. </br></br>Built and designed websites. Picked up HTML, CSS, Javascript, jQuery."
              icon={flask}
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Software Engineer (Internship) 🇸🇬"
              description="💼Quantum Inventions (Jun 2015 - Aug 2015)"
              info="Worked on Geographical Information Systems (GIS) softwares such as ArcGIS and GeoServer. </br></br>Build maps for Bangkok, Thailand, Singapore and Sri Lanka."
              icon={qi}
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="IoT Software Engineer (Internship) 🇸🇬"
              description="💼JTC (May 2016 - Oct 2016)"
              info="Built motion sensors and Python to help buildings to be more efficient and cost effective. Presented my project to Line Manager and CIO. Used Qlik Sense to analyse data. I also conducted workshops for JTC employees on how to use Qlik Sense. </br></br>Report and work are stored in my Github account: <a href='https://github.com/aliciasoh'>https://github.com/aliciasoh</a>"
              icon={jtc}
              vertical
            />
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Fullstack Developer 🇸🇬"
              description="💼Standard Chartered Bank (Jul 2017 - Jan 2020)"
              info="Joined Standard Chartered IT Graduate Program in 2017. Worked in multiple projects for Retail Banking as well as Private Wealth Banking. </br></br>I was featured in the Bank’s #WomenInTech video in 2017-2019. I also had the opportunity to present at the Bank’s 2018 Fintech Festival. Worked on multiple projects for different markets (Singapore, Malaysia, Hong Kong, China, UAE, India, Pakistan, Kenya) with global teams (from Singapore, India, China, Hong Kong, Malaysia). </br></br>You can view some of my work at <a href='https://github.com/aliciasoh-sc'>https://github.com/aliciasoh-sc/</a>"
              icon={sc}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Co-Founder/ CTO 🇸🇬"
              description="💼Odafy (Jan 2018 - Apr 2018)"
              info="Started my own company, Odafy. </br></br>Lead my team for technology and initiated a transformation for our product Byte - revamped Byte UI, changed the entire tech architecture and marketing approach. Within 5 months, we launched Byte and we attained +200 customers and boosted our social media reach during our first week of launch. We have raised investments from investors prior to our launch"
              icon={odafy}
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Fullstack Developer 🇸🇪"
              description="💼Sambla AB Financial Services (Jan 2020 - Current)"
              info="Fullstack Developer for Sambla AB Financial Services in Stockholm, Sweden. </br></br>Worked on developing software and platforms for the Nordic market as well as implementing A/B testing and data analytics tools to ultimately increase profits. </br></br>You can view some of my work at <a href='https://github.com/aliciasoh-sambla'>https://github.com/aliciasoh-sambla/</a>"
              icon={sambla}
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
