import { Grid, Card, CardContent, CardMedia } from "@material-ui/core";

const Member = ({ name, image, email }) => (
  <Grid item xs={3}>
    <Card variant="outlined">
      <CardMedia component="img" src={image} />
      <CardContent>
        <p>{name}</p>
        <p>{email}</p>
      </CardContent>
    </Card>
  </Grid>
);

export default Member;
