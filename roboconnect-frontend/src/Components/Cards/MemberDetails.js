import { CardHeader, Card, CardMedia, CardContent } from "@material-ui/core";
import { useState, useEffect } from "react";
import { getMember } from "../../services/members";

import ProjList from "./ProjList";

const MemberDetails = ({ member }) => {
  const [mem, setMem] = useState(null);
  useEffect(() => {
    (async () => {
      const newMember = await getMember(member.id);
      setMem(newMember);
    })();
  }, [member]);

  return mem === null ? null : (
    <Card variant="outlined">
      <CardHeader title={mem.name} subheader={mem.email} />
      <CardMedia component="img" src={mem.photo} height={300} />
      <CardContent>Projects by {mem.name}</CardContent>
      <CardContent>
        <ProjList prj={mem.projects} />
      </CardContent>
    </Card>
  );
};
export default MemberDetails;
