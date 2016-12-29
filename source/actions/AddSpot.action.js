let nextId = 2;

export const addSpotAction = function(text) {
    return {
        type: 'ADD_SPOT',
        spot: { 
            id: nextId++,
            text: text 
        }
    };
}
