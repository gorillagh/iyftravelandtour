import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Card, Grid, Typography } from "@mui/material";
import ActionButton from "../../components/Buttons/ActionButton";
import ProgressStepper from "../../components/Navbars/ProgressStepper";
import PageTitle from "../../components/Typography/PageTitle";
import Subtitle from "../../components/Typography/Subtitle";

const TranscriptionOrder = () => {
  const dispatch = useDispatch();
  const { stepper } = useSelector((state) => ({ ...state }));

  const handleBack = () => {
    dispatch({
      type: "STEPPER",
      payload: stepper - 1,
    });
  };

  const handleNext = () => {
    dispatch({
      type: "STEPPER",
      payload: stepper + 1,
    });
  };

  return (
    <Box>
      <Grid justifyContent="center" container my={3}>
        <Grid item xs={12} md={9}>
          <PageTitle mt={0} title="Transcription" />
        </Grid>
        <Grid item xs={9} md={3}>
          <ProgressStepper stepper={stepper} />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} md={8}>
          <Card
            sx={{
              m: 1,
              p: 2,
              display: "flex",
              flexDirection: "column",
              // borderRadius: "16px",
              background: " rgba(255, 255, 255, 0.7)",
              webkitBackdropFilter: "blur(5px)",
              border: "1px solid rgba(255, 255, 255, 0.9)",
            }}
          >
            {/* <Typography variant="body2">
              Upload or provide a link to audio or video file(s)
            </Typography> */}
            <Subtitle title="Upload file or Link" align="center" />
            <Grid container justifyContent="center" my={3}>
              <Grid item xs={12} md={8}>
                <Box sx={{ border: "2px dashed " }} p={1}>
                  <Typography align="center" variant="body2" my={3}>
                    Drag and drop files here
                  </Typography>
                  <ActionButton variant="outlined" text="Upload files" my={0} />
                </Box>
              </Grid>
              <Grid item sx={12} md={12}>
                <Typography
                  sx={{ my: 3 }}
                  variant="body2"
                  color="text.secondary"
                  align="center"
                >
                  OR
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box>
                  <ActionButton variant="contained" text="Add link" my={0} />
                </Box>
              </Grid>
            </Grid>
            {/* <Grid container>
              <Grid item xs={6} sx={{ textAlign: "left" }}>
                <ActionButton
                  text="Back"
                  variant="outlined"
                  fullWidth={false}
                  onClick={handleBack}
                />
              </Grid>
              <Grid item xs={6} sx={{ textAlign: "center" }}>
                <ActionButton
                  text={stepper <= 1 ? "Next" : "pay"}
                  fullWidth={false}
                  onClick={handleNext}
                />
              </Grid>
            </Grid> */}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TranscriptionOrder;
