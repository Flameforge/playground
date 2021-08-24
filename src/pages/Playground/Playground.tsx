import { Container, Typography } from "@material-ui/core";
import Footer from "../../components/Footer/Footer";
import FirstHaikei from "./layered-waves-haikei-1-2.svg";
import SecondHaikei from "./layered-waves-haikei-2-3.svg";
import ThirdHaikei from "./layered-waves-haikei-3-4.svg";
import "./Playground.scss";

const Playground = (): JSX.Element => (
  <div className="Playground" data-testid="PlayGround">
    <Container component="header" maxWidth={false}>
      <Typography variant="h1" component="h1">
        Cat's Playground
      </Typography>
      <Typography variant="subtitle1" component="p">
        A hidden little playground to share Cat content and some cool front-end
        tech stuff
      </Typography>
    </Container>

    <Container className="dark" component="section" maxWidth={false}>
      <Typography variant="h2" component="h2">
        Matrix rain js background
      </Typography>
      <Typography variant="subtitle1" component="p">
        The Matrix Rain like background animation made with js and canvas
      </Typography>
      <Typography variant="subtitle1" component="p">
        Custom adaptation of the meow's code that you can find here:
      </Typography>
    </Container>

    <img src={FirstHaikei} className="Haikei" />

    <Container component="section" maxWidth={false}>
      <Typography variant="h2" component="h2">
        CSS only Cat animation
      </Typography>
      <Typography variant="subtitle1" component="p">
        Copy pasta of meow's simple little character. I found this one here.
      </Typography>
    </Container>

    <img src={SecondHaikei} className="Haikei" />

    <Container component="section" maxWidth={false}>
      <Typography variant="h2" component="h2">
        Nyan Cat favicon
      </Typography>
      <Typography variant="subtitle1" component="p">
        Copy pasta of meow's simple little character. I found this one here.
      </Typography>
    </Container>

    <img src={ThirdHaikei} className="Haikei" />

    <Container component="section" maxWidth={false}>
      <Typography variant="h2" component="h2">
        Framework
      </Typography>
      <Typography variant="subtitle1" component="p">
        These are the tools and techs we put together so far.
      </Typography>
      <Typography variant="body1" component="p">
        Create react app
      </Typography>
      <Typography variant="body1" component="p">
        Custom setup
      </Typography>
      <Typography variant="body1" component="p">
        Normalize
      </Typography>
      <Typography variant="body1" component="p">
        React Material components
      </Typography>
      <Typography variant="body1" component="p">
        Google Fonts
      </Typography>
      <Typography variant="body1" component="p">
        SCSS
      </Typography>
      <Typography variant="body1" component="p">
        Pettier
      </Typography>
      <Typography variant="body1" component="p">
        Typescript
      </Typography>
      <Typography variant="body1" component="p">
        Linters
      </Typography>
      <Typography variant="body1" component="p">
        Font size technique
      </Typography>
      <Typography variant="body1" component="p">
        Heikei
      </Typography>
      <Typography variant="body1" component="p">
        Glowing background
      </Typography>
    </Container>

    <Container component="section" maxWidth={false}>
      <Typography variant="h2" component="h2">
        Merchandise
      </Typography>
      <Typography variant="subtitle1" component="p">
        I like it, thus I promote it.
      </Typography>
    </Container>

    <Footer />
  </div>
);

export default Playground;
