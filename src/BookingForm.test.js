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

// test('InitializeTimes returns correct values', () => {
//   render(<BookingPage />);
//   const selectTimes = screen.getByTestId('res-time');
//   const options = selectTimes.getElementsByTagName("option");
//   expect(options[0]).toHaveValue('17:00');
//   expect(options[1]).toHaveValue('18:00');
//   expect(options[2]).toHaveValue('19:00');
//   expect(options[3]).toHaveValue('20:00');
//   expect(options[4]).toHaveValue('21:00');
//   expect(options[5]).toHaveValue('22:00');
// });

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

test('resDate element is required', () => {
  render(<BookingPage />);
  const selectDate = screen.getByLabelText(/Choose date*/);
  expect(selectDate).toHaveAttribute('required');
});

test('resTime element is required', () => {
  render(<BookingPage />);
  const selectTime = screen.getByLabelText(/Choose time*/);
  expect(selectTime).toHaveAttribute('required');
});

test('guests element is required', () => {
  render(<BookingPage />);
  const guests = screen.getByLabelText(/Number of guests*/);
  expect(guests).toHaveAttribute('required');
});

test('guests element have minimum check', () => {
  render(<BookingPage />);
  const guests = screen.getByLabelText(/Number of guests*/);
  expect(guests).toHaveAttribute('min', "1");
});

test('guests element have maximum check', () => {
  render(<BookingPage />);
  const guests = screen.getByLabelText(/Number of guests*/);
  expect(guests).toHaveAttribute('max', "10");
});

test('resDate element is required invalid state', () => {
  render(<BookingPage />);
  const selectDate = screen.getByLabelText(/Choose date*/);

  fireEvent.change(selectDate, {target: {value: ""}});
  fireEvent.blur(selectDate);
  expect(selectDate).toHaveAttribute('class', 'invalid');

  const submitButton = screen.getByRole('button');
  expect(submitButton).toHaveAttribute('disabled');
});

test('resDate element is required valid state', () => {
  render(<BookingPage />);
  const selectDate = screen.getByLabelText(/Choose date*/);
  fireEvent.change(selectDate, {target: {value: "2022-03-04"}});
  fireEvent.blur(selectDate);
  expect(selectDate).toHaveAttribute('class', 'valid');
});

test('resTime element is required invalid state', () => {
  render(<BookingPage />);
  const selectTime = screen.getByLabelText(/Choose time*/);
  const selectDate = screen.getByLabelText(/Choose date*/);
  fireEvent.change(selectDate, {target: {value: ""}});
  fireEvent.change(selectTime, {target: {value: ""}});
  fireEvent.blur(selectTime);
  expect(selectTime).toHaveAttribute('class', 'invalid');

  const submitButton = screen.getByRole('button');
  expect(submitButton).toHaveAttribute('disabled');
});

test('resTime element is required valid state', () => {
  render(<BookingPage />);
  const selectDate = screen.getByLabelText(/Choose date*/);
  fireEvent.change(selectDate, {target: {value: "2022-03-04"}});

  const selectTime = screen.getByLabelText(/Choose time*/);

  fireEvent.change(selectTime, {target: {value: "17:00"}});
  fireEvent.blur(selectTime);
  expect(selectTime).toHaveAttribute('class', 'valid');
});

test('guests element is required invalid state', () => {
  render(<BookingPage />);
  const guests = screen.getByLabelText(/Number of guests*/);
  fireEvent.change(guests, {target: {value: ""}});
  fireEvent.blur(guests);
  expect(guests).toHaveAttribute('class', 'invalid');

  const submitButton = screen.getByRole('button');
  expect(submitButton).toHaveAttribute('disabled');
});

test('guests element invalid state violates min check', () => {
  render(<BookingPage />);
  const guests = screen.getByLabelText(/Number of guests*/);
  fireEvent.change(guests, {target: {value: "0"}});
  fireEvent.blur(guests);
  expect(guests).toHaveAttribute('class', 'invalid');

  const submitButton = screen.getByRole('button');
  expect(submitButton).toHaveAttribute('disabled');
});

test('guests element invalid state violates max check', () => {
  render(<BookingPage />);
  const guests = screen.getByLabelText(/Number of guests*/);
  fireEvent.change(guests, {target: {value: "15"}});
  fireEvent.blur(guests);
  expect(guests).toHaveAttribute('class', 'invalid');

  const submitButton = screen.getByRole('button');
  expect(submitButton).toHaveAttribute('disabled');
});

test('guests element invalid state violates number check', () => {
  render(<BookingPage />);
  const guests = screen.getByLabelText(/Number of guests*/);
  fireEvent.change(guests, {target: {value: "aal"}});
  fireEvent.blur(guests);
  expect(guests).toHaveAttribute('class', 'invalid');

  const submitButton = screen.getByRole('button');
  expect(submitButton).toHaveAttribute('disabled');
});

test('guests element is required valid state', () => {
  render(<BookingPage />);

  const guests = screen.getByLabelText(/Number of guests*/);

  fireEvent.change(guests, {target: {value: "6"}});
  fireEvent.blur(guests);
  expect(guests).toHaveAttribute('class', 'valid');
});

test('form submit is enabled if state is valid', () => {
  render(<BookingPage />);

  const guests = screen.getByLabelText(/Number of guests*/);
  const selectTime = screen.getByLabelText(/Choose time*/);
  const selectDate = screen.getByLabelText(/Choose date*/);
  fireEvent.change(selectDate, {target: {value: "2023-01-01"}});
  fireEvent.change(selectTime, {target: {value: "17:00"}});
  fireEvent.change(guests, {target: {value: "5"}});
  fireEvent.blur(guests);
  fireEvent.blur(selectDate);
  fireEvent.blur(selectTime);

  const submitButton = screen.getByRole('button');
  expect(submitButton).not.toHaveAttribute('disabled');

});