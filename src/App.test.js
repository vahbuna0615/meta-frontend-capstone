import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import { updateTimes, initializeTimes } from './pages/BookingPage';

test('renders learn react link', () => {
  render(<BookingForm />);
  const dateElement = screen.getByText('Booking Form');
  console.log(dateElement)
  expect(dateElement).toBeInTheDocument();
});

test('validate function initializeTimes', () => {
  expect(updateTimes()).toEqual(initializeTimes())
})

test('validate function updateTimes', () => {

})
