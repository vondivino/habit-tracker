import React from 'react';
import { Badge, ListGroup } from 'react-bootstrap';

import PropTypes from 'prop-types';

const Footer = ({ activities }) => {
    const totalActivties = activities.length;

    return (
        <ListGroup.Item>
            <Badge variant="primary">
                Total Activities: { totalActivties }
             </Badge>
            <Badge variant="warning">
                Unfinished: 3
            </Badge>
            <Badge variant="success">
                Done: 2
            </Badge>
        </ListGroup.Item>
    )
}

Footer.propTypes = {
    activities: PropTypes.array.isRequired,
}

export default Footer;