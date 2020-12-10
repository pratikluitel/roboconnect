import Grid from "@material-ui/core/Grid";
import Member from "./Cards/Member";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { IconButton } from "@material-ui/core";

const Members = () => {
  const members = [
    {
      id: 0,
      name: "John Doe",
      email: "doejohn@site.com",
      image:
        "https://bloximages.chicago2.vip.townnews.com/lompocrecord.com/content/tncms/assets/v3/editorial/6/59/6591b7cd-1c3c-5053-998b-c1b3f3e3a986/589f9525d703a.image.jpg",
    },
    {
      id: 1,
      name: "John Doe",
      email: "doejohn@site.com",
      image:
        "https://bloximages.chicago2.vip.townnews.com/lompocrecord.com/content/tncms/assets/v3/editorial/6/59/6591b7cd-1c3c-5053-998b-c1b3f3e3a986/589f9525d703a.image.jpg",
    },
    {
      id: 2,
      name: "John Doe",
      email: "doejohn@site.com",
      image:
        "https://bloximages.chicago2.vip.townnews.com/lompocrecord.com/content/tncms/assets/v3/editorial/6/59/6591b7cd-1c3c-5053-998b-c1b3f3e3a986/589f9525d703a.image.jpg",
    },
  ];
  return (
    <div className="members" style={{ marginTop: "50px" }}>
      <h1>Proud members of the Robotics Club family</h1>
      <Grid container spacing={1} alignItems="center" justify="center">
        {members.map((member) => (
          <Member
            key={member.id}
            name={member.name}
            image={member.image}
            email={member.email}
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
