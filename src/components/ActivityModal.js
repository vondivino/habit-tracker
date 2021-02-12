import React from 'react';

import { Modal, Button} from 'react-bootstrap';

import PropTypes from 'prop-types';

const ActivityModal = ({ 
    name, 
    show, 
    handleClose, 
    handleDelete 
}) => (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Delete { name }?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Are you sure you want to delete { name }? 
            This process cannot be undone.
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={ handleClose }>
                Close
            </Button>
            <Button variant="danger" onClick={ handleDelete }>
                Delete
                </Button>
        </Modal.Footer>
    </Modal>
)

ActivityModal.propTypes = {
    name: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
}

export default ActivityModal;