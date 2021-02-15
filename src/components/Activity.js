import React, { useState } from 'react';

import { 
    ListGroup, 
    ButtonGroup, 
    Button, 
    Row, 
    Col,
} from 'react-bootstrap';
import ActivityModal from './ActivityModal';

import PropTypes from 'prop-types';

const Activity = ({ 
    name, 
    index, 
    startActivity, 
    deleteActivity, 
    isRunning,
    elapsedTime 
}) => {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleDelete = (index) => {
        setShow(false)
        deleteActivity(index)
    } 

    return (
        <span>
        <ListGroup.Item>
            <Row>
                <Col>{ name }</Col>
                <Col>{ Math.floor(elapsedTime / 1000) } secs</Col>
                <Col xs lg={2} >
                    {/* Add actions to buttons */}
                    <ButtonGroup aria-label="Basic example">
                        <Button 
                        variant={ isRunning ? 'warning':'success'} 
                        onClick={ () => startActivity(index) }>
                        { isRunning ? 'Pause':'Start'}
                        </Button>
                        <Button 
                        variant="danger" 
                        onClick={handleShow}>
                        { isRunning ? 'Stop':'Delete'}
                         </Button>
                    </ButtonGroup>
                </Col>
            </Row>
        </ListGroup.Item>
        <ActivityModal
            name={ name }
            show={ show }
            handleClose={ handleClose }
            handleDelete={() => handleDelete(index) }
        />
        </span>
    )
}

Activity.propTypes = {
    name: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    elapsedTime: PropTypes.number.isRequired,
    doneActivity: PropTypes.func,
    deleteActivity: PropTypes.func,
}

export default Activity;