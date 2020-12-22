import Grid from "@material-ui/core/Grid";
import Project from "./Cards/Project";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { IconButton } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";

import ModalForm from "./Forms/ProjectModalForm";

import {
  getMembers,
  deleteMember,
  putMember,
  postMember,
} from "../services/projects";
import { useState, useEffect } from "react";

import { useStyle } from "./helpers/modalStyleHelper";

const Projects = ({ user }) => {
  const [projects, setProjects] = useState([]);
  const [refetch, setRefetch] = useState([]);
  const [modalOpen, setModalopen] = useState(false);

  const classes = useStyle();

  useEffect(() => {
    (async () => {
      const newMembers = await getMembers();
      setProjects(newMembers);
    })();
  }, [refetch]);

  const handleModalopen = () => {
    setModalopen(true);
  };

  const handleModalclose = () => {
    setModalopen(false);
  };

  const toggleRefetch = () => {
    setRefetch(!refetch);
  };

  const handleDelete = async (id) => {
    await deleteMember(id, user);
    toggleRefetch();
  };
  const handleEdit = async (member, event) => {
    event.preventDefault();
    await putMember(member, user);
    toggleRefetch();
  };
  const handleAdd = async (member, event) => {
    event.preventDefault();
    await postMember(member, user);
    toggleRefetch();
  };

  return (
    <div className="members" style={{ marginTop: "50px" }}>
      <h1>Our Projects</h1>
      <Grid container spacing={1} alignItems="center" justify="center">
        {projects.map((project) => (
          <Project
            key={project.id}
            project={project}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            user={user}
          />
        ))}
        {user === null ? null : (
          <IconButton onClick={handleModalopen}>
            <AddCircleIcon />
          </IconButton>
        )}
      </Grid>
      <Modal
        open={modalOpen}
        onClose={handleModalclose}
        className={classes.paper}
      >
        <ModalForm handleAdd={handleAdd} handleModalclose={handleModalclose} />
      </Modal>
    </div>
  );
};

export default Projects;
