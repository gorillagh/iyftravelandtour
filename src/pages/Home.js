import React from "react";
import { Box, Container, Grid, Paper } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";

import ActionButton from "../components/Buttons/ActionButton";
import PageTitle from "../components/Typography/PageTitle";

import FlightInput from "../components/Views/FlightInput";

const Home = () => {
  const [alignment, setAlignment] = React.useState("flights");

  const handleChange = (event, newAlignment) => {
    if (newAlignment === null) return;
    setAlignment(newAlignment);
    console.log(newAlignment);
  };

  return (
    <Box>
      <Paper
        sx={{
          position: "relative",
          backgroundColor: "grey.800",
          color: "#fff",
          mb: 4,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage:
            alignment === "flights"
              ? `url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80)`
              : alignment === "hotels"
              ? "url(https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"
              : "url(https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
        }}
      >
        {/* Increase the priority of the hero background image */}
        {
          <img
            style={{ display: "none" }}
            src="url(heroImage.jpg)"
            alt="hero image"
          />
        }
        <Container sx={{ py: 2 }} maxWidth="lg">
          <Box
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              backgroundColor: "rgba(0,0,0,.4)",
            }}
          />

          <Box
            sx={{
              position: "relative",
            }}
          >
            {" "}
            <PageTitle
              textAlign="center"
              fontWeight="bold"
              title="Easy finding and booking flights and hotels"
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "16px",
            }}
          >
            <ToggleButtonGroup
              sx={{ my: 3 }}
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
            >
              <ToggleButton value="flights">
                <FlightIcon sx={{ mr: 1 }} /> Flights
              </ToggleButton>
              <ToggleButton value="hotels">
                <HotelIcon sx={{ mr: 1 }} /> Hotels
              </ToggleButton>
              <ToggleButton value="visa">Visa</ToggleButton>
            </ToggleButtonGroup>
            <FlightInput />
            <Grid container justifyContent="right">
              <Grid item xs={12} md={3}>
                <ActionButton text="Search" />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Paper>
    </Box>
  );
};

export default Home;
