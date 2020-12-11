import { useState } from "react";
import clsx from "clsx";

import {
  Grid,
  Card,
  CardMedia,
  CardHeader,
  CardActions,
  IconButton,
  CardContent,
  Collapse,
} from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import { useStyle } from "../helpers/collapseStyleHelper";

import MemberForm from "../Forms/MemberForm";

const Member = ({ member, handleDelete, handleEdit }) => {
  const classes = useStyle();

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Grid item xs={3}>
      <Card variant="outlined">
        <CardHeader title={member.name} subheader={member.email} />
        <CardMedia component="img" src={member.photo} height={300} />
        <CardActions>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
          >
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => handleDelete(member.id)}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <MemberForm
              member={member}
              handleEdit={handleEdit}
              handleExpandClick={handleExpandClick}
            />
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
};
export default Member;
