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
  const arr = ['Select time slot', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  expect(initializeTimes()).toEqual(arr);
})

test('validate function updateTimes', () => {
  const arr = ['Select time slot', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  expect(updateTimes()).toEqual(arr);
})
