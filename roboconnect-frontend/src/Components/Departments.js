import Grid from "@material-ui/core/Grid";
import Department from "./Cards/Department";

const Departments = () => {
  const departments = ["Mechanical", "Electronics", "Electrical", "Aerospace"];
  return (
    <div className="members" style={{ marginTop: "50px" }}>
      <h1>Departments</h1>
      <Grid container spacing={1} alignItems="center" justify="center">
        {departments.map((department) => (
          <Department name={department} key={department} />
        ))}
      </Grid>
    </div>
  );
};

export default Departments;
