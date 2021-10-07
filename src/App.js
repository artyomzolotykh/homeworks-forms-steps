import React, { useState } from 'react';
import './App.css';
import DataForm from './components/DataForm';
import DataResult from './components/DataResult';

const sortByDate = (a, b) => 
  new Date(...a.date.split('.').reverse()) - new Date(...b.date.split('.').reverse());

function App() {
  const [dateValue, setDateValue] = useState('');
  const [passedValue, setPassedValue] = useState('');
  const [listing, setListing] = useState([]);
  const [ids, setId] = useState(1);

  const handleDateChange = value => {
    setDateValue(value);
  }

  const handlePassedChange = value => {
    setPassedValue(value);
  }

  const handleAddRow = () => {
    const newItem = {
      'id' : ids,
      'date' : dateValue,
      'passed' : passedValue
    };
    setId(prevId => prevId + 1);
    const listingIndex = listing.findIndex((item) => item.date === dateValue);

    if (listingIndex !== -1) {
      setListing(prevListing => prevListing.map(
        o => 
          (o.date === newItem.date) ?
          {'id':ids,'passed':(+o.passed + +newItem.passed),'date':dateValue} :
          o
      ));
    } else {
      setListing(prevListing => [...prevListing, newItem]);
    }

    setListing(prevListing => prevListing.sort(sortByDate));
    setDateValue('');
    setPassedValue('');
  }

  const removeItem = id => {
    setListing(prevListing => prevListing.filter(o => o.id !== id));
  }
  
  return (
    <div className="main">
      <div className="wrapper">
        <DataForm
          dateValue={dateValue}
          passedValue={passedValue}
          onDateChange={handleDateChange}
          onPassedChange={handlePassedChange}
          addRowToList={handleAddRow}
        />
        <DataResult listing={listing} removeItem={removeItem} />
      </div>
    </div>
  );
}

export default App;