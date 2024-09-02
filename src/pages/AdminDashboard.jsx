import styled from "styled-components";
import Navbar from "../components/Navbar";
import ProjectList from "../components/ProjectList";

const AdminDashboardContainer = styled.div`
  max-width: 1300px;
`;

const AdminDashboard = () => {
  return (
    <AdminDashboardContainer className="w-full h-full">
      <Navbar />
      <ProjectList />
    </AdminDashboardContainer>
  );
};

export default AdminDashboard;
