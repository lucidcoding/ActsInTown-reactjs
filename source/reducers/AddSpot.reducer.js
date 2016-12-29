const initialState = {
    spots: [
        {
            id: 0,
            text: 'spot 1'
        },
        {
            id: 1,
            text: 'spot 2'
        }
    ]
};

const addSpotReducer = function (state = initialState, action) {    
    if (action.type === 'ADD_SPOT') {
        var newState = {
            //spots: state.spots.concat([action.spot])
            spots: [ ...state.spots, action.spot]
        };

        return newState;
    }

    return state;
}

export default addSpotReducer;
