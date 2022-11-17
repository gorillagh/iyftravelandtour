import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Grid,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

const PassengerSelection = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={props.openPassengerSelection}
      onClose={props.handlePassengerSelectionClose}
    >
      <DialogTitle>Passengers</DialogTitle>
      <Grid container spacing={0} sx={{ backgroundColor: "#a3b8cd", p: 2 }}>
        <Grid item mt={2} xs={1}>
          <Icon fontSize="small">man</Icon>
        </Grid>
        <Grid item mt={2} xs={4}>
          <Typography variant="body1">Adult(s)</Typography>
        </Grid>
        <Grid item xs={7}>
          <TextField
            size="small"
            type="number"
            value={props.flightSearchDetails.passengers.adults}
            variant="filled"
            InputProps={{
              inputProps: {
                style: { textAlign: "center" },
              },
              min: 1,

              startAdornment: (
                <IconButton
                  sx={{
                    backgroundColor: "primary.light",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "primary.main",
                    },
                  }}
                  fontSize="small"
                  onClick={() => {
                    if (props.flightSearchDetails.passengers.adults - 1 < 1)
                      return;
                    props.handlePassengersChange({
                      adults: props.flightSearchDetails.passengers.adults - 1,
                      infants: props.flightSearchDetails.passengers.infants,
                    });
                  }}
                >
                  <Icon sx={{ fontSize: "small" }}>remove</Icon>
                </IconButton>
              ),
              endAdornment: (
                <IconButton
                  sx={{
                    backgroundColor: "primary.light",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "primary.main",
                    },
                  }}
                  fontSize="small"
                  onClick={() =>
                    props.handlePassengersChange({
                      adults: props.flightSearchDetails.passengers.adults + 1,
                      infants: props.flightSearchDetails.passengers.infants,
                    })
                  }
                >
                  <Icon sx={{ fontSize: "small" }}>add</Icon>
                </IconButton>
              ),
              disableUnderline: true,
            }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={0} sx={{ backgroundColor: "#a3b8cd", p: 2 }}>
        <Grid item mt={2} xs={1}>
          <Icon fontSize="small">child_care</Icon>
        </Grid>
        <Grid item mt={2} xs={4}>
          <Typography variant="body1">Infant(s)</Typography>
        </Grid>
        <Grid item xs={7}>
          <TextField
            size="small"
            type="number"
            value={props.flightSearchDetails.passengers.infants}
            variant="filled"
            InputProps={{
              inputProps: {
                style: { textAlign: "center" },
              },
              min: 0,

              startAdornment: (
                <IconButton
                  sx={{
                    backgroundColor: "primary.light",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "primary.main",
                    },
                  }}
                  fontSize="small"
                  onClick={() => {
                    if (props.flightSearchDetails.passengers.infants - 1 < 0)
                      return;
                    props.handlePassengersChange({
                      adults: props.flightSearchDetails.passengers.adults,
                      infants: props.flightSearchDetails.passengers.infants - 1,
                    });
                  }}
                >
                  <Icon sx={{ fontSize: "small" }}>remove</Icon>
                </IconButton>
              ),
              endAdornment: (
                <IconButton
                  sx={{
                    backgroundColor: "primary.light",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "primary.main",
                    },
                  }}
                  fontSize="small"
                  onClick={() =>
                    props.handlePassengersChange({
                      adults: props.flightSearchDetails.passengers.adults,
                      infants: props.flightSearchDetails.passengers.infants + 1,
                    })
                  }
                >
                  <Icon sx={{ fontSize: "small" }}>add</Icon>
                </IconButton>
              ),
              disableUnderline: true,
            }}
          />
        </Grid>
      </Grid>

      {/* <DialogActions>
        <Button onClick={() => props.handlePassengerSelectionClose}>
          Cancel
        </Button>
        <Button onClick={handleClose}>Subscribe</Button>
      </DialogActions> */}
    </Dialog>
  );
};

export default PassengerSelection;
