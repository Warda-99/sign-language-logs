import React, { useState, useEffect } from 'react';
import './logListStyle.css';

const data = [
  {
    "id": 1,
    "date": "2024-01-03T12:30:00Z",
    "descriptionPolish": "Przykładowy opis po polsku 1",
    "descriptionEnglish": "Sample description in English 1",
    "img": "hand1.png"
  },
  {
    "id": 2,
    "date": "2024-01-04T14:45:00Z",
    "descriptionPolish": "Przykładowy opis po polsku 2",
    "descriptionEnglish": "Sample description in English 2",
    "img": "hand2.png"
  },
  {
    "id": 3,
    "date": "2024-01-04T14:55:00Z",
    "descriptionPolish": "Przykładowy opis po polsku 3",
    "descriptionEnglish": "Sample description in English 3",
    "img": "hand3.png"
  },
  {
    "id": 4,
    "date": "2024-01-04T14:55:00Z",
    "descriptionPolish": "Przykładowy opis po polsku 4",
    "descriptionEnglish": "Sample description in English 4",
    "img": "hand1.png"
  },
  {
    "id": 5,
    "date": "2024-01-04T14:55:00Z",
    "descriptionPolish": "Przykładowy opis po polsku 5",
    "descriptionEnglish": "Sample description in English 5",
    "img": "hand2.png"
  },
  {
    "id": 6,
    "date": "2024-01-04T14:55:00Z",
    "descriptionPolish": "Przykładowy opis po polsku 6",
    "descriptionEnglish": "Sample description in English 6",
    "img": "hand3.png"
  },
  {
    "id": 7,
    "date": "2024-01-04T14:55:00Z",
    "descriptionPolish": "Przykładowy opis po polsku 7",
    "descriptionEnglish": "Sample description in English 7",
    "img": "hand1.png"
  }
];

const LogList = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    // Ustawianie danych bez pobierania ich z zewnętrznego źródła
    setLogs(data);
  }, []);

  return (
    <div className='logsBody'>
      <h1>Logs</h1>
      {logs.map(log => (
        <div key={log.id} className='logContainer'>
          <div className='dateContainer'>{new Date(log.date).toLocaleString()}</div>
          <div className='log2'>
            <img src={require(`./images/${log.img}`)} alt="" className='logImg'/>
            <div className=''>
              <p>Polski: {log.descriptionPolish}</p>
              <p>English: {log.descriptionEnglish}</p>
            </div>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default LogList;
