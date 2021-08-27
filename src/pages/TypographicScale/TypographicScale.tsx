import { Button, Container, Link, Typography } from "@material-ui/core";
import "./TypographicScale.scss";

const TypographicScale = (): JSX.Element => (
  <div className="TypographicScale" data-testid="TypographicScale">
    <Container component="header" maxWidth={false}>
      <Typography variant="h1" gutterBottom align="center">
        Typographic Scales
      </Typography>
      <Typography variant="subtitle1" component="p" gutterBottom align="center">
        A typographic (or type) scale is a progression of font sizes. I’m sure
        at some point in your life you’ve seen a musical scale, with the notes
        going from low to high. Well, a type scale is the same. It represents
        font sizes, going from small to large in a balanced progression.
      </Typography>

      <Link href="#demo">
        <Button>Demo</Button>
      </Link>
    </Container>

    <Container component="main">
      <Typography variant="h2" gutterBottom>
        Demo
      </Typography>
      <Typography variant="h3" gutterBottom>
        Anti-aliased
      </Typography>

      <div id="demo">
        <Typography variant="h1" component="p" gutterBottom>
          h1. Heading
        </Typography>
        <Typography variant="h2" component="p" gutterBottom>
          h2. Heading
        </Typography>
        <Typography variant="h3" component="p" gutterBottom>
          h3. Heading
        </Typography>
        <Typography variant="h4" component="p" gutterBottom>
          h4. Heading
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          h5. Heading
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          h6. Heading
        </Typography>
        <Typography variant="subtitle1" component="p" gutterBottom>
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant="subtitle2" component="p" gutterBottom>
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="button" display="block" component="p" gutterBottom>
          button text
        </Typography>
        <Typography variant="caption" component="p" gutterBottom>
          caption text
        </Typography>
        <Typography variant="overline" component="p" gutterBottom>
          overline text
        </Typography>
      </div>
    </Container>
  </div>
);

export default TypographicScale;
