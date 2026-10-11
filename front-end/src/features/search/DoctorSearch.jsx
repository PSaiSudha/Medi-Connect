import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DoctorSearch() {
    const [doctors, setDoctors] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/doctors')
            .then(res => setDoctors(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
            <h1 style={{ color: 'blue' }}>MediConnect - Find Your Doctor</h1>
            <input 
                type="text" 
                placeholder="Search specialization or location..." 
                style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div>
                {doctors.filter(doc => doc.specialization.toLowerCase().includes(search.toLowerCase())).map(doc => (
                    <div key={doc.id} style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '10px', borderRadius: '5px' }}>
                        <h3>{doc.name}</h3>
                        <p>Specialization: {doc.specialization}</p>
                        <p>Location: {doc.location}</p>
                        <button style={{ background: 'blue', color: 'white', padding: '5px 10px', border: 'none' }}>Book Slot</button>
                    </div>
                ))}
            </div>
        </div>
    );
}