import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PageTitle from "../components/Typography/PageTitle";
// import NonstickyFooter from "../components/Footers/NonstickyFooter";

const NotFound = () => {
  return (
    <Container sx={{ py: 2 }} maxWidth="lg">
          <Box>
              <PageTitle title="Sorry, This Page is not available!" color="#ce0018"/>
          </Box>
          </Container>
  );
};

export default NotFound;
