const express = require('express');
const router = express.Router();
const phones = require('../data/phones.json');

router.get('/', (req, res, next) => {
  res.json('All good in here');
});

router.get('/phones', (req, res) => {
  res.json(phones);
});

router.get('/phones/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const foundPhone = await phones.find((phone) => phone.id === Number(id));
    res.json(foundPhone);
  } catch (error) {
    res.json('No phone founded');
  }
});

module.exports = router;
