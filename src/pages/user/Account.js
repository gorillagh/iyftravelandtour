import React from "react";
import { Box, Container } from "@mui/material";
import PageTitle from "../../components/Typography/PageTitle";
import Navbar from "../../components/Navbars/Navbar";

const Account = () => {
  return (
    <>
    <Navbar />
    <Container maxWidth="lg">
    <Box>
      <PageTitle title="Account Settings" />
    </Box>
    </Container>
    </>
  );
};

export default Account;
