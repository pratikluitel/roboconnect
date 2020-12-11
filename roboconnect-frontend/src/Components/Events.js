import Grid from "@material-ui/core/Grid";
import Event from "./Cards/Event";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { IconButton } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";

import ModalForm from "./Forms/EventModalForm";

import {
  getMembers,
  deleteMember,
  putMember,
  postMember,
} from "../services/events";
import { useState, useEffect } from "react";

import { useStyle } from "./helpers/modalStyleHelper";

const Events = () => {
  //const [events,setEvents] = useState([])
  const [refetch, setRefetch] = useState([]);
  const [modalOpen, setModalopen] = useState(false);
  const events = [
    {
      id: 0,
      name: "RoboLocus",
      location: "Pulchowk, Lalitpur",
      date: "29th January 2020",
      photo:
        "https://lh3.googleusercontent.com/proxy/Q_YPPIfAGKRVXlOvYxaC3KRviLPlWtSqGlgHuc_7o7EvrXSN_y1WdVCp1bAR7BWIuq43d832i_oK3Ut8esG3zHk60jCdpVT9dqf69On2AeI74Dp_-lOrXj1lutEkyQ",
    },
    {
      id: 1,
      name: "RoboLocus",
      location: "Pulchowk, Lalitpur",
      date: "29th January 2020",
      photo:
        "https://lh3.googleusercontent.com/proxy/Q_YPPIfAGKRVXlOvYxaC3KRviLPlWtSqGlgHuc_7o7EvrXSN_y1WdVCp1bAR7BWIuq43d832i_oK3Ut8esG3zHk60jCdpVT9dqf69On2AeI74Dp_-lOrXj1lutEkyQ",
    },
    {
      id: 2,
      name: "RoboLocus",
      location: "Pulchowk, Lalitpur",
      date: "29th January 2020",
      photo:
        "https://lh3.googleusercontent.com/proxy/Q_YPPIfAGKRVXlOvYxaC3KRviLPlWtSqGlgHuc_7o7EvrXSN_y1WdVCp1bAR7BWIuq43d832i_oK3Ut8esG3zHk60jCdpVT9dqf69On2AeI74Dp_-lOrXj1lutEkyQ",
    },
    {
      id: 3,
      name: "RoboLocus",
      location: "Pulchowk, Lalitpur",
      date: "29th January 2020",
      photo:
        "https://lh3.googleusercontent.com/proxy/Q_YPPIfAGKRVXlOvYxaC3KRviLPlWtSqGlgHuc_7o7EvrXSN_y1WdVCp1bAR7BWIuq43d832i_oK3Ut8esG3zHk60jCdpVT9dqf69On2AeI74Dp_-lOrXj1lutEkyQ",
    },
  ];

  const classes = useStyle();

  // useEffect(() => {
  //   (async () => {
  //     const newMembers = await getMembers();
  //     setEvents(newMembers);
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
      <h1>Events we have organized</h1>
      <Grid container spacing={1} alignItems="center" justify="center">
        {events.map((event) => (
          <Event
            key={event.id}
            event={event}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
        <IconButton onClick={handleModalopen}>
          <AddCircleIcon />
        </IconButton>
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

export default Events;
