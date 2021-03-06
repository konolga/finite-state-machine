/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const states = {
  loading: false,
  success: false,
  error: false,
  results: null,
};

const fetchStates = {
  loading: { ...states, loading: true },
  success: { ...states, success: true },
  error: { ...states, error: true },
};

const Machine = (...args) => {
  const [currentState, updateState] = useState(fetchStates.loading);
  const doFetch = async () => {
    try {
      const res = await fetch(...args);
      if (res) {
        const results = await res.json();
        updateState({ ...fetchStates.success, results });
      }
    } catch (error) {
      updateState(fetchStates.error);
    }
  };

  useEffect(() => {
    doFetch();
  }, []);

  return currentState;
};

export default Machine;
