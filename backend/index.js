import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

// Get current directory path for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());

const dbPath = path.join(__dirname, 'db.json');

// Read db.json
const readDB = () => {
  try {
    const data = fs.readFileSync(dbPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return { resume: [], downloads: [] };
  }
};

// Write to db.json
const writeDB = (data) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

// Add Resume
app.post('/resume', (req, res) => {
  try {
    const resumeData = req.body;
    const db = readDB();
    
    // Add unique ID to resume
    const newResume = {
      id: Date.now(),
      ...resumeData,
      createdAt: new Date().toISOString()
    };
    
    db.resume.push(newResume);
    writeDB(db);
    
    res.status(201).json({
      message: 'Resume added successfully',
      resume: newResume
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error adding resume',
      error: error.message
    });
  }
});

// Get all resumes
app.get('/resume', (req, res) => {
  try {
    const db = readDB();
    res.status(200).json(db.resume);
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching resumes',
      error: error.message
    });
  }
});

// Get resume by ID
app.get('/resume/:id', (req, res) => {
  try {
    const db = readDB();
    const resume = db.resume.find(r => r.id == req.params.id);
    
    if (!resume) {
      return res.status(404).json({ message: 'Resume not found' });
    }
    
    res.status(200).json(resume);
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching resume',
      error: error.message
    });
  }
});

// Delete resume
app.delete('/resume/:id', (req, res) => {
  try {
    const db = readDB();
    const index = db.resume.findIndex(r => r.id == req.params.id);
    
    if (index === -1) {
      return res.status(404).json({ message: 'Resume not found' });
    }
    
    const deletedResume = db.resume.splice(index, 1);
    writeDB(db);
    
    res.status(200).json({
      message: 'Resume deleted successfully',
      resume: deletedResume
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error deleting resume',
      error: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
