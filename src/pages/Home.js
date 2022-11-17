import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import HeroSection from "../components/Views/HeroSection";
import airports from "../airports.json";
import codes from "../codes.json";
import { toast } from "react-toastify";
import LoadingBackdrop from "../components/Feedbacks/LoadingBackdrop";
import FlightSearch from "../components/PopUps/FlightSearch";

const Home = (props) => {
  const [userCurrentLocation, setUserCurrentLocation] = useState({});
  const [bookingTypes, setBookingTypes] = useState([
    { type: "flights", icon: "flight" },
    { type: "hotels", icon: "hotel" },
    { type: "visa", icon: "card" },
  ]);
  const [selectedBookingType, setSelectedBookingType] = useState("flights");
  const [flightSearchDetails, setFlightSearchDetails] = useState({
    origin: {},
    destination: {},
    departDate: new Date(),
    returnDate: new Date(),
    passengers: {
      adults: 1,
      infants: 0,
    },
    bookingType: selectedBookingType,
    bookingClass: "economy",
    roundTrip: true,
  });
  const [originAirports, setOriginAirports] = useState([]);
  const [destinationAirports, setDestinationAirports] = useState([]);
  const [passengerOptions, setPassengerOptions] = useState([
    {
      adults: 1,
      infants: 0,
      additionalNotes: "",
    },
  ]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    mergeCodes();
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
        // "https://api.ipregistry.co/?key="
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
    console.log(value);
    if (value === null) return;
    setSelectedBookingType(value);
    console.log(value);
  };

  /////////////Flight Search Form Changes////////////////////////
  const handleOriginChange = (e, value) => {
    console.log(value);

    setFlightSearchDetails((oldValues) => ({
      ...oldValues,
      origin: value === null ? {} : value,
    }));
  };

  const handleDestinationChange = (e, value) => {
    setFlightSearchDetails((oldValues) => ({
      ...oldValues,
      destination: value === null ? {} : value,
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
  const handlePassengersChange = (value) => {
    value !== null &&
      setFlightSearchDetails((oldValues) => ({
        ...oldValues,
        passengers: value,
      }));
  };

  const handleRoundTripChange = (value) => {
    console.log(value.target.checked);
    setFlightSearchDetails((oldValues) => ({
      ...oldValues,
      roundTrip: value.target.checked,
    }));
  };

  const handleFlightSearch = (e) => {
    console.log("search Details=====>", flightSearchDetails);
    //////Validation Checks
    if (
      !flightSearchDetails.origin.name ||
      !flightSearchDetails.destination.name
    ) {
      toast.error("Please origin and destination");
      return;
    }
    if (
      flightSearchDetails.origin.iata_code ===
      flightSearchDetails.destination.iata_code
    ) {
      toast.error("Destination must be different from origin");
      return;
    }
    if (
      flightSearchDetails.passengers.adults +
        flightSearchDetails.passengers.infants <=
      0
    ) {
      toast.error("Please number of passengers");
      return;
    }

    ////////////////////

    setLoading(true);
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
        handleRoundTripChange={handleRoundTripChange}
        handlePassengersChange={handlePassengersChange}
        handleFlightSearch={handleFlightSearch}
      />
      <FlightSearch
        open={loading}
        flightSearchDetails={flightSearchDetails}
        onClose={() => setLoading(false)}
      />
    </>
  );
};

export default Home;
