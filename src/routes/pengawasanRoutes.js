const express = require('express');
const router = express.Router();

// Mock database
let pengawasanRecords = [];

// Create a pengawasan record
router.post('/pengawasan', (req, res) => {
    const newRecord = req.body;
    pengawasanRecords.push(newRecord);
    res.status(201).json(newRecord);
});

// Read all pengawasan records
router.get('/pengawasan', (req, res) => {
    res.status(200).json(pengawasanRecords);
});

// Read a single pengawasan record by ID
router.get('/pengawasan/:id', (req, res) => {
    const { id } = req.params;
    const record = pengawasanRecords.find(r => r.id === id);
    if (record) {
        res.status(200).json(record);
    } else {
        res.status(404).json({ message: 'Record not found' });
    }
});

// Update a pengawasan record by ID
router.put('/pengawasan/:id', (req, res) => {
    const { id } = req.params;
    const recordIndex = pengawasanRecords.findIndex(r => r.id === id);
    if (recordIndex > -1) {
        pengawasanRecords[recordIndex] = { ...pengawasanRecords[recordIndex], ...req.body };
        res.status(200).json(pengawasanRecords[recordIndex]);
    } else {
        res.status(404).json({ message: 'Record not found' });
    }
});

// Delete a pengawasan record by ID
router.delete('/pengawasan/:id', (req, res) => {
    const { id } = req.params;
    pengawasanRecords = pengawasanRecords.filter(r => r.id !== id);
    res.status(204).send();
});

// Export endpoints
router.get('/export/pengawasan', (req, res) => {
    // Logic for exporting records (CSV, JSON, etc.)
    res.status(200).json(pengawasanRecords);
});

module.exports = router;