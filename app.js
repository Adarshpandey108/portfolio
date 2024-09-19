const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize the app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.set('view engine', 'ejs');

// Database connection (replace with your MongoDB URI)
mongoose.connect('mongodb://localhost:27017/portfolioDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Routes
const projectRoutes = require('./routes/projects');
const blogRoutes = require('./routes/blogs');

app.use('/api/projects', projectRoutes);
app.use('/api/blogs', blogRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
