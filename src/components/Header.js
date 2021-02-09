import React from 'react';
import {
    Jumbotron,
    Container,
} from 'react-bootstrap';

import PropTypes from 'prop-types';

const Header = ({ title }) => {
    return (
        <Jumbotron fluid>
            <Container style={{ textAlign:'center' }}>
                <h1>{ title }</h1>
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