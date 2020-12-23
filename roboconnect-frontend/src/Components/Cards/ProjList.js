import { CardContent } from "@material-ui/core";
import { useState, useEffect } from "react";
import { getMember } from "../../services/projects";

const ProjList = ({ prj }) => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    (async () => {
      const prjs = await Promise.all(
        prj.map(async (pr) => {
          const proj = await getMember(pr);
          return proj;
        })
      );
      setProjects(prjs);
    })();
  }, [prj]);
  return (
    <>
      {projects.map((project) => (
        <CardContent key={project.id}>{project.name}</CardContent>
      ))}
    </>
  );
};

export default ProjList;
