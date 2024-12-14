import styled from '@emotion/styled';

export const ExamContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #0a192f;
  font-family: 'Press Start 2P', cursive;
  color: #ffffff;
`;

export const StartButton = styled.button`
  padding: 10px 20px;
  background: #01b4e4;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
  font-family: 'Press Start 2P', cursive;
  &:hover {
    transform: scale(1.05);
  }
`;

export const ResumeButton = styled.button`
  padding: 10px 20px;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: transform 0.3s ease; 
  font-family: 'Press Start 2P', cursive;

  &:hover {
    transform: scale(1.05);
  }

  svg {
    margin-right: 5px;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3); 
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background-color: #0a192f;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 600px;
  color: #ffffff;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  text-align: center;
`;

export const ModalBody = styled.div`
  margin-bottom: 20px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SendButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Press Start 2P', cursive;
  background: linear-gradient(90deg, #ff00cc, #00ffe1);
  color: white;
  margin-right: 10px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

export const CloseButton = styled.button`
  background: #d32f2f;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px;
  transition: transform 0.3s ease;
  font-family: 'Press Start 2P', cursive;
  &:hover {
    transform: scale(1.05); 
  }
`;

export const Notification = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: #26d548;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  .notification-content {
    display: flex;
    align-items: center;
  }

  .icon {
    margin-right: 10px;
  }

  .message {
    font-size: 16px;
  }
`;

export const Timer = styled.div`
  font-size: 18px;
  text-align: center;
  margin-top: 10px;
  font-family: 'Press Start 2P', cursive;

  span {
    color: ${({ timeColor }) => timeColor};
  }
`;