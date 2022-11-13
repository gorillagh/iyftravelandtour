import React, { useState } from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { Autocomplete, Grid, InputAdornment } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const FlightInput = () => {
  let options = ["Kumasi", "Accra", "Takoradi"];
  const [departDate, setDepartDate] = useState(dayjs());
  const [returnDate, setReturnDate] = useState(dayjs());
  const [passengers, setPassengers] = useState(null);
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={2}>
        <Autocomplete
          freeSolo
          size="small"
          value={from}
          onChange={(e, newValue) => setFrom(newValue)}
          disablePortal
          options={options}
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              variant="filled"
              label="From"
              InputProps={{
                ...params.InputProps,
                disableUnderline: true,
              }}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <Autocomplete
          size="small"
          freeSolo
          disablePortal
          value={to}
          onChange={(e, newValue) => setTo(newValue)}
          options={options}
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              variant="filled"
              label="To"
              InputProps={{
                ...params.InputProps,
                disableUnderline: true,
              }}
            />
          )}
        />
      </Grid>
      <Grid item xs={6} md={2}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            disablePast
            label="Leaving on"
            openTo="day"
            views={["year", "month", "day"]}
            value={departDate}
            onChange={(newValue) => {
              setDepartDate(newValue);
            }}
            renderInput={(params) => (
              <TextField
                fullWidth
                size="small"
                variant="filled"
                {...params}
                InputProps={{
                  ...params.InputProps,
                  disableUnderline: true,
                  //   endAdornment: (
                  //     <InputAdornment
                  //       sx={{ display: { lg: "none" } }}
                  //       position="start"
                  //     >
                  //       <CalendarMonthIcon />
                  //     </InputAdornment>
                  //   ),
                }}
              />
            )}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={6} md={2}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            disablePast
            label="returning on"
            openTo="day"
            views={["year", "month", "day"]}
            value={returnDate}
            onChange={(newValue) => {
              setReturnDate(newValue);
            }}
            renderInput={(params) => (
              <TextField
                fullWidth
                size="small"
                variant="filled"
                {...params}
                InputProps={{
                  ...params.InputProps,
                  disableUnderline: true,
                  //   endAdornment: (
                  //     <InputAdornment
                  //       sx={{ display: { lg: "none" } }}
                  //       position="start"
                  //     >
                  //       <CalendarMonthIcon />
                  //     </InputAdornment>
                  //   ),
                }}
              />
            )}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={12} md={2}>
        <Autocomplete
          size="small"
          freeSolo
          disablePortal
          value={passengers}
          onChange={(e, newValue) => setPassengers(newValue)}
          options={options}
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              variant="filled"
              label="Passengers"
              InputProps={{
                ...params.InputProps,
                disableUnderline: true,
              }}
            />
          )}
        />
      </Grid>
    </Grid>
  );
};

export default FlightInput;
