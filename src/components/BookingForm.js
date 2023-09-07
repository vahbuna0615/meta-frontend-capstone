import { useState } from "react"

const BookingForm = (props) => {

  const [date, setDate] = useState()
  const [time, setTime] = useState()
  const [guestNo, setGuestno] = useState(0)
  const [occasion, setOccasion] = useState()

  const handleDateChange = props.dateChange
  const availableTimes = props.timeSlots

  const getIsFormValid = () => {
    return (
      date &&
      time !== 'Select time slot' &&
      guestNo > 0
    )
  }

  const clearForm = () => {
    setDate('')
    setTime('')
    setGuestno(0)
    setOccasion('')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Reservation completed');
    clearForm();
  }

  const occasions = ['None', 'Birthday', 'Anniversary', 'Meeting']

  return (
    <>
      <h1 id="head-form">Booking Form</h1>
      <form onSubmit={handleSubmit} style={{display: "grid", maxWidth: 200, gap: '20px', textAlign: "center"}}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" value={date} id="res-date" onChange={(e) => {setDate(e.target.value); handleDateChange(e.target.value)} }/>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
          {availableTimes && availableTimes.map((val) => {
            return (
              <option key={val}>{val}</option>
            )
          })}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" value={guestNo} min={1} max={10} id="guests" onChange={(e) => setGuestno(e.target.value)}/>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
          {occasions.map((val)=> {
            return (
              <option key={val}>{val}</option>
            )
          })}
        </select>
        <input type="submit" value="Make your reservation" disabled={!getIsFormValid()} />
      </form>
    </>
    
  )
}

export default BookingForm;