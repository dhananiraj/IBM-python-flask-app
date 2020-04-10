import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import "./App.css";
import { Navbar } from "./components/Navbar.js";
import { Body } from "./components/Body.js";

function App() {
  return (
    <>
      <Navbar />
      <Body />
    </>
  );
}

export default App;
