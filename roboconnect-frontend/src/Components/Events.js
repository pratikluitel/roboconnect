import Grid from "@material-ui/core/Grid";
import Event from "./Cards/Event";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { IconButton } from "@material-ui/core";

const Events = () => {
  const events = [
    {
      id: 0,
      name: "RoboLocus",
      location: "Pulchowk, Lalitpur",
      date: "29th January 2020",
      image:
        "https://lh3.googleusercontent.com/proxy/Q_YPPIfAGKRVXlOvYxaC3KRviLPlWtSqGlgHuc_7o7EvrXSN_y1WdVCp1bAR7BWIuq43d832i_oK3Ut8esG3zHk60jCdpVT9dqf69On2AeI74Dp_-lOrXj1lutEkyQ",
    },
    {
      id: 1,
      name: "RoboLocus",
      location: "Pulchowk, Lalitpur",
      date: "29th January 2020",
      image:
        "https://lh3.googleusercontent.com/proxy/Q_YPPIfAGKRVXlOvYxaC3KRviLPlWtSqGlgHuc_7o7EvrXSN_y1WdVCp1bAR7BWIuq43d832i_oK3Ut8esG3zHk60jCdpVT9dqf69On2AeI74Dp_-lOrXj1lutEkyQ",
    },
    {
      id: 2,
      name: "RoboLocus",
      location: "Pulchowk, Lalitpur",
      date: "29th January 2020",
      image:
        "https://lh3.googleusercontent.com/proxy/Q_YPPIfAGKRVXlOvYxaC3KRviLPlWtSqGlgHuc_7o7EvrXSN_y1WdVCp1bAR7BWIuq43d832i_oK3Ut8esG3zHk60jCdpVT9dqf69On2AeI74Dp_-lOrXj1lutEkyQ",
    },
    {
      id: 3,
      name: "RoboLocus",
      location: "Pulchowk, Lalitpur",
      date: "29th January 2020",
      image:
        "https://lh3.googleusercontent.com/proxy/Q_YPPIfAGKRVXlOvYxaC3KRviLPlWtSqGlgHuc_7o7EvrXSN_y1WdVCp1bAR7BWIuq43d832i_oK3Ut8esG3zHk60jCdpVT9dqf69On2AeI74Dp_-lOrXj1lutEkyQ",
    },
  ];
  return (
    <div className="members" style={{ marginTop: "50px" }}>
      <h1>Events we have organized</h1>
      <Grid container spacing={1} alignItems="center" justify="center">
        {events.map((event) => (
          <Event
            key={event.id}
            name={event.name}
            location={event.location}
            date={event.date}
            image={event.image}
          />
        ))}
        <IconButton>
          <AddCircleIcon />
        </IconButton>
      </Grid>
    </div>
  );
};

export default Events;
