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

const Project = ({ name, image }) => {
  const classes = useStyle();

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid item xs={3}>
      <Card variant="outlined">
        <CardHeader title={name} />
        <CardMedia component="img" src={image} />
        <CardActions>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
          >
            <EditIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>This is a form</CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
};

export default Project;
