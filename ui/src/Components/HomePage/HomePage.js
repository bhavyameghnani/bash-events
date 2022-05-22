import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "../Common/Header";
import MainFeaturedPost from "../Common/MainFeaturedPost";
import Grid from "@material-ui/core/Grid";
import HomePageTile from "./HomePageTiles";
import HomeGallery from "../Gallery/HomeGallery";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  divHeading: {
    color: "#ca142a",
  },
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="OneNomura" />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <center>
              <Typography variant="h5" className={classes.divHeading}>
              <b>Employee Engagement Categories</b>
            </Typography>
            </center>
          <Grid container spacing={2} align="center">
            <br/>
            <HomeGallery />

            <HomePageTile />
          </Grid>
        </main>
      </Container>
      <br />
    </React.Fragment>
  );
}

const mainFeaturedPost = {
  title: "OneNomura",
  description:
    "Platform connecting entire Nomura. It introduces BASH BOT - 'Blissful Ally for Smart Human'",
  subDescription:
    "BASH motivates every employee of the firm to participate in ongoing and future engagements by recommending & notifying personalized events & communities based on interests.",
  image: "https://www.nomuraholdings.com/resource/image/di/main_01_pc.jpg",
  imgText: "HomePage",
  linkText: "Continue reading…",
};
