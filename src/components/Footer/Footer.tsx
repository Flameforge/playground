import { Container, Link, Typography } from "@material-ui/core";
import "./Footer.scss";

const Footer = (): JSX.Element => (
  <Container data-testid="Footer" component="footer">
    <Typography variant="body1" component="p">
      <span>©</span> 2021 Cat's Playground
      <Link href="/privacy" variant="body2">
        Privacy Policy
      </Link>
      <Link href="/terms" variant="body2">
        Terms of Use
      </Link>
      <Link href="mailto:flameforge@gmail.com" variant="body2">
        Contact
      </Link>
    </Typography>
  </Container>
);

export default Footer;
