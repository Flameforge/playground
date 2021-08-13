import { Link, Typography } from "@material-ui/core";
import React from "react";
import "./Footer.scss";

const Footer = (): JSX.Element => (
  <footer className="Footer" data-testid="Footer">
    <Typography variant="body1" component="p">
      <span>©</span> 2021 Cat's Playground
      <Link href="/privacy" variant="body2" color="inherit">
        Privacy Policy
      </Link>
      <a></a>
    </Typography>
  </footer>
);

export default Footer;
