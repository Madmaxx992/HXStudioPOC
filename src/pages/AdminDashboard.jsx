import styled from "styled-components";
import Navbar from "../components/Navbar";
import ProjectList from "../components/ProjectList";

const AdminDashboardContainer = styled.div`
  width: 1215px;
  height: 695px;
`;

const AdminDashboard = () => {
  return (
    <AdminDashboardContainer>
      <Navbar />
      <ProjectList />
    </AdminDashboardContainer>
  );
};

export default AdminDashboard;
