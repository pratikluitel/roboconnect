import Grid from "@material-ui/core/Grid";
import Member from "./Cards/Member";

const Members = () => {
  const members = [
    {
      name: "John Doe",
      email: "doejohn@site.com",
      image:
        "https://bloximages.chicago2.vip.townnews.com/lompocrecord.com/content/tncms/assets/v3/editorial/6/59/6591b7cd-1c3c-5053-998b-c1b3f3e3a986/589f9525d703a.image.jpg",
    },
    {
      name: "John Doe",
      email: "doejohn@site.com",
      image:
        "https://bloximages.chicago2.vip.townnews.com/lompocrecord.com/content/tncms/assets/v3/editorial/6/59/6591b7cd-1c3c-5053-998b-c1b3f3e3a986/589f9525d703a.image.jpg",
    },
    {
      name: "John Doe",
      email: "doejohn@site.com",
      image:
        "https://bloximages.chicago2.vip.townnews.com/lompocrecord.com/content/tncms/assets/v3/editorial/6/59/6591b7cd-1c3c-5053-998b-c1b3f3e3a986/589f9525d703a.image.jpg",
    },
  ];
  return (
    <div className="members">
      <h1>Proud members of the Robotics Club family</h1>
      <Grid container spacing={1} alignItems="center" justify="center">
        {members.map((member) => (
          <Member
            name={member.name}
            image={member.image}
            email={member.email}
          />
        ))}
      </Grid>
    </div>
  );
};

export default Members;
