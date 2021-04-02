import React, { FC } from 'react';
import { Modal } from 'react-bootstrap';

interface MessageBoxProps {
  show: boolean;
  completeMsg: string;
  onHide: () => void;
}

export const MessageBox: FC<MessageBoxProps> = (props) => {
  const { show, completeMsg, onHide } = props;
  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title>Random Fact</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{completeMsg}</p>
      </Modal.Body>
    </Modal>
  );
};
