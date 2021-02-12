import React from 'react';
import { ListGroup, ButtonGroup, Button, Row, Col } from 'react-bootstrap';

import PropTypes from 'prop-types';

const Activity = ({ name }) => {
    return (
        <ListGroup.Item>
            <Row>
                <Col>{ name }</Col>
                <Col xs lg={2} >
                    {/* Add actions to buttons */}
                    <ButtonGroup aria-label="Basic example" className="justif">
                        <Button variant="success">Done</Button>
                        <Button variant="danger">Delete</Button>
                    </ButtonGroup>
                </Col>
            </Row>
        </ListGroup.Item>
    )
}

Activity.propTypes = {
    name: PropTypes.string.isRequired
}

export default Activity;