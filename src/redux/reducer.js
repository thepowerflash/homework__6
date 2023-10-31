const initialState = {
    title: 'old title',
    menu: false,
    contactTitle: ''
}

export default function reducer (state = initialState, action) {
    if(action.type === 'CHANGE_TITLE') {
        return {title: 'new title'}
    }
    else if(action.type === "HANDLE_MENU" ) {
        return {menu: !state.menu}
    }
    else if(action.type === "WITH_PARAMS") {
        return {contactTitle: action.payload}
    }
    else if(action.type === "FROM_INPUT") {
        return {contactTitle: action.payload}
    }

    return state
}