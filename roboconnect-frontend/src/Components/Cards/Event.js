import { useState } from "react";
import clsx from "clsx";

import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  IconButton,
  Collapse,
  CardActions,
} from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import { useStyle } from "../helpers/collapseStyleHelper";

import MemberForm from "../Forms/EventForm";

const Event = ({ event, handleDelete, handleEdit, user }) => {
  const classes = useStyle();

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid item xs={3}>
      <Card variant="outlined">
        <CardHeader title={event.name} />
        <CardMedia component="img" src={event.image} />
        <CardContent>{event.location}</CardContent>
        <CardContent>{event.date}</CardContent>
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
            <IconButton onClick={() => handleDelete(event.id)}>
              <DeleteIcon />
            </IconButton>
          </CardActions>
        )}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <MemberForm
              member={event}
              handleEdit={handleEdit}
              handleExpandClick={handleExpandClick}
            />
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
};

export default Event;
