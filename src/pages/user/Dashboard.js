import { Box, Container } from "@mui/material";
import React from "react";
import Navbar from "../../components/Navbars/Navbar";
import PageTitle from "../../components/Typography/PageTitle";

const Dashboard = () => {
  return (
    <>
    <Navbar />
    <Container maxWidth="lg">
    <Box>
      <PageTitle title="User Dashboard" />
    </Box>
    </Container>
    </>
  );
};

export default Dashboard;
