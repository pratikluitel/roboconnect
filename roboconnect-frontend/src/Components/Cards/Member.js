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

const Member = ({ id, name, image, email, handleDelete }) => {
  const classes = useStyle();

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid item xs={3}>
      <Card variant="outlined">
        <CardHeader title={name} subheader={email} />
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
          <IconButton onClick={() => handleDelete(id)}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent></CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
};
export default Member;
