import React, { Component } from 'react';

const HabitTrackerContext = React.createContext();

export class Provider extends Component {

    state = {
        activities: [
            {
                name: 'Do coding'
            },
            {
                name: 'Finish assigment'
            }
        ]
    }

    /* 
    This event handler takes in the name of the activity and
    added to the activitites list. 

    This will be handled by HabitForm.js
    */
    handleAddActivity = (name) => {
        this.setState(prevState => ({
            activities: prevState.activities.concat({ name })
        }))
    }

    render() {
        return (
            <HabitTrackerContext.Provider value={{
                activities: this.state.activities,
                actions: {
                    addActivity: this.handleAddActivity,
                }
            }}>
                {/* Children will be inserted here  */}
                {/* e.g. <App /> */}
                { this.props.children}
            </HabitTrackerContext.Provider>
        )
    }

};
export const Consumer = HabitTrackerContext.Consumer;