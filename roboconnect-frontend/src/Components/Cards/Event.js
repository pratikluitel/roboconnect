import { Grid, Card, CardContent, CardMedia } from "@material-ui/core";

const Event = ({ name, location, date, image }) => (
  <Grid item xs={3}>
    <Card variant="outlined">
      <CardMedia component="img" src={image} />
      <CardContent>{name}</CardContent>
      <CardContent>{location}</CardContent>
      <CardContent>{date}</CardContent>
    </Card>
  </Grid>
);

export default Event;
