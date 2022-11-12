import { Box, Container } from "@mui/material";
import React from "react";
import PageTitle from "../../components/Typography/PageTitle";

const Dashboard = () => {
  return (
    <Container maxWidth="lg">
    <Box>
      <PageTitle title="User Dashboard" />
    </Box></Container>
  );
};

export default Dashboard;
