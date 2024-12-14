const express = require('express');
const router = express.Router();
const Question = require('../models/questions');

// Obtener todas las preguntas
router.get('/', async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtener 10 preguntas aleatorias
router.get('/random', async (req, res) => {
    try {
      const questions = await Question.aggregate([{ $sample: { size: 10 } }]);
      res.json(questions);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});
  
// Ruta para recibir las respuestas del usuario y validarlas
router.post('/submit', async (req, res) => {
    const userAnswers = req.body.answers; // Suponiendo que recibes un arreglo de respuestas del usuario
  
    try {
      const correctAnswers = await Question.find({ _id: { $in: userAnswers.map(ans => ans.questionId) } });
  
      // Comparar las respuestas del usuario con las correctas y generar el resultado
      const results = userAnswers.map(userAns => {
        const correctAns = correctAnswers.find(ans => ans._id.toString() === userAns.questionId);
        return {
          questionId: userAns.questionId,
          userAnswer: userAns.answer,
          correctAnswer: correctAns.correctAnswer,
          isCorrect: userAns.answer === correctAns.correctAnswer
        };
    });
  
      res.json(results);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});    

// Crear una nueva pregunta
router.post('/', async (req, res) => {
  const question = new Question({
    question: req.body.question,
    options: req.body.options,
    correctAnswer: req.body.correctAnswer
  });
  
  try {
    const newQuestion = await question.save();
    res.status(201).json(newQuestion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;