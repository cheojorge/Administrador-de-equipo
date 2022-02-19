import React, { useContext, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { myContext } from '../context/myContext';
export const ModalDelete = () => {
    const {show,handleClose,handleYes,playerDelete} = useContext(myContext)
    

    
    return (
        <div>
            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>DELETE PLEYER</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Are you sure you want to delete the player? {playerDelete.name} - {playerDelete.position} 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleYes} variant="primary">Confirm</Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}
