var addSpotReducer = function (state, action) {
    if (typeof state === 'undefined') {
        state = {
            spots: [
            {text: 'spot 1'},
            {text: 'spot 2'}
        ]};
    }
    
    if (action.type === 'ADD_SPOT') {
        //var newState = state.spots.push(action.spot);
        //return state;
        //var newState = Object.assign({}, state);
        //newState.spots.push(action.spot );
        var newState = { spots: [ action.spot ]};
        //var newState = state.spots.concat([action.spot]);
        return newState;
    }
    
    return state;
  
    /*state = state || {};
    
    console.log('Add spot reducer: ' + spot.text);
    
    switch (spot.type) {
        case 'ADD_SPOT':
            return {
                text: spot.text,
                completed: false
            }
        case 'DELETE_SPOT':
            console.log('do nothing');
        default:
            return state
    }*/
}

module.exports = addSpotReducer;
