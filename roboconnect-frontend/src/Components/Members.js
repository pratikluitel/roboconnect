import Grid from "@material-ui/core/Grid";
import Member from "./Cards/Member";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { IconButton } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";

import ModalForm from "./Forms/MemberModalForm";

import {
  getMembers,
  deleteMember,
  putMember,
  postMember,
} from "../services/members";
import { useState, useEffect } from "react";

import { useStyle } from "./helpers/modalStyleHelper";

const Members = ({ user }) => {
  const [members, setMembers] = useState([]);
  const [refetch, setRefetch] = useState([]);
  const [modalOpen, setModalopen] = useState(false);

  const classes = useStyle();

  useEffect(() => {
    (async () => {
      const newMembers = await getMembers();
      setMembers(newMembers);
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
  console.log(members);
  return (
    <div className="members" style={{ marginTop: "50px" }}>
      <h1>Proud members of the Robotics Club family</h1>
      <Grid container spacing={1} alignItems="center" justify="center">
        {members.map((member) => (
          <Member
            key={member.id}
            member={member}
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

export default Members;
