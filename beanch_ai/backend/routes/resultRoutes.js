import express from 'express';

const router = express.Router();

// In-memory results storage (replace with a database in production)
const results = [];

// Submit test result
router.post('/', (req, res) => {
  const newResult = {
    id: Date.now().toString(),
    ...req.body,
    submittedAt: new Date()
  };
  results.push(newResult);
  res.status(201).json(newResult);
});

// Get user's results
router.get('/my-results', (req, res) => {
  // In a real app, you would get the user ID from the authenticated session
  const userId = req.query.userId;
  const userResults = results.filter(r => r.userId === userId);
  res.json(userResults);
});

// Get result by ID
router.get('/:id', (req, res) => {
  const result = results.find(r => r.id === req.params.id);
  if (!result) {
    return res.status(404).json({ message: 'Result not found' });
  }
  res.json(result);
});

// Get analytics
router.get('/analytics/performance', (req, res) => {
  // In a real app, you would get the user ID from the authenticated session
  const userId = req.query.userId;
  const userResults = results.filter(r => r.userId === userId);

  // Calculate performance metrics
  const analytics = {
    totalTests: userResults.length,
    averageScore: userResults.reduce((acc, curr) => acc + curr.score, 0) / userResults.length || 0,
    improvements: calculateImprovements(userResults),
    timeline: generateTimeline(userResults)
  };

  res.json(analytics);
});

// Helper functions for analytics
function calculateImprovements(results) {
  // Add your improvement calculation logic here
  return {
    accuracy: '+15%',
    speed: '+20%',
    consistency: '+10%'
  };
}

function generateTimeline(results) {
  // Add your timeline generation logic here
  return results.map(r => ({
    date: r.submittedAt,
    score: r.score
  })).sort((a, b) => new Date(a.date) - new Date(b.date));
}

export default router;
