import {API_BASE_URL} from './config';

export const normalizeResponseErrors = res => {
    if (!res.ok) {
        if (
            res.headers.has('content-type') &&
            res.headers.get('content-type').startsWith('application/json')
        ) {
            // It's a nice JSON error returned by us, so decode it
            return res.json().then(err => Promise.reject(err));
        }
        // It's a less informative error returned by express
        return Promise.reject({
            code: res.status,
            message: res.statusText
        });
    }
    return res;
};

export const SHOW_ERROR = 'SHOW_ERROR';
export const showError = (error) => ({
	type: SHOW_ERROR,
	error
});

export const RESET_ERROR = 'RESET_ERROR';
export const resetError = () => ({
	type: RESET_ERROR
});

export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const signUpSuccess = () => ({
	type: SIGN_UP_SUCCESS
});

export const signUp = (user) => (dispatch) => {
	return fetch(`${API_BASE_URL}/users`, {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(user)

	})
	.then(res => normalizeResponseErrors(res))
	.then((res) => {
		if (!res.ok) {
			console.log(res.json());
			return Promise.reject(res.statusText);
		}
		return dispatch(signUpSuccess());
	}).catch((error) => {
		const {message} = error;
		dispatch(showError(message));
	});
};

export const CHECK_LOGIN_SUCCESS = 'CHECK_LOGIN_SUCCESS';
export const checkLogInSuccess = (authToken) => ({
	type: CHECK_LOGIN_SUCCESS,
	authToken
});

export const CHECK_LOGIN_ERROR = 'CHECK_LOGIN_ERROR';
export const checkLogInError = (message) => ({
	type: CHECK_LOGIN_ERROR,
	message
});


export const checkLogIn = (user) => (dispatch) => {
    return fetch(`${API_BASE_URL}/auth/login`, {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(user)
	})
	.then(res => res.json())	
	.then(res => {	
		dispatch(checkLogInSuccess(res.authToken));
	})
	.catch((error) => {
		const message = 'Incorrect Username or Password';
		dispatch(checkLogInError(message));
	});
    
};

export const LOG_OUT = 'LOG_OUT';
export const logOut = () => ({
	type: LOG_OUT
});


export const deleteVehicle = (id) => (dispatch, getState) => {
	const authToken = getState().authToken;
	fetch(`${API_BASE_URL}/vehicles/${id}`, {
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${authToken}`
		}
	}).then((res) => {
		if (!res.ok) {
			return Promise.reject(res.statusText);
		}
		return dispatch(getAllVehicles());
	});
};


export const updateVehicle = (updateInfo) => (dispatch, getState) => {
	const authToken = getState().authToken;
	return fetch(`${API_BASE_URL}/vehicles/${updateInfo.id}`, {
		method: 'PUT',
		headers: {
			Authorization: `Bearer ${authToken}`,
			'content-type': 'application/json'
		},
		body: JSON.stringify(updateInfo)
	}).then((res) => {
		if (!res.ok) {
			return Promise.reject(res.statusText);
		}
		const message1 = 'Vehicle updated successfully!'
		dispatch(checkLogInError(message1));
	}).then(() => {
		dispatch(getAllVehicles())
	}).catch((error) => {
		const message = 'Parking space taken! Check vehicle location.';
		dispatch(showError(message));
	});
};

export const ADD_VEHICLE_MESSAGE = 'ADD_VEHICLE_SUCCESS';
export const addVehicleMessage = (message) => ({
	type: ADD_VEHICLE_MESSAGE,
	message
});

export const ADD_SUCCESS_MESSAGE = 'ADD_SUCCESS_MESSAGE';
export const addSuccessMessage = (message) => ({
	type: ADD_SUCCESS_MESSAGE,
	message
});

export const addVehicle = (vehicle) => (dispatch, getState) => {
	const authToken = getState().authToken;
	return fetch(`${API_BASE_URL}/vehicles`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${authToken}`,
			'content-type': 'application/json'
		},
		body: JSON.stringify(vehicle)
	}).then((res) => {
		if (!res.ok) {
			return Promise.reject(res.statusText);
		}
		const message1 = 'Vehicle added successfully!';
		dispatch(addSuccessMessage(message1));
	}).then(() => {
		dispatch(getAllVehicles());	
	}).catch((error) => {
		const message = 'Parking space taken, choose another space.';
		dispatch(addVehicleMessage(message));
	});
};


export const GET_ALL_VEHICLES_ERROR = 'GET_ALL_VEHICLES_ERROR';
export const getAllVehiclesError = (error) => ({
	type: GET_ALL_VEHICLES_ERROR,
	error
});

export const GET_ALL_VEHICLES_SUCCESS = 'GET_ALL_VEHICLES_SUCCESS';
export const getAllVehiclesSuccess = (vehicles) => ({
	type: GET_ALL_VEHICLES_SUCCESS,
	vehicles
});


export const getAllVehicles = () => (dispatch, getState) => {
	const authToken = getState().authToken;
	fetch(`${API_BASE_URL}/vehicles`, {
		method: 'GET',
		headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }	
	}).then((res) => {
		if (!res.ok) {
			return Promise.reject(res.statusText);
		}
		return res.json();
	}).then((vehicles) => {
		dispatch(getAllVehiclesSuccess(vehicles));
	}).catch((error) => {
		dispatch(getAllVehiclesError(error));
	});

};

export const GET_VEHICLE_ID_ERROR = 'GET_VEHICLE_ID_ERROR';
export const getVehicleIdError = (message) => ({
	type: GET_VEHICLE_ID_ERROR,
	message
});

export const GET_VEHICLE_ID_SUCCESS = 'GET_VEHICLE_ID_SUCCESS';
export const getVehicleIdSuccess = (vehicle) => ({ 
	type: GET_VEHICLE_ID_SUCCESS,
	vehicle
});


export const getVehicleId = (id) => (dispatch, getState) => {
	const authToken = getState().authToken; 
	fetch(`${API_BASE_URL}/vehicles/${id}`, {
		method: 'GET',
		headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }	
	}).then((res) => {
		if (!res.ok) {
			return Promise.reject(res.statusText);
		}
		return res.json();
	}).then((vehicle) => {
		dispatch(getVehicleIdSuccess(vehicle));
	}).catch((error) => {
		const message = 'Enter valid Id'
		dispatch(getVehicleIdError(message));
	});
};