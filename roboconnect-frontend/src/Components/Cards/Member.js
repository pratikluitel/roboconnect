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
  Modal,
} from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import { useStyle } from "../helpers/collapseStyleHelper";

import { useStyle as useModalStyle } from "../helpers/modalStyleHelper";

import MemberForm from "../Forms/MemberForm";
import MemberDetails from "./MemberDetails";

const Member = ({ member, handleDelete, handleEdit, user }) => {
  const classes = useStyle();
  const modalclasses = useModalStyle();

  const [expanded, setExpanded] = useState(false);
  const [modalOpen, setModalopen] = useState(false);

  const handleModalopen = () => {
    setModalopen(true);
  };

  const handleModalclose = () => {
    setModalopen(false);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Grid item xs={3}>
        <Card variant="outlined">
          <CardHeader
            title={member.name}
            subheader={member.email}
            onClick={handleModalopen}
          />
          <CardMedia component="img" src={member.photo} height={300} />
          {user === null ? null : (
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
          )}
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
      <Modal
        open={modalOpen}
        onClose={handleModalclose}
        className={modalclasses.paper}
      >
        <MemberDetails member={member} />
      </Modal>
    </>
  );
};
export default Member;
