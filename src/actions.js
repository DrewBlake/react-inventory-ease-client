export const SIGN_UP = 'SIGN_UP';
export const signUp = (firstName, lastName, username, password) => ({
	type: SIGN_UP,
	firstName,
	lastName,
	username,
	password
});

export const CHECK_LOGIN = 'CHECK_LOGIN';
export const checkLogIn = (username, password) => ({
    type: CHECK_LOGIN,
    username,
    password
});

export const LOG_OUT = 'LOG_OUT';
export const logOut = () => ({
	type: LOG_OUT
});

export const DELETE_VEHICLE = 'DELETE_VEHICLE';
export const deleteVehicle = (id) => ({
	type: DELETE_VEHICLE,	
	id
});

export const UPDATE_VEHICLE = 'UPDATE_VEHICLE';
export const updateVehicle = (id, mileage, parkingSpace) => ({
	type: UPDATE_VEHICLE,
	id,
	mileage,
	parkingSpace
});

export const ADD_VEHICLE = 'ADD_VEHICLE';
export const addVehicle = (year, make, model, mileage, parkingSpace, id, isNew) => ({
	type: ADD_VEHICLE,
	year,
	make,
	model,
	mileage,
	parkingSpace,
	id,
	isNew
});