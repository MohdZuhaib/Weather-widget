import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";

import { store } from './Redux/store';
import Header from "./Components/Header";
import Body from "./Components/Body";
import days from "./staticData";
import { GetWeather } from './Redux/actions'
import { useDispatch } from "react-redux";

const LandingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(GetWeather())


  }, [])

  return (
    <Container maxWidth="xl" sx={{ pt: 2 }}>
      <Header />
      <Body />
    </Container>
  );
};

export default LandingPage;
