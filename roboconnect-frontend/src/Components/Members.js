import Grid from "@material-ui/core/Grid";
import Member from "./Cards/Member";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { IconButton } from "@material-ui/core";

import { getMembers, deleteMember, putMember } from "../services/members";
import { useState, useEffect } from "react";

const Members = () => {
  const [members, setMembers] = useState([]);
  const [refetch, setRefetch] = useState([]);

  useEffect(() => {
    (async () => {
      const newMembers = await getMembers();
      setMembers(newMembers);
    })();
  }, [refetch]);

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
          />
        ))}
        <IconButton>
          <AddCircleIcon />
        </IconButton>
      </Grid>
    </div>
  );
};

export default Members;
