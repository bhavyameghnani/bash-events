import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../Common/Header';
import MainFeaturedPost from '../Common/MainFeaturedPost';
import Grid from '@material-ui/core/Grid';
import HomePageTile from './HomePageTiles';

export default function HomePage() {
   
    return (
      <React.Fragment>
        <CssBaseline />     
         <Container maxWidth="lg">
          <Header title="BASH" />
          <main>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={2} align="center">
              <HomePageTile/>
            </Grid>
          </main>
        </Container>
      <br/>
    </React.Fragment> 
  );
}

const mainFeaturedPost = {
  title: 'BASH',
  description:
    "Blisfull Ally for Smart Human",
  image: 'https://thumbs.gfycat.com/AntiqueEdibleBarnswallow-size_restricted.gif',
  imgText: 'HomePage',
  linkText: 'Continue reading…',
};