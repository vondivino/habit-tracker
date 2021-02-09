import React from 'react';

import {
    Jumbotron,
    Container,
    Badge
} from 'react-bootstrap';

const Header = () => {
    return (
        <Jumbotron fluid>
            <Container style={{ textAlign:'center' }}>
                <h1>Habit Tracker</h1>
                <div>
                    <Badge variant="primary">Total Activities: 5</Badge>
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

export default Header;