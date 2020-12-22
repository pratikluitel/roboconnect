import Grid from "@material-ui/core/Grid";
import Tournament from "./Cards/Tournament";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { IconButton } from "@material-ui/core";

import Modal from "@material-ui/core/Modal";

import ModalForm from "./Forms/TournamentModalForm";

import {
  getMembers,
  deleteMember,
  putMember,
  postMember,
} from "../services/tournaments";
import { useState, useEffect } from "react";

import { useStyle } from "./helpers/modalStyleHelper";

const Tournaments = ({ user }) => {
  const [tournaments, setTournaments] = useState([]);
  const [refetch, setRefetch] = useState([]);
  const [modalOpen, setModalopen] = useState(false);

  const classes = useStyle();

  useEffect(() => {
    (async () => {
      const newMembers = await getMembers();
      setTournaments(newMembers);
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
      <h1>Tournaments we have participated in!</h1>
      <Grid container spacing={1} alignItems="center" justify="center">
        {tournaments.map((tournament) => (
          <Tournament
            key={tournament.id}
            tournament={tournament}
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
