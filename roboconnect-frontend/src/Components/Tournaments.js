import Grid from "@material-ui/core/Grid";
import Tournament from "./Cards/Tournament";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { IconButton } from "@material-ui/core";

const Tournaments = () => {
  const tournaments = [
    {
      id: 0,
      name: "IOE Robocon",
      location: "Kathmandu, Nepal",
      theme: "Robotics for social good",
      date: "13th September 2018",
      achievement: "First Place",
    },
    {
      id: 1,
      name: "IOE Robocon",
      location: "Kathmandu, Nepal",
      theme: "Robotics for social good",
      date: "13th September 2018",
      achievement: "First Place",
    },
    {
      id: 2,
      name: "IOE Robocon",
      location: "Kathmandu, Nepal",
      theme: "Robotics for social good",
      date: "13th September 2018",
      achievement: "First Place",
    },
    {
      id: 3,
      name: "IOE Robocon",
      location: "Kathmandu, Nepal",
      theme: "Robotics for social good",
      date: "13th September 2018",
      achievement: "First Place",
    },
  ];
  return (
    <div className="members" style={{ marginTop: "50px" }}>
      <h1>Tournaments we have participated in!</h1>
      <Grid container spacing={1} alignItems="center" justify="center">
        {tournaments.map((tournament) => (
          <Tournament key={tournament.id} tournament={tournament} />
        ))}
        <IconButton>
          <AddCircleIcon />
        </IconButton>
      </Grid>
    </div>
  );
};

export default Tournaments;
