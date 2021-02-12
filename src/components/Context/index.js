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
        ],
        done: [],
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

    /* 
    This event handler takes in the index of the activity and
    remove to the activitites list. Then, that activity will be addded
    to the done bin.

    This will be handled by Activity.js
    */
    handleDoneActivity = (index) => {
        const activities = this.state.activities;
        const updatedActivities = activities.filter((item, i) => index !== i);

        const doneActivity = activities[index];
        this.setState(prevState => ({  
            activities: updatedActivities,
            done: prevState.done.concat(doneActivity)
        }))
    }

    /* 
    This event handler takes in the index of the activity and
    remove to the activitites list. Then, a modal will popout
    to confirm deletion.

    This will be handled by ActivityModal.js
    */
    handleDeleteActivity = (index) => {
        this.setState(prevState => ({
            activities: prevState.activities.filter((item, i) => index !== i)
        }))
    }

    render() {
        return (
            <HabitTrackerContext.Provider value={{
                activities: this.state.activities,
                done: this.state.done,
                actions: {
                    addActivity: this.handleAddActivity,
                    doneActivity: this.handleDoneActivity,
                    deleteActivity: this.handleDeleteActivity
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