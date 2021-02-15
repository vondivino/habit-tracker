import React, { Component } from 'react';

const HabitTrackerContext = React.createContext();

export class Provider extends Component {

    state = {
        activities: [
            {
                name: 'Do coding',
                isRunning: false,
                elapsedTime: 0,
                prevTime: 0
            },
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

    /* 
    This event handler takes in the index of the activity and
    remove to the activitites list. Then, that activity will be addded
    to the done bin.

    This will be handled by Activity.js
    */
    handleStartActivity = (index) => {
        const activities = [...this.state.activities];
        const activity = activities[index]

        activity.isRunning = !activity.isRunning;
        activity.prevTime = Date.now();
        activities[index] = activity;
        this.setState({ 
            activties: activities
        })

               
    }

    tick = () => {
        let currentIndex; 
        const allActivities = [...this.state.activities];
        const activity = allActivities.filter( (item, index) => {
            currentIndex = index;
            return item.isRunning;
        });
        if (activity.length > 0) {
            const now = Date.now();
            activity[0].elapsedTime += (now - activity[0].prevTime)
            activity[0].prevTime = now;
            allActivities[currentIndex] = activity; 
            this.setState({ activties: allActivities })
        }
    }

    /* 
    This event handler takes in the index of the activity and
    remove to the activitites list. Then, a modal will popout
    to confirm deletion.

    This will be handled by ActivityModal.js
    */
    handleDeleteActivity = (index) => {
        const activities = [...this.state.activities];
        const activity = activities[index]

        this.setState(prevState => ({
            activities: prevState.activities.filter((item, i) => index !== i)
        }))
    }

    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 100)
    }

    render() {
        return (
            <HabitTrackerContext.Provider value={{
                activities: this.state.activities,
                done: this.state.done,
                actions: {
                    addActivity: this.handleAddActivity,
                    startActivity: this.handleStartActivity,
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