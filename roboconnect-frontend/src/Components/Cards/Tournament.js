import { Grid, Card, CardContent, CardHeader } from "@material-ui/core";

const Tournament = ({ tournament }) => (
  <Grid item xs={3}>
    <Card variant="outlined">
      <CardHeader title={tournament.achievement} />
      <CardContent>{tournament.name}</CardContent>
      <CardContent>{tournament.location}</CardContent>
      <CardContent>Theme: {tournament.theme}</CardContent>
      <CardContent>{tournament.date}</CardContent>
    </Card>
  </Grid>
);

export default Tournament;
