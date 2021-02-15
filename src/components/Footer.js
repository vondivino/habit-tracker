import React from 'react';

import { Badge, ListGroup } from 'react-bootstrap';

import { Consumer } from './Context';

const Footer = () => {
    
    return (
        <Consumer>
            { ({ activities }) => {

                const totalActivties = activities.length;
                // const totalDone = done.length;

                return (
                    <ListGroup.Item>
                        <Badge variant="primary">
                            {/* Total Activities: { totalActivties + totalDone } */}
                        </Badge>
                        <Badge variant="warning">
                            {/* Unfinished: { totalActivties } */}
                        </Badge>
                        <Badge variant="success">
                            {/* Done: { totalDone } */}
                        </Badge>
                    </ListGroup.Item>
                )
            }}
        </Consumer>
        
    )
}

export default Footer;