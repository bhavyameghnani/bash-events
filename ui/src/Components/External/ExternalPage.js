import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "../Common/Header";
import MainFeaturedPost from "../Common/MainFeaturedPost";
import Grid from "@material-ui/core/Grid";
import ExternalPageTile from "./ExternalPageTiles";

export default function ExternalPage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="External Engagement" />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={2} align="center">
            <ExternalPageTile />
          </Grid>
        </main>
      </Container>
      <br />
    </React.Fragment>
  );
}

const mainFeaturedPost = {
  title: "External Engagement",
  description:
    "One stop platform to search and attend personalised External Engagement and connect with the world. A place to learn & explore various ecosystem ",
  image:
    "https://www.nomuraholdings.com/jp/company/image/img_06.jpg",
  imgText: "Engagement",
  linkText: "Continue reading…",
};
