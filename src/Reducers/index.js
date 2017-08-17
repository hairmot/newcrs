import defaultData from '../data/defaultData';

if (!Array.prototype.findIndex) {
	Array.prototype.findIndex = function (predicate) {
		if (this === null) {
			throw new TypeError('Array.prototype.findIndex called on null or undefined');
		}
		if (typeof predicate !== 'function') {
			throw new TypeError('predicate must be a function');
		}
		const list = Object(this);
		const length = list.length >>> 0;
		const thisArg = arguments[1];
		let value;

		for (let i = 0; i < length; i++) {
			value = list[i];
			if (predicate.call(thisArg, value, i, list)) {
				return i;
			}
		}
		return -1;
	};
}

function Reducer(state = defaultData, action) {
	switch (action.type) {
		case 'updateInput' :
			var newState = Object.assign({}, state);
			var newScreen = Object.assign({}, newState[action.screen]);
			newScreen[action.item] = action.value;
			newState[action.screen] = newScreen;
			return newState;
		default:
			return state;
	}
}

export default Reducer;
