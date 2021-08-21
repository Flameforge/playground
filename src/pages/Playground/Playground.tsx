import { Typography } from "@material-ui/core";
import "./Playground.scss";

const Playground = (): JSX.Element => (
  <div className="Playground" data-testid="Playground">
    <header>
      <Typography variant="h1" component="h1">
        Playground
      </Typography>
      <Typography variant="subtitle1" component="p">
        Little web-dev playground to test cool stuff
      </Typography>
    </header>
    <section>
      <Typography variant="h2" component="h2">
        Matrix Rain
      </Typography>
      <Typography variant="subtitle1" component="p">
        The Matrix Rain like background animation made with js and canvas
      </Typography>
      <Typography variant="subtitle1" component="p">
        Custom adaptation of the meow's code that you can find here:
      </Typography>
    </section>
    <section>
      <Typography variant="h2" component="h2">
        CSS only Cat animation
      </Typography>
      <Typography variant="subtitle1" component="p">
        Copy pasta of meow's simple little character. I found this one here.
      </Typography>
    </section>
    <section>
      <Typography variant="h2" component="h2">
        Nyan Cat favicon
      </Typography>
      <Typography variant="subtitle1" component="p">
        Copy pasta of meow's simple little character. I found this one here.
      </Typography>
    </section>
    <section>
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
    </section>
  </div>
);

export default Playground;
