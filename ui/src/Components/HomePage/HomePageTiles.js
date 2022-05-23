import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import Slide from "@material-ui/core/Slide";
import BottomNavigationPage from "../Common/BottomNavigationPage";
import GenericCard from "../Common/GenericCard";
import StepsInternal from "./StepsInternal";
import StepsExternal from "./StepsExternal";
import { Link } from "react-router-dom";

export default function HomePageTile() {
  const classes = useStyles();
  const [toggle, setToggle] = React.useState(0)
  //Only on first render
  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
      <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={3}>
            {dashboardStats.map((paper) => (
              <Grid item key={paper.title} xs={6} sm={6} >
                <Paper elevation={0} className={classes.paper} onClick={()=> {setToggle(paper.value)}}>
                  <Grid>
                    <img alt="icon" src={paper.icon} className={classes.icon} />
                  </Grid>
                  <Typography variant='body1' className={classes.divHeading}>
                    {paper.title}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <br />
          
          <h1>Get Along</h1>
          <center>
            {toggle === 0 ? <StepsInternal /> : <StepsExternal/> }
          </center>
        </Container>
     
      
    <br />
        {/* <Grid
          container
          spacing={4}
          direction="row"
          alignItems="center"
          justifyContent="center"
          //  style={{ minHeight: '100vh' }}
        >
          <Grid item>
            <Link to={"/events/csr"} style={{ textDecoration: 'none' }}> 
              <GenericCard alt="CSR Icon" image="https://kmdastur.com/wp-content/uploads/csr-KMD.png" desc="CSR"/>
            </Link>
          </Grid>
          <Grid item>
            <Link to={"/events/health&wellness"} style={{ textDecoration: 'none' }}> 
              <GenericCard alt="Health&Wellness Icon" image="https://cdn.iconscout.com/icon/premium/png-256-thumb/health-and-wellness-4425334-3668992.png" desc="Health & Wellness"/>
            </Link>
          </Grid>
          <Grid item>
            <Link to={"/events/innovation&technology"} style={{ textDecoration: 'none' }}> 
              <GenericCard alt="Innovation&Technology Icon" 
                image="https://cdn.iconscout.com/icon/premium/png-256-thumb/innovative-technology-738852.png" desc="Innovation & Technology"/>
            </Link>
          </Grid>
          <Grid item>
            <Link to={"/events/culture"} style={{ textDecoration: 'none' }}> 
              <GenericCard alt="Culture Icon" 
                image="https://cdn.iconscout.com/icon/premium/png-256-thumb/culture-3728068-3108373.png" desc="Life & Culture"/>
            </Link>
          </Grid>
          <Grid item>
            <Link to={"/events/art"} style={{ textDecoration: 'none' }}> 
              <GenericCard alt="Art Icon" image="https://cdn.iconscout.com/icon/premium/png-256-thumb/painting-3333455-2773690.png" desc="ART"/>
            </Link>
          </Grid>
          <Grid item>
            <Link to={"/events/strategy"} style={{ textDecoration: 'none' }}> 
              <GenericCard alt="Strategy Icon" image="https://cdn.iconscout.com/icon/premium/png-256-thumb/strategy-plan-target-achieve-board-sketch-business-model-60322.png" desc="Strategy"/>
            </Link>
          </Grid>
        </Grid> */}

        <br />
        <br />
        <br />

        <BottomNavigationPage />
      </main>
    </React.Fragment>
  );
}


const dashboardStats = [
  {
    title: 'Internal Engagement',
    icon: "https://d1qfwzw6aggd4h.cloudfront.net/background-images/_listImageSq/Japan-Gender-1200x800_v2.png",
    value: 0
  },
  {
    title: 'External Engagement',
    value: 1,
    icon: "https://d1qfwzw6aggd4h.cloudfront.net/background-images/_bannerImage/1200x800v2.jpg",
  },
];


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
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
  leaderBoard: {
    width: '100%',
    height: '400px',
    overflowY: 'auto',
    overflowX: 'hidden',
    borderStyle: 'solid',
    borderColor: '#FDCB6B',
    borderRadius: '10px',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },
  leaderBoardParent: {

  },
  chart: {
    height: 10
  },
  divHeading: {
    color: '#ca142a'
  },
  icon: {
    marginRight: theme.spacing(2),
    width: '80%',
    height: '80%',
    padding: '5%'
  },
}));





