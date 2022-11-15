import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
// import PageTitle from "../components/Typography/PageTitle";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Icon from "@mui/material/Icon";
import FlightSearchForm from "./FlightSearchForm";
import PageTitle from "../Typography/PageTitle";

const HeroSection = (props) => {
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
            props.selectedBookingType === "flights"
              ? `url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80)`
              : props.selectedBooking === "hotels"
              ? "url(https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"
              : "url(https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
        }}
      >
        {/* Increase the priority of the hero background image */}
        {
          <img
            style={{ display: "none" }}
            src="url(heroImage.jpg)"
            alt="hero"
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
              value={props.selectedBookingType}
              exclusive
              onChange={props.handleBookingTypeChange}
              aria-label="Platform"
            >
              {props.bookingTypes &&
                props.bookingTypes.map((item, i) => {
                  return (
                    <ToggleButton
                      className="booking-select-button"
                      key={i}
                      value={item.type.toLowerCase()}
                    >
                      <Icon sx={{ mr: 1 }}>{item.icon}</Icon> {item.type}
                    </ToggleButton>
                  );
                })}
            </ToggleButtonGroup>
          </Box>
          <FlightSearchForm {...props} />
        </Container>
      </Paper>
    </Box>
  );
};

export default HeroSection;
