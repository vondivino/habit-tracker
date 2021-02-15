import React from 'react';

import Activity from './Activity';
import Footer from './Footer';
import { ListGroup } from 'react-bootstrap';

import { Consumer } from './Context';

const ActivityList = () => {
    return (
        <Consumer>
            { ({ activities, actions }) => {
                const startActivity = actions.startActivity;
                const deleteActivity = actions.deleteActivity;

                return (
                    <ListGroup variant="flush">
                        {activities.map((item, index) => {
                            return (
                                <Activity
                                    key={(index + 1).toString()}
                                    name={item.name}
                                    index={ index }
                                    isRunning={ item.isRunning }
                                    elapsedTime={ item.elapsedTime }
                                    startActivity={ startActivity }
                                    deleteActivity={ deleteActivity }
                                />
                            )
                        })}
                        <Footer />
                    </ListGroup>
                )
            }}
        </Consumer>
    )
}

export default ActivityList;