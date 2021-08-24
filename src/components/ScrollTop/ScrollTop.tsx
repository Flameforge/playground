import { Fab, makeStyles } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { useState } from "react";
import "./ScrollTop.scss";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    bottom: "1.25rem",
    right: "1.25rem",
    opacity: 0.5,
    "&:hover": {
      opacity: 1,
    },
  },
});

const ScrollTop = (): JSX.Element => {
  const [showScroll, setShowScroll] = useState(false);
  const classes = useStyles();

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) setShowScroll(true);
    else if (showScroll && window.pageYOffset <= 400) setShowScroll(false);
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  window.addEventListener("scroll", checkScrollTop);

  return (
    <Fab
      color="secondary"
      aria-label="add"
      data-testid="ScrollTop"
      className={classes.root}
      style={{ visibility: showScroll ? "visible" : "hidden" }}
      onClick={scrollTop}
    >
      <ArrowUpwardIcon></ArrowUpwardIcon>
    </Fab>
  );
};

export default ScrollTop;

// {/* <FaArrowCircleUp
//   className="scrollTop"
//   onClick={scrollTop}
//   style={{ height: 40, display: showScroll ? "flex" : "none" }}
// /> */}
