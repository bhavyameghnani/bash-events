import React, { useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import Slide from "@material-ui/core/Slide";
import BottomNavigationPage from "../Common/BottomNavigationPage";

// const useStyles = makeStyles((theme) => ({
//   mainGrid: {
//     marginTop: theme.spacing(3),
//   },
//   icon: {
//     marginRight: theme.spacing(2),
//   },
//   heroContent: {
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(8, 0, 6),
//   },
//   heroButtons: {
//     marginTop: theme.spacing(4),
//   },
//   cardGrid: {
//     paddingTop: theme.spacing(8),
//     paddingBottom: theme.spacing(8),
//   },
//   card: {
//     height: "100%",
//     display: "flex",
//     flexDirection: "column",
//   },
//   cardMedia: {
//     paddingTop: "56.25%", // 16:9
//     height: 11,
//   },
//   cardContent: {
//     flexGrow: 1,
//   },
//   footer: {
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(6),
//   },
//   search: {
//     margin: theme.spacing(1),
//     width: 600,
//   },
//   divHeading: {
//     color: "#e57373",
//   },
//   subHeading: {
//     color: "#115293",
//     fontWeight: "600",
//   },
//   desc: {
//     color: "#7A8C98",
//   },
// }));

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

export default function HomePageTile() {
  // const classes = useStyles();

  // const [open, setOpen] = React.useState(false);

  //Only on first render
  useEffect(() => {}, []);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);

  // };

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Grid
          container
          spacing={4}
          direction="row"
          alignItems="center"
          justifyContent="center"
          //  style={{ minHeight: '100vh' }}
        >
          <Grid item>
            <img
              src="https://kmdastur.com/wp-content/uploads/csr-KMD.png"
              height="130px"
              width="130px"
              alt="icon"
            />
          </Grid>
          <Grid item>
            <img
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/health-and-wellness-4425334-3668992.png"
              height="130px"
              width="130px"
              alt="icon"
            />
          </Grid>
          <Grid item>
            <img
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/innovative-technology-738852.png"
              height="130px"
              width="130px"
              alt="icon"
            />
          </Grid>
          <Grid item>
            <img
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/culture-3728068-3108373.png"
              height="130px"
              width="130px"
              alt="icon"
            />
          </Grid>
          <Grid item>
            <img
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/painting-3333455-2773690.png"
              height="130px"
              width="130px"
              alt="icon"
            />
          </Grid>
          <Grid item>
            <img
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/digital-finance-1133706.png"
              height="130px"
              width="130px"
              alt="icon"
            />
          </Grid>
          <Grid item>
            <img
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/strategy-plan-target-achieve-board-sketch-business-model-60322.png"
              height="130px"
              width="130px"
              alt="icon"
            />
          </Grid>
          {/* <Grid item>
            <img
              src="  https://cdn.iconscout.com/icon/premium/png-256-thumb/human-resource-management-1528152-1297600.png"
              height="130px"
              width="130px"
              alt="icon"
            />
          </Grid> */}
        </Grid>

        <br />
        <br />
        <br />

        <BottomNavigationPage />
      </main>
    </React.Fragment>
  );
}
