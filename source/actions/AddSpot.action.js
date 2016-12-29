var addSpotAction = function(text) {
    console.log('Add spot action: ' + text);
    
    return {
        type: 'ADD_SPOT',
        spot: { text: text }
    }
}

module.exports = addSpotAction;
