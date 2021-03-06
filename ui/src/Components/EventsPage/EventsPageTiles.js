import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import BottomNavigationPage from "../Common/BottomNavigationPage";
import { Link } from "react-router-dom";

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
    color: "#ca142a",
  },
  subHeading: {
    color: "#115293",
    fontWeight: "600",
  },
  desc: {
    color: "#7A8C98",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EventsPageTiles() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  //Only on first render
  useEffect(() => {}, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleOpenNewPage(eid){
    window.open("/internalPage/" + eid, "_self");
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Typography variant="h5" className={classes.divHeading}>
          <b>Internal Engagement</b>
        </Typography>
        <br />
        <Grid container spacing={4}>
          {featuredPosts.map((card) => (
            <Grid item key={card.title} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <Link
                  to={"/internalPage/" + card.eid}
                  style={{ textDecoration: "none" }}
                >
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title={card.title}
                    // onClick={() => {window.open('/internalPage/'+card.eid)}}
                  />
                </Link>
                <CardContent className={classes.cardContent}>
                  <Link
                    to={"/internalPage/" + card.eid}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      gutterBottom
                      variant="h6"
                      className={classes.subHeading}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      align="center"
                      variant="body1"
                      className={classes.desc}
                      gutterBottom
                    >
                      {card.description}
                    </Typography>
                  </Link>
                  <CardActions>
                    <Button
                      variant="outlined"
                      size="small"
                      color="primary"
                      align="center"
                      fullWidth
                      onClick={() => {
                        localStorage.setItem("f_title", card.title);
                        localStorage.setItem("f_readmore", card.readmore);
                        localStorage.setItem("f_image", card.image);
                        handleClickOpen();
                        // speak({ text: card.readmore,rate : 0.8})
                      }}
                    >
                      Interested
                    </Button>

                    <Button
                      variant="outlined"
                      size="small"
                      color="primary"
                      align="center"
                      fullWidth
                      onClick={()=> {handleOpenNewPage(card.eid)}}
                    >
                      Apply
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          maxWidth="lg"
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {localStorage.getItem("f_title")}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {/* {localStorage.getItem("f_readmore")}
                    <br /> <br /> */}
              <center>
                <img alt="fitness tip" src={localStorage.getItem("f_image")} />
              </center>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Done
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

const featuredPosts = [
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
      "Stand up and hold your hands together behind your back, expanding your chest. Pull your shoulder blades as close together as possible and hold the pose for 30 seconds.",
  },
  {
    title: "IDAHOBIT (Rainbows amongst us)",
    eid: "2",
    description: "It is a collection of stories about individuals from the LGBTQIA+ communities & allies. DEI is deeply embedded in the culture fabric of Nomura & we value it as a business imperative. We strive to raise awareness & celebrate significant days & build projects.",
    image:
      "https://image.freepik.com/free-photo/multicolored-paint-brush-strokes-surface_23-2148815523.jpg",
    imageText: "Artists name",
    readmore:
      "It is a collection of stories about individuals from the LGBTQIA+ communities & allies. DEI is deeply embedded in the culture fabric of Nomura & we value it as a business imperative. We strive to raise awareness & celebrate significant days & build projects.",
  },
];
