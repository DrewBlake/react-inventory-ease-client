import {CHECK_LOGIN_SUCCESS, LOG_OUT, 
	GET_ALL_VEHICLES_SUCCESS, GET_VEHICLE_ID_SUCCESS,
	SHOW_ERROR, CHECK_LOGIN_ERROR, GET_VEHICLE_ID_ERROR,
	RESET_ERROR, ADD_VEHICLE_MESSAGE, 
	SIGN_UP_SUCCESS} from './actions';

const initialState = {
	signUpError: '',
	errorMessage: '',
	message: '',
	validUser: false,
	vehicles: [],
	singleVehicle: {},
	validVehicleId: false,
	isShow: false,
	authToken: null
};

export default (state = initialState, action) => {
	

	if (action.type === CHECK_LOGIN_SUCCESS) {
			return Object.assign({}, state, {
				validUser: true,
				errorMessage: '',
				signUpError: '',
				authToken: action.authToken
			});
	}

	if (action.type === CHECK_LOGIN_ERROR) {
		return Object.assign({}, state, {
			errorMessage: action.message
		});
	}

	if (action.type === SHOW_ERROR) {
		return Object.assign({}, state, {
			signUpError: action.error
		});
	}

	if (action.type === SIGN_UP_SUCCESS) {
		return Object.assign({}, state, {
			signUpError: 'Sign Up Successful! Return to home page to sign in.',
			errorMessage: ''
		});
	}

	if (action.type === RESET_ERROR) {
		return Object.assign({}, state, {
			errorMessage: ''
		});
	}


	if (action.type === ADD_VEHICLE_MESSAGE) {
		return Object.assign({}, state, {
			message: action.message
		});
	}

	if (action.type === LOG_OUT) {
		return Object.assign({}, state, {
				validUser: false,
				authToken: null
			});
	}


	if (action.type === GET_ALL_VEHICLES_SUCCESS) {
		return Object.assign({}, state, {
			vehicles: action.vehicles,
			validVehicleId: false,
			errorMessage: '',
			isShow: true
		});
	}

	if (action.type === GET_VEHICLE_ID_SUCCESS) {
		return Object.assign({}, state, {
			singleVehicle: action.vehicle,
			validVehicleId: true,
			errorMessage: ''
		});
	}

	if (action.type === GET_VEHICLE_ID_ERROR) {
		return Object.assign({}, state, {
			validVehicleId: false,
			errorMessage: action.message
		});
	}


	return state;
		
};
