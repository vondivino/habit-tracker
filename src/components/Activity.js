import React from 'react';
import { ListGroup } from 'react-bootstrap';

import PropTypes from 'prop-types';

const Activity = ({ name }) => {
    return (
        <ListGroup.Item>
            { name }
        </ListGroup.Item>
    )
}

Activity.propTypes = {
    name: PropTypes.string.isRequired
}

export default Activity;