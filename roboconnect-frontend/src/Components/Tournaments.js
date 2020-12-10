import Grid from "@material-ui/core/Grid";
import Tournament from "./Cards/Tournament";

const Tournaments = () => {
  const tournaments = [
    {
      name: "IOE Robocon",
      location: "Kathmandu, Nepal",
      theme: "Robotics for social good",
      date: "13th September 2018",
      achievement: "First Place",
    },
    {
      name: "IOE Robocon",
      location: "Kathmandu, Nepal",
      theme: "Robotics for social good",
      date: "13th September 2018",
      achievement: "First Place",
    },
    {
      name: "IOE Robocon",
      location: "Kathmandu, Nepal",
      theme: "Robotics for social good",
      date: "13th September 2018",
      achievement: "First Place",
    },
    {
      name: "IOE Robocon",
      location: "Kathmandu, Nepal",
      theme: "Robotics for social good",
      date: "13th September 2018",
      achievement: "First Place",
    },
  ];
  return (
    <div className="members">
      <h2>Tournaments we have participated in!</h2>
      <Grid container spacing={1} alignItems="center" justify="center">
        {tournaments.map((tournament) => (
          <Tournament tournament={tournament} />
        ))}
      </Grid>
    </div>
  );
};

export default Tournaments;
