import Grid from "@material-ui/core/Grid";
import Project from "./Cards/Project";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { IconButton } from "@material-ui/core";

const Projects = () => {
  const projects = [
    {
      id: 0,
      name: "Sports Robot",
      image:
        "https://singularityhub.com/wp-content/uploads/2019/05/robots-playing-soccer-robotics-2018-Montreal-Standard-Platform-League-The-Robocup-Federation-IMG-7226-1.jpg",
    },
  ];
  return (
    <div className="members" style={{ marginTop: "50px" }}>
      <h1>Our Projects</h1>
      <Grid container spacing={1} alignItems="center" justify="center">
        {projects.map((project) => (
          <Project key={project.id} name={project.name} image={project.image} />
        ))}
        <IconButton>
          <AddCircleIcon />
        </IconButton>
      </Grid>
    </div>
  );
};

export default Projects;
