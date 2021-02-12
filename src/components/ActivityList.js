import React from 'react';

import Activity from './Activity';
import Footer from './Footer';
import { ListGroup } from 'react-bootstrap';

import { Consumer } from './Context';

const ActivityList = () => {
    return (
        <Consumer>
            { ({ activities, actions }) => {
                const doneActivity = actions.doneActivity;
                const deleteActivity = actions.deleteActivity;

                return (
                    <ListGroup variant="flush">
                        {activities.map((item, index) => {
                            return (
                                <Activity
                                    key={(index + 1).toString()}
                                    name={item.name}
                                    index={ index }
                                    doneActivity={ doneActivity }
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