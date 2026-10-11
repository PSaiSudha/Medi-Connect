const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Database Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/mediconnect', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Doctors API Route
app.get('/api/doctors', (req, res) => {
    res.json([
        { id: 1, name: "Dr. Ramesh", specialization: "Cardiologist", location: "Hyderabad" },
        { id: 2, name: "Dr. Priya", specialization: "Dentist", location: "Bangalore" }
    ]);
});

app.listen(5000, () => console.log("Server running on port 5000"));