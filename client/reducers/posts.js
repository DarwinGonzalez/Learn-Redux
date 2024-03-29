// A reducer take two things

// 1. The action (info about what happened)
// 2. Copy of the current state

function posts(state = [], action) {
    switch(action.type){
        case 'INCREMENT_LIKES':
            console.log("Incrementing likes...!");
            const i = action.index;
            // Return the updated state
            return [
                ...state.slice(0,i), // Before the one we are updating
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i + 1), //after the one we are updating
            ]

        default:
            return state;
    }
}

export default posts;