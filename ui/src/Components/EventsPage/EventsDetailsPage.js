import React, {useEffect} from 'react';
import { useParams } from "react-router";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import Header from "../Common/Header";
import MainFeaturedPost from "../Common/MainFeaturedPost";
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
import BottomNavigationPage from "../Common/BottomNavigationPage";

const useStyles = makeStyles((theme) => ({
    mainGrid: {
      marginTop: theme.spacing(3),
    },
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    cardMedia: {
      paddingTop: "56.25%", // 16:9
      height: 11,
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    search: {
      margin: theme.spacing(1),
      width: 600,
    },
    divHeading: {
      color: "#e57373",
    },
    subHeading: {
      color: "#115293",
      fontWeight: "600",
    },
    desc: {
      color: "#7A8C98",
    },
  }));

export default function EventsDetailsPage() {

    const classes = useStyles();
    const {eid} = useParams();
    let id = parseInt(eid)
    
    // const [projectData, setProjectData] = React.useState();
    const [mainFeaturedPost, setMainFeaturedPost] = React.useState();
  
    //Only on first render
    useEffect(() => {
    //    setProjectData("response.data")
       let banner = {
            title: data[id].title,
            description: data[id].description,
            image: data[id].image,
       }
       setMainFeaturedPost(banner)
    },[id]);

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
      <Container maxWidth="lg">
        <Header title="Events Page" />
        <main>
          {mainFeaturedPost && <MainFeaturedPost post={mainFeaturedPost} />}
          <Grid container spacing={6} align="center"
          direction="row"
          alignItems="center"
          justifyContent="center"
          >
          <Grid item>
           <ShareIcon style={{fontSize: 50}}/>
          </Grid>
          <Grid item>
          <FavoriteIcon style={{fontSize: 50}}/>
          </Grid>
          <Grid item>
          <NotificationImportantIcon style={{fontSize: 50}}/>
          </Grid>
         
          </Grid>
        </main>
      </Container>
        <br />
        <br />
        <br />
        <BottomNavigationPage />
      </main>
    </React.Fragment>
  );
}

const data = [
    {
        title: "Indian Canvas Painting",
        eid:"1",
        description: "Quick 1min podcast to know more about Indian Canvas Painting",
        image:
          "https://5.imimg.com/data5/EW/AC/MY-30913564/canvas-painting-500x500.jpg",
        imageText: "Artists name",
        readmore:
          "While sitting down, stretch your arms out at your sides and press your shoulder blades together. With your palms facing down, circle your arms forwards around 20 times. Then, face your palms upwards and circle your arms backwards around 20 times. After this, circle your wrists 20 times in each direction.",
      },
      {
        title: "Worli Paintaing",
        eid:"2",
        description: "How to get started with Worli Paintings",
        image:
          "https://5.imimg.com/data5/PI/TE/MY-13589378/2016-07-05-16-53-05-500x500.jpg",
        imageText: "Artists name",
        readmore:
          "Stand up and hold your hands together behind your back, expanding your chest. Pull your shoulder blades as close together as possible and hold the pose for 30 seconds.",
      },
      {
        title: "American Brush Strokes",
        eid:"3",
        description: "All you need to know about American Brush Strokes",
        image:
          "https://image.freepik.com/free-photo/multicolored-paint-brush-strokes-surface_23-2148815523.jpg",
        imageText: "Artists name",
        readmore:
          "Under your desk, raise both legs at once upwards, and slowly lower them down. Repeat few times.",
      },
    
];

const featuredPosts = [
  {
    "name": "Bhavya",
    "mail": "ms"
  },
  {
    "name": "Bhavya",
    "mail": "ms"
  },
  {
    "name": "Bhavya",
    "mail": "ms"
  }
]