const initialState = {
    token: " ",
    logedIn: false,
    user: {},
    FirstName: "",
    LastName: ""
}

function RootReducers(state = initialState, action) {
    switch(action.type) {

        case 'USER_AUTHENTIFICATION' :
            return { 
                ...state,
                token: action.data,
                logedIn: action.logedIn,
            }
        case 'USER_INPUT': 
            return {
                ...state,
                user: action.user
            }
        case 'FIRST_NAME':
            return {
                ...state,
                FirstName: action.FirstName
            }
        case 'LAST_NAME':
            return {
                ...state,
                LastName: action.LastName
            }
        default:
            return state
    }
}

export default RootReducers