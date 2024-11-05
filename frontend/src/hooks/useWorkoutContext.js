import { useContext } from "react";
import { WorkoutsContext } from "../components/context/WorkoutContext";

export const useWorkoutContext = () => {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw Error("useWorkootContext mustbe inside an WorkoutContextProvider");
  }

  return context;
};
