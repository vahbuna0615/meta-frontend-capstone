import { useReducer } from "react";
import BookingForm from "../components/BookingForm";

export const initializeTimes = () => {
  return ['Select time slot', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
}

export const updateTimes = () => {
  return initializeTimes();
}

const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'INITIALIZE_TIMES':
      return initializeTimes();
    case 'UPDATE_TIMES':
      return updateTimes();
    default:
      return state;
  }
}

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, [], initializeTimes)

  const handleDateChange = (date) => {
   dispatch({ type: 'UPDATE_TIMES', payload: date }) 
  }
  return (
    <BookingForm timeSlots={availableTimes} dateChange={handleDateChange}/>
  )
}

export default BookingPage;