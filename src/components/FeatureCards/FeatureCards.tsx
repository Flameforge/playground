import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import "./FeatureCards.scss";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    marginTop: 50,
  },
  cardTitle: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  grid: {
    marginTop: 36,
  },
});

const FeatureCards = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth={false}>
      <Typography variant="h4" component="h3" className={classes.title}>
        Features
      </Typography>
      <Typography variant="subtitle1" component="p">
        Browse through endless amounts of meows.
      </Typography>

      <div className="FeatureCards" data-testid="FeatureCards">
        <Grid
          className={classes.grid}
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.cardTitle}
                color="textSecondary"
                gutterBottom
              >
                Fluid design
              </Typography>
              <Typography variant="h5" component="h2">
                Typographic Scale
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Font system
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                "a benevolent smile"
              </Typography>
            </CardContent>
            <CardActions>
              <Link href="/typography-scales" underline="none" target="_self">
                <Button size="small">Learn More</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </div>
    </Container>
  );
};

export default FeatureCards;
