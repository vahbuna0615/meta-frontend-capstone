import { useReducer } from "react";
import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../utils/temp";
import { useNavigate } from "react-router-dom";

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return (response.length !== 0) ? response : availableTimes;
}

const initializeTimes = (initialAvailableTimes) => {
  const fetchedTimes = fetchAPI(new Date())
  return [...initialAvailableTimes, ...fetchedTimes];
}

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitData = formData => {
    const response = submitAPI(formData);
    if (response) {
      navigate('/confirmedBooking');
    }
  }

  return (
    <div className="booking-form">
      
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitData={submitData}/>
    </div>
  )
}

export default BookingPage;