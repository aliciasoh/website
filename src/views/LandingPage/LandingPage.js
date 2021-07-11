import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Alicia Soh"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>
                Hi, I'm Alicia. This is my story.
              </h1>
              <h4>
                Born and raised in Singapore 🇸🇬, working full time as a Software
                Engineer. I love to play sports, I love travelling, animals and
                I do love technology.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <WorkSection
            title={"My Skills:"}
            info={
              "Frontend: </br></br>Angular.js, Ember.js, Ionic.js, React.js, Redux, Javascript, jQuery, HTML5, CSS, SASS, Material Design, Bootstrap, Objective C, Java (Android), Unity</br></br>Backend: </br></br>Java, Node.js, SpringBoot, REST, PHP, SQL, NoSQL (Firebase, MongoDB), PostgreSQL, MySQL, C programming, C# programming, Python, Wordpress</br></br>DevOps/ Cloud: </br></br>Google Cloud Platform, AWS, Kibana, Ansible, Jenkins, Travis, Surge, Heroku, Git, Bitbucket, Github, Confluence, Jira, Zenhub, Asana, Slack</br></br>Analytics: </br></br>Google Analytics, Hotjar, Symplify, Hypertune, Segment.io, Google Ads, Facebook Ads, Python, R</br></br>UI/UX/ Testing/ Others: </br></br>Agile, Scrum, Adobe Creative Suite (Adobe Photoshop, Illustrator, Indesign), Stakeholder engagement, Release management, Automated testing (Cucumber, Selenium, Mocha, Jest)"
            }
          />
          <TeamSection />
          <WorkSection
            title={"Let's have a coffee:"}
            description={
              "Feel free to reach out to me via: aliciasoh7@gmail.com"
            }
            info={
              "Or you can reach out to me via any social media platforms (links in the header)"
            }
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
