import Grid from "@material-ui/core/Grid";
import Project from "./Cards/Project";

const Projects = () => {
  const projects = [
    {
      name: "Sports Robot",
      image:
        "https://singularityhub.com/wp-content/uploads/2019/05/robots-playing-soccer-robotics-2018-Montreal-Standard-Platform-League-The-Robocup-Federation-IMG-7226-1.jpg",
    },
  ];
  return (
    <div className="members">
      <h2>Our Projects</h2>
      <Grid container spacing={1} alignItems="center" justify="center">
        {projects.map((project) => (
          <Project name={project.name} image={project.image} />
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
