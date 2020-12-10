import Departments from "./Components/Departments";
import Events from "./Components/Events";
import Projects from "./Components/Projects";
import Tournaments from "./Components/Tournaments";
import Members from "./Components/Members";
import Header from "./Components/Header";
import Pitch from "./Components/Pitch";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    padding: theme.spacing(4),
    textAlign: "center",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Grid container className={classes.grid} spacing={3}>
        <Grid item xs={12}>
          <Pitch />
        </Grid>
        <Grid item xs={12}>
          <Members />
        </Grid>
        <Grid item xs={12}>
          <Departments />
        </Grid>
        <Grid item xs={12}>
          <Projects />
        </Grid>
        <Grid item xs={12}>
          <Tournaments />
        </Grid>
        <Grid item xs={12}>
          <Events />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
