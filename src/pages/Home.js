import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import HeroSection from "../components/Views/HeroSection";
import airports from "../airports.json";
import codes from "../codes.json";

const bookings = [
  { type: "Flights", icon: "flight" },
  { type: "Hotels", icon: "hotel" },
  { type: "Visa", icon: "card" },
];

const Home = (props) => {
  const [userCurrentLocation, setUserCurrentLocation] = useState({});
  const [bookingTypes, setBookingTypes] = useState();
  const [selectedBookingType, setSelectedBookingType] = useState("flights");
  const [flightSearchDetails, setFlightSearchDetails] = useState({
    origin: {},
    destination: {},
    departDate: " ",
    returnDate: " ",
    passengerOptions: {},
  });
  const [originAirports, setOriginAirports] = useState([]);
  const [destinationAirports, setDestinationAirports] = useState([]);
  const [passengerOptions, setPassengerOptions] = useState({
    adult: 1,
    infant: 0,
  });

  useEffect(() => {
    mergeCodes();
    setBookingTypes(bookings);
  }, []);

  ///////Merge country codes////////////////
  const mergeCodes = async () => {
    try {
      let result = [];
      airports.map((a, i) => {
        return codes.map((c, i) => {
          if (a.country === c.name) {
            result.push({ ...a, countryCode: c.code, dialCode: c.dial_code });
          }
          return result;
        });
      });
      setOriginAirports(result);
      setDestinationAirports(result);

      const userLocDetails = await fetch(
        "https://api.ipregistry.co/?key=qp552fub7f2xswwe"
      ).then(function (response) {
        return response.json();
      });
      setUserCurrentLocation(await userLocDetails.location);
      console.log("location", userLocDetails.location.country);

      let autoOrigin = await result.find(
        (element) =>
          element.countryCode === userLocDetails.location.country.code
      );

      autoOrigin &&
        setFlightSearchDetails((oldValues) => ({
          ...oldValues,
          origin: autoOrigin,
        }));
    } catch (error) {
      console.log(error);
    }
  };

  ////////////Change Booking Type//////////////////
  const handleBookingTypeChange = (e, value) => {
    if (selectedBookingType === null) return;
    setSelectedBookingType(value);
    console.log(value);
  };

  /////////////Flight Search Form Changes////////////////////////
  const handleOriginChange = (e, value) => {
    console.log(value);
    value !== null &&
      setFlightSearchDetails((oldValues) => ({
        ...oldValues,
        origin: value,
      }));
  };

  const handleDestinationChange = (e, value) => {
    value !== null &&
      setFlightSearchDetails((oldValues) => ({
        ...oldValues,
        destination: value,
      }));
  };
  const handleDepartDateChange = (value) => {
    console.log(new Date(value));
    if (value !== null) {
      setFlightSearchDetails((oldValues) => ({
        ...oldValues,
        departDate: value,
      }));
      if (new Date(value) > new Date(flightSearchDetails.returnDate))
        setFlightSearchDetails((oldValues) => ({
          ...oldValues,
          returnDate: value,
        }));
    }
  };
  const handleReturnDateChange = (value) => {
    console.log(value);
    value !== null &&
      setFlightSearchDetails((oldValues) => ({
        ...oldValues,
        returnDate: value,
      }));
  };
  const handlePassengersChange = (e, value) => {
    setFlightSearchDetails((oldValues) => ({
      ...oldValues,
      passengers: value,
    }));
  };

  const handleFlightSearch = (e) => {
    console.log("Searching for Best Flight");
  };
  //////////////////////////////////////////////////////////////

  return (
    <>
      <HeroSection
        bookingTypes={bookingTypes}
        selectedBookingType={selectedBookingType}
        handleBookingTypeChange={handleBookingTypeChange}
        flightSearchDetails={flightSearchDetails}
        originAirports={originAirports}
        destinationAirports={destinationAirports}
        passengerOptions={passengerOptions}
        handleOriginChange={handleOriginChange}
        handleDestinationChange={handleDestinationChange}
        handleDepartDateChange={handleDepartDateChange}
        handleReturnDateChange={handleReturnDateChange}
        handleFlightSearch={handleFlightSearch}
      />
    </>
  );
};

export default Home;
