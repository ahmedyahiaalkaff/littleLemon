import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';
import BookingPage from './Pages/BookingPage';

// pay attention to write it at the top level of your file
const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('Renders the BookingForm heading', () => {
  render(<BookingPage />);
  const headingElement = screen.getByText(/Booking Form/i);
  expect(headingElement).toBeInTheDocument();
});

test('InitializeTimes returns correct values', () => {
  render(<BookingPage />);
  const selectTimes = screen.getByTestId('res-time');
  const options = selectTimes.getElementsByTagName("option");
  expect(options[0]).toHaveValue('17:00');
  expect(options[1]).toHaveValue('18:00');
  expect(options[2]).toHaveValue('19:00');
  expect(options[3]).toHaveValue('20:00');
  expect(options[4]).toHaveValue('21:00');
  expect(options[5]).toHaveValue('22:00');
});

// test('UpdateTimes changes availabeTimes', () => {
//   render(<BookingPage />);
//   const selectDate = screen.getByLabelText(/Choose date/);
//   const selectTimes = screen.getByTestId('res-time');
//   fireEvent.change(selectDate, "22/08/2023")
//   const options = selectTimes.getElementsByTagName("option");
//   expect(options[0]).toHaveValue('17:00');
//   expect(options[1]).toHaveValue('18:00');
//   expect(options[2]).toHaveValue('19:00');
//   expect(options[3]).toHaveValue('20:00');
//   expect(options[4]).toHaveValue('21:00');
//   expect(options[5]).toHaveValue('22:00');
// });


