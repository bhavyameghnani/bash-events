import React, { useEffect } from "react";
import { useParams } from "react-router";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/TurnedInNot";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import ApplyIcon from "@material-ui/icons/ArrowUpward";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Header from "../Common/Header";
import MainFeaturedPost from "../Common/MainFeaturedPost";
import Button from "@material-ui/core/Button";
import BottomNavigationPage from "../Common/BottomNavigationPage";
import PeopleList from "../Common/PeopleList";
import Typography from "@material-ui/core/Typography";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import GalleryEvent from "../Gallery/GalleryEvent";

import tree from "../../Resources/Images/tree.png";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
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
  paperBox: {
    position: "relative",
    padding: theme.spacing(1),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#ca142a",
    color: "#FFFFFF",
  },
}));

export default function EventsDetailsPage() {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const classes = useStyles();
  const { eid } = useParams();
  let id = parseInt(eid);

  // const [projectData, setProjectData] = React.useState();
  const [mainFeaturedPost, setMainFeaturedPost] = React.useState();

  //Only on first render
  useEffect(() => {
    //    setProjectData("response.data")
    let banner = {
      title: data[id].title,
      description: data[id].description,
      image: data[id].image,
      readmore: data[id].readmore,
    };
    console.log(banner);
    setMainFeaturedPost(banner);
  }, [id]);

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container maxWidth="lg">
          <Header title="Employee Engagement" />
          <main>
            {mainFeaturedPost && <MainFeaturedPost post={mainFeaturedPost} />}
            <Grid
              container
              spacing={6}
              align="center"
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item>
                <ShareIcon style={{ fontSize: 30 }} />
              </Grid>
              <Grid item>
                <FavoriteIcon style={{ fontSize: 30 }} />
              </Grid>
              <Grid item>
                <NotificationImportantIcon style={{ fontSize: 30 }} />
              </Grid>
              <Grid item>
                <ApplyIcon style={{ fontSize: 30 }} />
              </Grid>
            </Grid>
            <br />
            <GalleryEvent />
            <br />
            <Container maxWidth="lg">
              <Typography
                component="h2"
                variant="h5"
                color="inherit"
                align="left"
                className={classes.toolbarTitle}
              >
                {mainFeaturedPost && mainFeaturedPost.readmore}
              </Typography>
              <br />
              <Grid
                container
                spacing={3}
                align="center"
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                <Grid item>
                  <PeopleList />
                </Grid>

                <Grid item>
                  <Paper className={classes.paperBox} elevation={1}>
                    <TextField
                      id="date"
                      label="Event Date"
                      type="date"
                      defaultValue="2022-05-18"
                      disabled
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper className={classes.paperBox} elevation={1}>
                    <TextField
                      id="date"
                      label="Last Registeration Date"
                      type="date"
                      defaultValue="2022-04-18"
                      disabled
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Paper>
                </Grid>
              </Grid>

              <Grid
                container
                spacing={3}
                align="center"
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                <Grid item>
                  <Button
                    type="submit"
                    variant="contained"
                    className={classes.submit}
                  >
                    <b>Open in Metaverse</b>
                  </Button>
                  {"  "}
                  <Button
                    type="submit"
                    variant="contained"
                    className={classes.submit}
                    onClick={() => {
                      handleClickOpen();
                    }}
                  >
                    <b>Apply</b>
                  </Button>
                </Grid>
              </Grid>
              <br />
              <img src={tree} height="400px" width="700px" />
            </Container>
          </main>
        </Container>

        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            <b>Registeration - Ticket to Event!</b>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              🌲 <b>BASH Tree:</b> A referral initiative that encourages
              participation that works on <b>“Ally - Tree Registration”</b> 🌲
              logic. Every time you register for an event, you refer an{" "}
              <b>‘Ally’</b> 👫🏼 or a fellow employee for the event. Upon
              successful registration by the ally you have referred, you earn{" "}
              <b>‘BASH COINS’</b> 🟡
            </DialogContentText>

            <TextField
              className={classes.margin}
              id="input-with-icon-textfield"
              label="Ally 1"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              className={classes.margin}
              id="input-with-icon-textfield"
              label="Ally 2"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              variant="contained"
              className={classes.submit}
            >
              Back
            </Button>
            <Button
              onClick={()=> {handleClose(); handleClickOpen1()}}
              variant="contained"
              className={classes.submit}
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
        {/* Second Dialog box */}
        <Dialog
          open={open1}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose1}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            <b>Congratulations!</b>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Wow! You successful earned 6 <b>‘BASH COINS’</b> 🟡 by referring two allies.
              You have also been added to 🌲 <b>BASH Tree</b> 
            </DialogContentText>

          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose1}
              variant="contained"
              className={classes.submit}
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>

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
    title: "Life & Families",
    eid: "0",
    description:
      "It promotes a culture of good health, well-being and work-life balance and drive personal and professional growth. It helps to connect members through networking & raise awareness around key family, health, wellness and life-balance issues.",
    image:
      "https://www.nomuraholdings.com/sustainability/employee/image/powai_tab07.jpg",
    imageText: "Artists name",
    readmore:
      "To promote a culture of good health, well-being and work-life balance and drive personal and professional growth. It helps to connect members through networking & raise awareness around key family, health, wellness and life-balance issues.",
  },
  {
    title: "WIN (Women in Network)",
    eid: "1",
    description:
      "WIN club engages, support and retain women through their career development at Nomura. It attracts women who will contribute to the Firm's continued success. It helps in partnering with our internal and external stakeholders to enhance the image of the Firm",
    image:
      "https://www.nomuraholdings.com/sustainability/employee/image/powai_tab01.jpg",
    imageText: "Artists name",
    readmore:
      "WIN club engages, support and retain women through their career development at Nomura. It attracts women who will contribute to the Firm's continued success. It helps in partnering with our internal and external stakeholders to enhance the image of the Firm.",
  },
  {
    title: "IDAHOBIT (Rainbows amongst us)",
    eid: "2",
    description:
      "It is a collection of stories about individuals from the LGBTQIA+ communities & allies. ",
    image:
      "https://image.freepik.com/free-photo/multicolored-paint-brush-strokes-surface_23-2148815523.jpg",
    imageText: "Artists name",
    readmore:
      "Under your desk, raise both legs at once upwards, and slowly lower them down. Repeat few times.",
  },
];
