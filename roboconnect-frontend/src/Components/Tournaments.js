import Grid from "@material-ui/core/Grid";
import Tournament from "./Cards/Tournament";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { IconButton } from "@material-ui/core";

import Modal from "@material-ui/core/Modal";

import ModalForm from "./Forms/ProjectModalForm";

import {
  getMembers,
  deleteMember,
  putMember,
  postMember,
} from "../services/tournaments";
import { useState, useEffect } from "react";

import { useStyle } from "./helpers/modalStyleHelper";

const Tournaments = () => {
  //const [tournaments,setTournaments] = useState([])
  const [refetch, setRefetch] = useState([]);
  const [modalOpen, setModalopen] = useState(false);

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

  const classes = useStyle();

  // useEffect(() => {
  //   (async () => {
  //     const newMembers = await getMembers();
  //     setProjects(newMembers);
  //   })();
  // }, [refetch]);

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
    await deleteMember(id);
    toggleRefetch();
  };
  const handleEdit = async (member, event) => {
    event.preventDefault();
    await putMember(member);
    toggleRefetch();
  };
  const handleAdd = async (member, event) => {
    event.preventDefault();
    await postMember(member);
    toggleRefetch();
  };

  return (
    <div className="members" style={{ marginTop: "50px" }}>
      <h1>Tournaments we have participated in!</h1>
      <Grid container spacing={1} alignItems="center" justify="center">
        {tournaments.map((tournament) => (
          <Tournament
            key={tournament.id}
            tournament={tournament}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
        <IconButton onClick={handleModalopen}>
          <AddCircleIcon />
        </IconButton>
        <Modal
          open={modalOpen}
          onClose={handleModalclose}
          className={classes.paper}
        >
          <ModalForm
            handleAdd={handleAdd}
            handleModalclose={handleModalclose}
          />
        </Modal>
      </Grid>
    </div>
  );
};

export default Tournaments;
