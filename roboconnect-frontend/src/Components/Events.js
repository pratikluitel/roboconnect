import Grid from "@material-ui/core/Grid";
import Event from "./Cards/Event";

const Events = () => {
  const events = [
    {
      name: "RoboLocus",
      location: "Pulchowk, Lalitpur",
      date: "29th January 2020",
      image:
        "https://lh3.googleusercontent.com/proxy/Q_YPPIfAGKRVXlOvYxaC3KRviLPlWtSqGlgHuc_7o7EvrXSN_y1WdVCp1bAR7BWIuq43d832i_oK3Ut8esG3zHk60jCdpVT9dqf69On2AeI74Dp_-lOrXj1lutEkyQ",
    },
    {
      name: "RoboLocus",
      location: "Pulchowk, Lalitpur",
      date: "29th January 2020",
      image:
        "https://lh3.googleusercontent.com/proxy/Q_YPPIfAGKRVXlOvYxaC3KRviLPlWtSqGlgHuc_7o7EvrXSN_y1WdVCp1bAR7BWIuq43d832i_oK3Ut8esG3zHk60jCdpVT9dqf69On2AeI74Dp_-lOrXj1lutEkyQ",
    },
    {
      name: "RoboLocus",
      location: "Pulchowk, Lalitpur",
      date: "29th January 2020",
      image:
        "https://lh3.googleusercontent.com/proxy/Q_YPPIfAGKRVXlOvYxaC3KRviLPlWtSqGlgHuc_7o7EvrXSN_y1WdVCp1bAR7BWIuq43d832i_oK3Ut8esG3zHk60jCdpVT9dqf69On2AeI74Dp_-lOrXj1lutEkyQ",
    },
    {
      name: "RoboLocus",
      location: "Pulchowk, Lalitpur",
      date: "29th January 2020",
      image:
        "https://lh3.googleusercontent.com/proxy/Q_YPPIfAGKRVXlOvYxaC3KRviLPlWtSqGlgHuc_7o7EvrXSN_y1WdVCp1bAR7BWIuq43d832i_oK3Ut8esG3zHk60jCdpVT9dqf69On2AeI74Dp_-lOrXj1lutEkyQ",
    },
  ];
  return (
    <div className="members">
      <h1>Events we have organized</h1>
      <Grid container spacing={1} alignItems="center" justify="center">
        {events.map((event) => (
          <Event
            name={event.name}
            location={event.location}
            date={event.date}
            image={event.image}
          />
        ))}
      </Grid>
    </div>
  );
};

export default Events;
