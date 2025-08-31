import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  ExamContainer,
  StartButton,
  ResumeButton,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter,
  SendButton,
  Notification,
  CloseButton,
  Timer
} from '../frontend/styles/exam.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faTimesCircle,
  faSadTear,
  faTrophy,
  faPlay,
  faPaperPlane,
  faTimes,
  faRedoAlt
} from '@fortawesome/free-solid-svg-icons';

const Exam = () => {
  const [showModal, setShowModal] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [timeLeft, setTimeLeft] = useState(15);
  const [score, setScore] = useState(0);
  const [examCompleted, setExamCompleted] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '', icon: null });
  const [examStarted, setExamStarted] = useState(false);
  const [resumeExamAvailable, setResumeExamAvailable] = useState(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [optionsDisabled, setOptionsDisabled] = useState(false);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/questions/random');
      setQuestions(response.data);
    } catch (error) {
      console.error('Error al cargar las preguntas:', error);
    }
  };

  const handleStartExam = () => {
    fetchQuestions();
    setShowModal(true);
    setExamStarted(true);
    setExamCompleted(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimeLeft(15);
    setResumeExamAvailable(false);
    setShowCorrectAnswer(false);
  };

  const handleResumeExam = () => {
    setShowModal(true);
    setExamStarted(true);
    setResumeExamAvailable(false);
    setShowCorrectAnswer(false);
  };

  const handleOptionSelect = (option) => {
    if (!optionsDisabled) {
      setSelectedOption(option);
    }
  };

  const handleSendAnswer = () => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    setShowCorrectAnswer(true);
    setOptionsDisabled(true);
    setTimeLeft(15);

    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setShowCorrectAnswer(false);
        setOptionsDisabled(false);
      }, 3000);
    } else {
      setTimeout(() => {
        setExamCompleted(true);
        setShowModal(false);
        showNotification();
        setResumeExamAvailable(true);
        setOptionsDisabled(false);
      }, 3000);
    }
  };

  const showNotification = () => {
    let message, icon;

    if (score >= 8) {
      message = 'Examen aprobado con éxito. ¡Felicidades!';
      icon = <FontAwesomeIcon icon={faTrophy} />;
    } else if (score >= 5) {
      message = 'Examen con calificación suficiente. ¡Bien hecho!';
      icon = <FontAwesomeIcon icon={faCheckCircle} />;
    } else if (score >= 1) {
      message = 'Examen no aprobado. Debes estudiar más.';
      icon = <FontAwesomeIcon icon={faTimesCircle} />;
    } else {
      message = 'Lamentablemente no aprobaste. Suerte para la próxima.';
      icon = <FontAwesomeIcon icon={faSadTear} />;
    }

    setNotification({ show: true, message, icon });
    setTimeout(() => {
      setNotification({ show: false, message: '', icon: null });
    }, 3000);
  };

  const getTimerColor = () => {
    if (timeLeft >= 8) return 'green';
    if (timeLeft >= 4) return 'yellow';
    return 'red';
  };

  useEffect(() => {
    let timer;
    if (showModal && timeLeft > 0 && !examCompleted && !showCorrectAnswer) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && !examCompleted && !showCorrectAnswer) {
      handleSendAnswer();
    }

    return () => clearTimeout(timer);
  }, [timeLeft, showModal, examCompleted, showCorrectAnswer]);

  useEffect(() => {
    const handleWindowClose = (event) => {
      if (examStarted && !examCompleted) {
        event.preventDefault();
        event.returnValue = '¿Seguro que quieres cerrar?';
        setResumeExamAvailable(true);
      }
    };

    window.addEventListener('beforeunload', handleWindowClose);

    return () => {
      window.removeEventListener('beforeunload', handleWindowClose);
    };
  }, [examStarted, examCompleted]);

  return (
    <ExamContainer>
      <div className="welcome-message">
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Bienvenido al Examen de Videojuegos</h1>
        <p style={{ textAlign: 'center', marginBottom: '20px' }}>Demuestra tus conocimientos sobre videojuegos contestando estas preguntas.</p>
      </div>
      {!examStarted && !examCompleted && (
        <StartButton onClick={handleStartExam}>
          <FontAwesomeIcon icon={faPlay} /> Iniciar Examen
        </StartButton>
      )}
      {examStarted && !examCompleted && (
        <ResumeButton onClick={handleResumeExam}>
          <FontAwesomeIcon icon={faRedoAlt} /> Reanudar Examen
        </ResumeButton>
      )}
      {examCompleted && (
        <StartButton onClick={handleStartExam}>
          <FontAwesomeIcon icon={faPlay} /> Iniciar Examen
        </StartButton>
      )}
      {showModal && questions.length > 0 && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Examen de Videojuegos</ModalTitle>
            </ModalHeader>
            <ModalBody>
              <p>Pregunta {currentQuestionIndex + 1}: {questions[currentQuestionIndex].question}</p>
              <ul>
                {questions[currentQuestionIndex].options.map((option, index) => (
                  <li key={index}>
                    <label>
                      <input
                        type="radio"
                        value={option}
                        checked={selectedOption === option}
                        onChange={() => handleOptionSelect(option)}
                        disabled={optionsDisabled}
                      />
                      {option}
                    </label>
                    {option === questions[currentQuestionIndex].correctAnswer && showCorrectAnswer && (
                      <span style={{ color: '#26d548', marginLeft: '10px' }}>(Correcta)</span>
                    )}
                  </li>
                ))}
              </ul>
            </ModalBody>
            <ModalFooter>
              <SendButton onClick={handleSendAnswer} disabled={!selectedOption || optionsDisabled}>
                <FontAwesomeIcon icon={faPaperPlane} /> Enviar Respuesta
              </SendButton>
              <CloseButton onClick={() => setShowModal(false)}>
                <FontAwesomeIcon icon={faTimes} /> Cerrar
              </CloseButton>
            </ModalFooter>
            <Timer timeColor={getTimerColor()}>
              Tiempo restante: <span style={{ color: getTimerColor() }}>{timeLeft}</span> segundos
            </Timer>
          </ModalContent>
        </ModalOverlay>
      )}
      {notification.show && (
        <Notification>
          <div className="notification-content">
            <div className="icon">{notification.icon}</div>
            <div className="message">{notification.message}</div>
          </div>
        </Notification>
      )}
    </ExamContainer>
  );
};

export default Exam;