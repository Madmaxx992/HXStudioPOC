import styled from "styled-components";
import Navbar from "../components/Navbar";

const AdminDashboardContainer = styled.div`
  width: 1215px;
  height: 695px;
`;

const AdminDashboard = () => {
  return <AdminDashboardContainer> <Navbar /> </AdminDashboardContainer>;
};

export default AdminDashboard;
