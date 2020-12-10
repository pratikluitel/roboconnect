import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const Event = ({ name, location, date, image }) => (
  <Grid item xs={3}>
    <Card variant="outlined">
      <CardMedia component="img" src={image} />
      <CardContent>{name}</CardContent>
      <CardContent>{location}</CardContent>
      <CardContent>{date}</CardContent>
      <CardContent style={{ paddingTop: 0 }}>
        <IconButton>
          <EditIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  </Grid>
);

export default Event;
