import { useCallback, useEffect, useState } from 'react';
import './index.css';

function BookingForm(props) {
  console.log('BookingForm', props);
  const today = useCallback(()=>{
    const tod = new Date();
    return tod.getFullYear()+"/"+(tod.getMonth()+1).toString().padStart(2, '0')+"/"+tod.getDate().toString().padStart(2, '0');
  }, [])
  // const [availableTimes, setAailableTimes] = useState([
  //   '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  // ]);
  const [formData, setFormData] = useState({
    resDate: today(),
    resTime: '17:00',
    guests: 1,
    occasion: 'Birthday',
  })

  const {availableTimes=[], dispatch, submitForm} = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData);
  }

  const handleFormDataChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]:value});
    // if(name === 'resDate'){
    //   console.log(value);
    //   dispatch({date: new Date(value)});
    // }
  }

  useEffect(()=>{
    dispatch({date: new Date(formData.resDate)});
  }, [formData.resDate, dispatch]);

  return (
    <>
      <h1>Booking Form</h1>
      <form style={{"display": "grid", "maxWidth": "200px", "gap": "20px"}} onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={formData.resDate} name="resDate" onChange={handleFormDataChange}/>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" data-testid="res-time" value={formData.resTime} name="resTime" onChange={handleFormDataChange}>
            {availableTimes.map(a=><option key={a}>{a}</option>)}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={formData.guests} name="guests" onChange={handleFormDataChange}/>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={formData.occasion} name="occasion" onChange={handleFormDataChange}>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </>
  );
}

export default BookingForm;