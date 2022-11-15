import React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ActionButton from "../Buttons/ActionButton";
import { Icon, InputAdornment, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const FlightSearchForm = (props) => {
  const [open, setOpen] = React.useState(false);
  const [openDes, setOpenDes] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [optionsDes, setOptionsDes] = React.useState([]);
  const loading = open && options.length === 0;
  const loadingDes = openDes && optionsDes.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      if (active) {
        setOptions([...props.originAirports]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading, props.originAirports]);

  React.useEffect(() => {
    let active = true;

    if (!loadingDes) {
      return undefined;
    }

    (async () => {
      if (active) {
        setOptionsDes([...props.destinationAirports]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loadingDes, props.destinationAirports]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  React.useEffect(() => {
    if (!openDes) {
      setOptionsDes([]);
    }
  }, [openDes]);

  return (
    <Box>
      <Grid container spacing={{ xs: 2, md: 1 }} justifyContent="center">
        <Grid item xs={12} md={2}>
          <Autocomplete
            open={open}
            onOpen={() => {
              setOpen(true);
            }}
            onClose={() => {
              setOpen(false);
            }}
            isOptionEqualToValue={(option, value) => option.city === value.city}
            freeSolo
            autoHighlight
            size="small"
            value={props.flightSearchDetails.origin}
            onChange={props.handleOriginChange}
            disablePortal
            options={options}
            getOptionLabel={(option) =>
              option.city ? `${option.city} (${option.iata_code})` : ""
            }
            loading={loading}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                {/* <img
                  loading="lazy"
                  width="20"
                  src={`https://flagcdn.com/w10/${option.countryCode.toLowerCase()}.png`}
                  srcSet={`https://flagcdn.com/w20/${option.countryCode.toLowerCase()}.png `}
                  alt=""
                /> */}
                <Typography variant="body2">
                  {option.city} ({option.iata_code})
                </Typography>
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                placeholder="City/Airport"
                {...params}
                autoFocus
                fullWidth
                variant="filled"
                label="From"
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <React.Fragment>
                      {loading ? (
                        <CircularProgress color="primary" size={20} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  ),
                  disableUnderline: true,
                }}
              />
            )}
          />
        </Grid>

        {/* ////////////////////////Destination////////////////////////// */}
        <Grid item xs={12} md={2}>
          <Autocomplete
            open={openDes}
            onOpen={() => {
              setOpenDes(true);
            }}
            onClose={() => {
              setOpenDes(false);
            }}
            isOptionEqualToValue={(option, value) => option.city === value.city}
            size="small"
            freeSolo
            autoHighlight
            disablePortal
            value={props.flightSearchDetails.destination.origin}
            onChange={props.handleDestinationChange}
            options={optionsDes}
            getOptionLabel={(option) => `${option.city} (${option.iata_code})`}
            loading={loadingDes}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                {/* <img
                  loading="lazy"
                  width="20"
                  src={`https://flagcdn.com/w10/${option.countryCode.toLowerCase()}.png`}
                  srcSet={`https://flagcdn.com/w20/${option.countryCode.toLowerCase()}.png `}
                  alt=""
                /> */}
                <Typography variant="body2">
                  {option.city} ({option.iata_code})
                </Typography>
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                placeholder="City/Airport"
                {...params}
                autoFocus={
                  !props.flightSearchDetails.destination ||
                  props.flightSearchDetails.destination === 0 ||
                  !props.flightSearchDetails.destination.length
                }
                fullWidth
                variant="filled"
                label="To"
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <React.Fragment>
                      {loadingDes ? (
                        <CircularProgress color="primary" size={20} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  ),
                  disableUnderline: true,
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Grid container>
            <Grid item xs={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  disablePast
                  label="Leaving on"
                  openTo="day"
                  views={["year", "month", "day"]}
                  inputFormat="DD-MM-YYYY"
                  minDate={dayjs()}
                  value={props.flightSearchDetails.departDate}
                  onChange={(value) => props.handleDepartDateChange(value)}
                  renderInput={(params) => (
                    <TextField
                      fullWidth
                      size="small"
                      variant="filled"
                      {...params}
                      InputProps={{
                        ...params.InputProps,
                        disableUnderline: true,
                        endAdornment: (
                          <React.Fragment>
                            <Icon sx={{ display: { lg: "none" } }}>
                              calendar_month
                            </Icon>
                            {params.InputProps.endAdornment}
                          </React.Fragment>
                        ),
                      }}
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  disablePast
                  label="returning on"
                  openTo="day"
                  views={["year", "month", "day"]}
                  inputFormat="DD-MM-YYYY"
                  minDate={props.flightSearchDetails.departDate}
                  value={props.flightSearchDetails.returnDate}
                  onChange={props.handleReturnDateChange}
                  renderInput={(params) => (
                    <TextField
                      fullWidth
                      size="small"
                      variant="filled"
                      {...params}
                      InputProps={{
                        ...params.InputProps,
                        disableUnderline: true,
                        endAdornment: (
                          <React.Fragment>
                            <Icon sx={{ display: { lg: "none" } }}>
                              calendar_month
                            </Icon>
                            {params.InputProps.endAdornment}
                          </React.Fragment>
                        ),
                      }}
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={2}>
          {/* <Autocomplete
            size="small"
            freeSolo
            disablePortal
            value={props.flightSearchDetails.passengers}
            onChange={props.handlePassengersChange}
            options={props.passengerOptions}
            renderInput={(params) => ( */}
          <Box style={{ cursor: "pointer !important" }}>
            <TextField
              // {...params}

              size="small"
              disabled
              fullWidth
              variant="filled"
              label="Passengers"
              // InputProps={{
              //   ...params.InputProps,
              //   disableUnderline: true,
              // }}
            />
          </Box>
          {/* )}
          /> */}
        </Grid>
      </Grid>
      <Grid container justifyContent="right" spacing={1}>
        <Grid item xs={12} md={3}>
          <ActionButton
            type="submit"
            backgroundColor="secondary.dark"
            text="Search"
            onClick={props.handleFlightSearch}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FlightSearchForm;