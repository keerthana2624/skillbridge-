const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');

// Import routes
const userRoutes = require('./routes/userRoutes');
const skillRoutes = require('./routes/skillRoutes');
const resourceRoutes = require('./routes/resourceRoutes');
const mentorshipRoutes = require('./routes/mentorshipRoutes');
const opportunityRoutes = require('./routes/opportunityRoutes');
const adminRoutes = require('./routes/adminRoutes');
const quizRoutes = require('./routes/quizRoutes');
const profileRoutes = require('./routes/profileRoutes');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(passport.initialize());
app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true }));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/resources', resourceRoutes);
app.use('/api/mentorship', mentorshipRoutes);
app.use('/api/opportunities', opportunityRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/profile', profileRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB connected");
  app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
})
.catch((err) => console.log(err));
