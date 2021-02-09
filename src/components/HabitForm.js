import React from 'react';

import { InputGroup, FormControl, Button } from 'react-bootstrap';

const HabitForm = (props) => {
    return (
        <InputGroup className="mb-3">
            <FormControl
                placeholder="Hey, be productive!"
                aria-label="Hey, be productive!"
            />
            <InputGroup.Append>
                <Button variant="primary">Do it!</Button>
            </InputGroup.Append>
        </InputGroup>
    )
}

export default HabitForm;

