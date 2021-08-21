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
      <Link href="/terms" variant="body2" color="inherit">
        Terms of Use
      </Link>
      <Link href="mailto:flameforge@gmail.com" variant="body2" color="inherit">
        Contact
      </Link>
    </Typography>
  </footer>
);

export default Footer;
