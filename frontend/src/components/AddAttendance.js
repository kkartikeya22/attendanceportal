import React, { useState } from 'react';
import axios from 'axios';

function AddAttendance() {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://attendanceportal-2.onrender.com/api/attendance', { name, status })
      .then(response => {
        console.log(response.data);
        setName('');
        setStatus('');
      })
      .catch(error => console.error(error));
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', background: '#f9f9f9', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Add Attendance</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          style={{ margin: '10px 0', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
        />
        <input
          type="text"
          placeholder="Status"
          value={status}
          onChange={e => setStatus(e.target.value)}
          required
          style={{ margin: '10px 0', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
        />
        <button type="submit" style={{ backgroundColor: '#0A369D', color: '#fff', border: 'none', borderRadius: '4px', padding: '10px', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
  );
}

export default AddAttendance;
