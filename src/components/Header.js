import React from 'react';
import {
    Jumbotron,
    Container,
    Badge
} from 'react-bootstrap';

import PropTypes from 'prop-types';

const Header = ({ title, activities }) => {
    const totalActivties = activities.length;


    return (
        <Jumbotron fluid>
            <Container style={{ textAlign:'center' }}>
                <h1>{ title }</h1>
                <div>
                    <Badge variant="primary">Total Activities: { totalActivties }</Badge>
                </div>
                <div>
                    <Badge variant="warning">Unfinished: 3</Badge>
                </div>
                <div>
                    <Badge variant="success">Done: 2</Badge>
                </div>
            </Container>
        </Jumbotron>
    )
}

Header.propTypes = {
    activities: PropTypes.array.isRequired,
    title: PropTypes.string
}

Header.defaultProps = {
    title: 'Habit Tracker'
}

export default Header;