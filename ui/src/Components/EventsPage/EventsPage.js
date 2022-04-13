import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../Common/Header';
import MainFeaturedPost from '../Common/MainFeaturedPost';
import Grid from '@material-ui/core/Grid';
import EventsPageTiles from './EventsPageTiles';

export default function EventsPage() {
   
    return (
      <React.Fragment>
        <CssBaseline />     
         <Container maxWidth="lg">
          <Header title="Events Page" />
          <main>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={2} align="center">
              <EventsPageTiles/>
            </Grid>
          </main>
        </Container>
      <br/>
    </React.Fragment> 
  );
}

const mainFeaturedPost = {
  title: 'Events Page',
  description:
    "One stop platform to search and attend personalised internal & ecternal events",
  image: 'https://thumbs.gfycat.com/AntiqueEdibleBarnswallow-size_restricted.gif',
  imgText: 'Market Place',
  linkText: 'Continue reading…',
};