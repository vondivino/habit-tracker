import React from 'react';

import {
    InputGroup,
    FormControl,
    Button,
    Form
} from 'react-bootstrap';

import { Consumer } from './Context';

const HabitForm = () => {

    const activityInput = React.createRef();

    return (
        <Consumer>
            { ({ actions }) => {

                const handleForm = (e) => {
                    e.preventDefault();
                    console.log(true)
                    actions.addActivity(activityInput.current.value);
                    e.currentTarget.reset();
                }

                return (
                    <Form onSubmit={ handleForm }>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Hey, be productive!"
                                aria-label="Hey, be productive!"
                                ref={ activityInput }
                            />
                            <InputGroup.Append>
                                <Button
                                    type="submit"
                                    variant="primary">
                                    Do it!
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form>
                )
            }}
        </Consumer>
    )
}

export default HabitForm;

