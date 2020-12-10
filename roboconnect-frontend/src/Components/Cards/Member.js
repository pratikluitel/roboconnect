import {
  Grid,
  Card,
  CardMedia,
  CardHeader,
  CardActions,
  IconButton,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const Member = ({ name, image, email }) => {
  return (
    <Grid item xs={3}>
      <Card variant="outlined">
        <CardHeader title={name} subheader={email} />
        <CardMedia component="img" src={image} />
        <CardActions>
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
};
export default Member;
