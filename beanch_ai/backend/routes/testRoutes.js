import express from 'express';

const router = express.Router();

// In-memory test storage (replace with a database in production)
const tests = [];

// Get all tests
router.get('/', (req, res) => {
  res.json(tests);
});

// Get test by ID
router.get('/:id', (req, res) => {
  const test = tests.find(t => t.id === req.params.id);
  if (!test) {
    return res.status(404).json({ message: 'Test not found' });
  }
  res.json(test);
});

// Create new test
router.post('/', (req, res) => {
  const newTest = {
    id: Date.now().toString(),
    ...req.body,
    createdAt: new Date()
  };
  tests.push(newTest);
  res.status(201).json(newTest);
});

export default router;
