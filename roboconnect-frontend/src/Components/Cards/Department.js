import { Grid, Card, CardContent, CardMedia } from "@material-ui/core";

const Department = ({ name }) => (
  <Grid item xs={3}>
    <Card variant="outlined">
      <CardMedia
        component="img"
        src="https://image.shutterstock.com/image-photo/krakowpoland-november-12-2015-jagiellonian-260nw-338670113.jpg"
      />
      <CardContent>{name}</CardContent>
    </Card>
  </Grid>
);

export default Department;
