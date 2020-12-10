import { useState } from "react";
import clsx from "clsx";

import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  IconButton,
  Collapse,
} from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import { useStyle } from "../helpers/collapseStyleHelper";

const Tournament = ({ tournament }) => {
  const classes = useStyle();

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Grid item xs={3}>
      <Card variant="outlined">
        <CardHeader title={tournament.achievement} />
        <CardContent>{tournament.name}</CardContent>
        <CardContent>{tournament.location}</CardContent>
        <CardContent>Theme: {tournament.theme}</CardContent>
        <CardContent>{tournament.date}</CardContent>
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

export default Tournament;
