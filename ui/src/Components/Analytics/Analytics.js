import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "../Common/Header";
import MainFeaturedPost from "../Common/MainFeaturedPost";

function Analytics() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Analytics" />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
        </main>
      </Container>
      <br />
    </React.Fragment>
  );
}

const mainFeaturedPost = {
  title: "BASH Analytics",
  description: "Find link minded individuals to collaborate with",
  image:
    "https://thumbs.gfycat.com/AntiqueEdibleBarnswallow-size_restricted.gif",
  imgText: "Collaborate",
  linkText: "Continue reading…",
};

export default Analytics;
