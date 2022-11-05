import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Autocomplete,
  Box,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import ActionButton from "../components/Buttons/ActionButton";
import PageTitle from "../components/Typography/PageTitle";
import CheckIcon from "@mui/icons-material/Check";

import ChooseOrderType from "../components/PopUps/ChooseOrderType";
import Subtitle from "../components/Typography/Subtitle";

const top100Cities = [
  { label: "Accra", year: 1994 },
  { label: "Kumasi", year: 1972 },
  { label: "Paris", year: 1974 },
  { label: "London", year: 2008 },
  { label: "New York City", year: 1957 },
  { label: "Lagos", year: 1993 },
  { label: "Abuja", year: 1994 },
];

const Home = () => {
  const [openChooseOrderType, setOpenChooseOrderType] = useState(false);
  const navigate = useNavigate();

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
          backgroundImage: `url(heroImage.jpg)`,
        }}
      >
        {/* Increase the priority of the hero background image */}
        {
          <img
            style={{ display: "none" }}
            src="https://source.unsplash.com/random"
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
              backgroundColor: "rgba(0,0,0,.2)",
            }}
          />
          <Grid container>
            <Grid item md={6}>
              <Box
                sx={{
                  position: "relative",
                  py: 3,
                }}
              >
                <Subtitle
                  fontWeight="bold"
                  title="Easy finding and booking flights and hotels in all of Africa"
                />
              </Box>
            </Grid>
          </Grid>
          <Box
            sx={{
              m: 1,
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "16px",
              background: " rgba(0, 0, 153, 0.5)",
              background: " rgba(255, 255, 255, 0.7 )",
              webkitBackdropFilter: "blur(5px)",
              border: "rgba(255, 255, 255, 0.9)",
            }}
          >
            <Grid container spacing={2} justifyContent="right">
              <Grid item xs={12} md={4}>
                <Autocomplete
                  size="small"
                  sx={{ backgroundColor: "#fff", p: 1 }}
                  disablePortal
                  id="combo-box-demo"
                  options={top100Cities}
                  renderInput={(params) => (
                    <TextField
                      sx={{ backgroundColor: "#fff" }}
                      {...params}
                      label="From"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Autocomplete
                  size="small"
                  sx={{ backgroundColor: "#fff", p: 1 }}
                  disablePortal
                  id="combo-box-demo"
                  options={top100Cities}
                  renderInput={(params) => (
                    <TextField
                      sx={{ backgroundColor: "#fff" }}
                      {...params}
                      label="to"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Autocomplete
                  size="small"
                  sx={{ backgroundColor: "#fff", p: 1 }}
                  disablePortal
                  id="combo-box-demo"
                  options={top100Cities}
                  renderInput={(params) => (
                    <TextField
                      sx={{ backgroundColor: "#fff" }}
                      {...params}
                      label="Leaving On"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <ActionButton text="Book now" />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Paper>
    </Box>
  );
};

export default Home;
