import {CHECK_LOGIN, LOG_OUT, DELETE_VEHICLE, 
		UPDATE_VEHICLE, SIGN_UP, ADD_VEHICLE} from './actions';

const initialState = {
	users: [
		{
			userName: 'dBlake',
			password: 'MANG1974'
		},
		{
			userName: 'kStacy',
			password: 'KDIDDY1969'
		}
	],
	validUser: false,
	vehicles: [
		{
			id: '000aaa',
			year: 1996,
			make: 'acura',
			model: 'rl',
			mileage: '197,554 miles',
			isNew: false,
			parkingSpace: '22r'
		},
		{
			id: '001aaa',
			year: 2004,
			make: 'nissan',
			model: 'altima',
			mileage: '87,998 miles',
			isNew: false,
			parkingSpace: '9a'
		}
	]
};

export default (state = initialState, action) => {
	if (action.type === SIGN_UP) {
		console.log('sign up success');
	}

	if (action.type === CHECK_LOGIN) {
		
		const isValid = state.users.filter(user => {
			console.log(user.userName);
			console.log(action.username);
			return user.userName === action.username && user.password === action.password;
				
			
		});
		
		if (isValid[0]) {
			console.log('valid user');
			return Object.assign({}, state, {
				validUser: true
			});
		}

	}

	if (action.type === LOG_OUT) {
		return Object.assign({}, state, {
				validUser: false
			});
	}

	if (action.type === DELETE_VEHICLE) {
		const findId = state.vehicles.filter(vehicle => {
			console.log(vehicle.id);
			console.log(action.id);
			return vehicle.id === action.id;
		});
		console.log(findId);
		if(findId[0]) {
			console.log('deleted vehicle success');
		}
			
	}

	if (action.type === UPDATE_VEHICLE) {
		console.log('updated vehicle success');
	}

	if (action.type === ADD_VEHICLE) {
		console.log('vehicle added success');
	}

	return state;
		
};
