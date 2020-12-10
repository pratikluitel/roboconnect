import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  IconButton,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const Tournament = ({ tournament }) => (
  <Grid item xs={3}>
    <Card variant="outlined">
      <CardHeader title={tournament.achievement} />
      <CardContent>{tournament.name}</CardContent>
      <CardContent>{tournament.location}</CardContent>
      <CardContent>Theme: {tournament.theme}</CardContent>
      <CardContent>{tournament.date}</CardContent>
      <CardContent>
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

export default Tournament;
