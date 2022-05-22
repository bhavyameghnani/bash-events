import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: "#FFFFFF",
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

export default function HomeGallery() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={2.5}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${item.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    title: "Innovation & Technology",
    img: "https://www.state.gov/wp-content/uploads/2019/04/Science-Technology-shutterstock_449187505.jpg",
    author: "Artists name",
  },
  {
    title: "Business, Startegy & Investment",
    img: "https://www.lehnerinvestments.com/wp-content/uploads/2021/10/Analyzing_Charts-780x438.jpg",
    author: "Artists name",
  },
  {
    title: "Learning & Development",
    img: "https://marvel-b1-cdn.bc0a.com/f00000000209359/www.uoguelph.ca/hr/sites/uoguelph.ca.hr/files/public/pexels-photo-1661004.jpeg",
    author: "Artists name",
  },
  {
    title: "Diversity & Inclusion",
    img: "https://www.coopercos.com/wp-content/uploads/2021/06/Diversity-Inclusion.jpeg",
    author: "Artists name",
  },
];
