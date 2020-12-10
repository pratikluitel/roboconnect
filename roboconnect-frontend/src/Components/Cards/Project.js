import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  IconButton,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const Project = ({ name, image }) => (
  <Grid item xs={3}>
    <Card variant="outlined">
      <CardHeader title={name} />
      <CardMedia component="img" src={image} />
      <CardActions disableSpacing>
        <IconButton>
          <EditIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  </Grid>
);

export default Project;
