// Entry point for backend server
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoint for diet plans (optional - for future enhancement)
app.get('/api/plan', (req, res) => {
  const plans = {
    loss: {
      calories: 1800,
      diet: ["Oats & Fruits", "Salad + Roti", "Healthy Soup + Veggies"],
      tips: ["Drink more water", "Avoid sugar", "Do cardio daily"]
    },
    gain: {
      calories: 2800,
      diet: ["Milk + Banana", "Rice + Chicken", "Paneer + Chapati"],
      tips: ["Eat more protein", "Strength training", "Eat frequently"]
    },
    maintain: {
      calories: 2200,
      diet: ["Bread + Eggs", "Dal + Rice", "Balanced Meal"],
      tips: ["Balanced diet", "Regular exercise", "Sleep well"]
    }
  };
  res.json(plans);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
