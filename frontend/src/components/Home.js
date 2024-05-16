import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/attendance')
      .then(response => setAttendance(response.data))
      .catch(error => console.error(error));
  }, []);

  // Function to group attendance records by date
  const groupByDate = () => {
    const groupedAttendance = {};
    attendance.forEach(record => {
      const date = new Date(record.date).toLocaleDateString('en-GB');
      if (!groupedAttendance[date]) {
        groupedAttendance[date] = {};
      }
      groupedAttendance[date][record.name] = record.status;
    });
    return groupedAttendance;
  };

  // Function to generate random color for each date group
  const getRandomColor = () => {
    const colors = ['#FF5733', '#FFD700', '#C70039', '#0A369D', '#C4E538', '#FFC0CB', '#A9DFBF', '#ADD8E6']; // Additional colors
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div style={{ overflowX: 'auto', textAlign: 'center', background: '#222', color: '#fff', padding: '20px' }}>
      <h2 style={{ marginBottom: '20px' }}>Attendance List</h2>
      <div style={{ overflowX: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', display: 'inline-block' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: '8px', overflow: 'hidden', border: '1px solid #333' }}>
          <thead>
            <tr>
              <th style={{ padding: '15px', backgroundColor: '#333', borderBottom: '1px solid #555' }}></th>
              {Object.keys(groupByDate()).map((date, index) => (
                <th key={index} style={{ padding: '15px', backgroundColor: getRandomColor(), borderBottom: '1px solid #555', borderRight: '1px solid #555' }}>{date}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(attendance.reduce((acc, cur) => Object.assign(acc, { [cur.name]: true }), {})).map((name, index) => (
              <tr key={index} style={{ borderBottom: '1px solid #555' }}>
                <td style={{ padding: '15px', backgroundColor: '#333', textAlign: 'left', color: '#fff', fontWeight: 'bold' }}>{name}</td>
                {Object.entries(groupByDate()).map(([date, records]) => (
                  <td key={date} style={{ padding: '15px', textAlign: 'left', backgroundColor: '#f5f5f5', borderRight: '1px solid #555' }}>
                    <span style={{ color: records[name] === 'Present' ? '#4CAF50' : '#FF5733', fontWeight: 'bold' }}>{records[name] || 'Absent'}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
