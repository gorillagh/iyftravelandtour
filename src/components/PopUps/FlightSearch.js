import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import Grid from "@mui/material/Grid";
import Subtitle from "../Typography/Subtitle";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //   maxWidth: 400,
  //   minWidth: 250,
  width: "85%",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "16px",
  p: 2,
};

const FlightSearch = (props) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <Modal
        open={props.open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClose={props.onClose}
      >
        <Box sx={style}>
          {loading ? (
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={5}>
                <Box textAlign="center">
                  <Subtitle
                    my={0}
                    title={props.flightSearchDetails.origin.name}
                  />
                  <Typography>
                    {props.flightSearchDetails.origin.city},{" "}
                    {props.flightSearchDetails.origin.country}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={2}>
                <Typography textAlign="center">To</Typography>
                <Box sx={{ width: "100%" }}>
                  <LinearProgress />
                </Box>
              </Grid>
              <Grid item xs={5}>
                <Box textAlign="center">
                  <Subtitle
                    my={0}
                    textAlign="center"
                    title={props.flightSearchDetails.destination.name}
                  />
                  <Typography>
                    {props.flightSearchDetails.destination.city},{" "}
                    {props.flightSearchDetails.destination.country}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          ) : (
            <Subtitle title="Flight Search Results" />
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default FlightSearch;
