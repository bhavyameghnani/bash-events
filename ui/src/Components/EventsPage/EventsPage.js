import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "../Common/Header";
import MainFeaturedPost from "../Common/MainFeaturedPost";
import Grid from "@material-ui/core/Grid";
import EventsPageTiles from "./EventsPageTiles";


export default function EventsPage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Internal Engagement" />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={2} align="center">
            <EventsPageTiles />
          </Grid>
        </main>
      </Container>
      <br />
    </React.Fragment>
  );
}

const mainFeaturedPost = {
  title: "Internal Engagement",
  description:
    "One stop platformto search and attend personalised Internal Engagement, meet like minded people with similar interests, earn BASH Coins & generate new connections & Innovation.",
  image:
    "https://www.nomuraholdings.com/sustainability/employee/image/employee_main_pc.jpg",
  imgText: "Events",
  linkText: "Continue reading…",
};
