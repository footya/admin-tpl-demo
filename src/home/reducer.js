export default function(state = {
	pageName: 'index'
}, action) {
	switch (action.type) {
		case 'HOME_INIT':
			return {...state,
				pageName: 'home'
			};
		default:
			return state;
	}
}