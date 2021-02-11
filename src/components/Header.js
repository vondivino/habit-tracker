import React from 'react';

import {
    Jumbotron,
    Container,
    Row,
    Col
} from 'react-bootstrap';

import HabitForm from './HabitForm';

import PropTypes from 'prop-types';

const Header = ({ title }) => {
    return (
        <Jumbotron fluid>
            <Container>
                <Row className="justify-content-md-center">
                    <h1>{ title }</h1>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs={6}>
                        <HabitForm />
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

Header.propTypes = {
    title: PropTypes.string
}

Header.defaultProps = {
    title: 'Habit Tracker'
}

export default Header;