import { useState } from "react";

const BookingForm = ({ availableTimes, dispatch, submitData }) => {

  const occasions = ['None', 'Birthday', 'Anniversary', 'Meeting']
  const minDate = new Date().toISOString().split('T')[0];
  const defaultTime = '17:00'
  const minGuestNo = 1;

  const [date, setDate] = useState(minDate);
  const [time, setTime] = useState(defaultTime);
  const [guestNo, setGuestno] = useState(minGuestNo);
  const [occasion, setOccasion] = useState('None')

  const getIsFormValid = () => {
    return (
      date !== '' &&
      time !== '' &&
      guestNo >= 1
    )
  }

  const clearForm = () => {
    setDate(minDate);
    setTime(defaultTime);
    setGuestno(minDate);
    setOccasion('None');
  }

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatch(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    submitData({ date, time, guestNo, occasion });
    clearForm();
  }

  return (
    <div className="form-fields">
      <h1 id="head-form">Booking Form</h1>
      <form onSubmit={handleSubmit} style={{display: "grid", maxWidth: 200, gap: '20px', textAlign: "center"}}>
        <label htmlFor="res-date">Choose date</label>
        <input min={minDate} type="date" required={true} value={date} id="res-date" onChange={handleDateChange}/>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" required={true} value={time} onChange={(e) => setTime(e.target.value)}>
          {availableTimes && availableTimes.map((val) => {
            return (
              <option key={val}>{val}</option>
            )
          })}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" required={true} value={guestNo} min={1} max={10} id="guests" onChange={(e) => setGuestno(e.target.value)}/>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" required={true} value={occasion} onChange={(e) => setOccasion(e.target.value)}>
          {occasions.map((val)=> {
            return (
              <option key={val}>{val}</option>
            )
          })}
        </select>
        <input className="button-styles" type="submit" value="Make your reservation" disabled={!getIsFormValid()} />
      </form>
    </div>
    
  )
}

export default BookingForm;