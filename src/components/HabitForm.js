import React from 'react';
import PropTypes from 'prop-types';

import { 
    InputGroup, 
    FormControl, 
    Button, 
    Form 
} from 'react-bootstrap';

const HabitForm = ({ addActivity }) => {

    const activityInput = React.createRef();

    const handleForm = (e) => {
        e.preventDefault();
        console.log(true)
        addActivity(activityInput.current.value);
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
}

HabitForm.propTypes = {
    addActivity: PropTypes.func.isRequired
}

export default HabitForm;

