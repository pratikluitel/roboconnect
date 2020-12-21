import { useState } from "react";
import clsx from "clsx";

import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  IconButton,
  Collapse,
  CardContent,
} from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import { useStyle } from "../helpers/collapseStyleHelper";

import MemberForm from "../Forms/ProjectForm";

const Project = ({ project, handleDelete, handleEdit, user }) => {
  const classes = useStyle();

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid item xs={3}>
      <Card variant="outlined">
        <CardHeader title={project.name} />
        <CardMedia component="img" src={project.image} />
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
            <IconButton onClick={() => handleDelete(project.id)}>
              <DeleteIcon />
            </IconButton>
          </CardActions>
        )}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <MemberForm
              member={project}
              handleEdit={handleEdit}
              handleExpandClick={handleExpandClick}
            />
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
};

export default Project;
