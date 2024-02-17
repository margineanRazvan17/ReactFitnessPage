// Antrenamente.js

import React, { useState } from 'react';
import './Antrenamente.css';
import pers2Image from './pers2.jpg'; 

const Antrenamente = () => {
  const [trainings, setTrainings] = useState([
    {
      id: 1,
      customer: 'Zinzu',
      sport: 'Fitness',
      location: 'Brasov Hall',
      status: 'Available',
      type: 'Individual',
    },
    // ... alte date existente
  ]);

  const [formData, setFormData] = useState({
    customer: '',
    sport: '',
    location: '',
    status: '',
    type: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTraining = {
      id: trainings.length + 1,
      ...formData,
    };

    setTrainings([...trainings, newTraining]);
    setFormData({
      customer: '',
      sport: '',
      location: '',
      status: '',
      type: '',
    });
  };

  return (
    <div>
      <section className='antrenamente-section'>
        <h1> Trainings's Planner</h1>
      </section>
      <section className="antrenamente-table">
        <table className='table-style'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Sport</th>
              <th>Location</th>
              <th>Status</th>
              <th>Individual/Team</th>
            </tr>
          </thead>
          <tbody>
            {trainings.map((training) => (
              <tr key={training.id}>
                <td>{training.id}</td>
                <td>
                  <img src={pers2Image} alt={training.customer} />
                  {training.customer}
                </td>
                <td>{training.sport}</td>
                <td>{training.location}</td>
                <td>
                  <p className={`status ${training.status.toLowerCase()}`}>
                    {training.status}
                  </p>
                </td>
                <td>{training.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="add-training-form">
        <h2 className='color-border'>Add Training</h2>
        <form onSubmit={handleSubmit}>
          <label className='color-border'>
            Customer:
            <input
              type="text"
              name="customer"
              value={formData.customer}
              onChange={handleChange}
            />
          </label>
          <label className='color-border'>
            Sport:
            <input 
              type="text"
              name="sport"
              value={formData.sport}
              onChange={handleChange}
            />
          </label>
          <label className='color-border'>
            Location:
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </label>
          <label className='color-border'>
            Status:
            <input
              type="text"
              name="status"
              value={formData.status}
              onChange={handleChange}
            />
          </label>
          <label className='color-border'>
            Type (Individual/Team):
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Antrenamente;
