import { Grid, Card, CardContent, CardMedia } from "@material-ui/core";

const Project = ({ name, image }) => (
  <Grid item xs={3}>
    <Card variant="outlined">
      <CardMedia component="img" src={image} />
      <CardContent>{name}</CardContent>
    </Card>
  </Grid>
);

export default Project;
