import { combineReducers } from "redux";

const initialState = {
	sajekDummyData: {
		title: "sajek",
		details: "lorem-ipsum asdasdadsadka lalskdaldadk alsdkad",
		hotel1: {
			title: "asdaas asdadadad",
			guests: "adaadadadadada adadsa",
			kitchen: "adasdaadadad",
			additionalInfo: "asda adada asdadada",
			ratings: 4.5,
			price: "34$",
		},
		hotel2: {
			title: "asdaas asdadadad",
			guests: "adaadadadadada adadsa",
			kitchen: "adasdaadadad",
			additionalInfo: "asda adada asdadada",
			ratings: 4.5,
			price: "34$",
		},
		hotel3: {
			title: "asdaas asdadadad",
			guests: "adaadadadadada adadsa",
			kitchen: "adasdaadadad",
			additionalInfo: "asda adada asdadada",
			ratings: 4.5,
			price: "34$",
		},
	},

	sreemangalDummyData: {
		title: "sreemangal",
		details: "lorem-ipsum asdasdadsadka lalskdaldadk alsdkad",
		hotel1: {
			title: "asdaas asdadadad",
			guests: "adaadadadadada adadsa",
			kitchen: "adasdaadadad",
			additionalInfo: "asda adada asdadada",
			ratings: 4.5,
			price: "34$",
		},
		hotel2: {
			title: "asdaas asdadadad",
			guests: "adaadadadadada adadsa",
			kitchen: "adasdaadadad",
			additionalInfo: "asda adada asdadada",
			ratings: 4.5,
			price: "34$",
		},
		hotel3: {
			title: "asdaas asdadadad",
			guests: "adaadadadadada adadsa",
			kitchen: "adasdaadadad",
			additionalInfo: "asda adada asdadada",
			ratings: 4.5,
			price: "34$",
		},
	},
	sundarbanDummyData: {
		title: "sundarban",
		details: "lorem-ipsum asdasdadsadka lalskdaldadk alsdkad",
		hotel1: {
			title: "asdaas asdadadad",
			guests: "adaadadadadada adadsa",
			kitchen: "adasdaadadad",
			additionalInfo: "asda adada asdadada",
			ratings: 4.5,
			price: "34$",
		},
		hotel2: {
			title: "asdaas asdadadad",
			guests: "adaadadadadada adadsa",
			kitchen: "adasdaadadad",
			additionalInfo: "asda adada asdadada",
			ratings: 4.5,
			price: "34$",
		},
		hotel3: {
			title: "asdaas asdadadad",
			guests: "adaadadadadada adadsa",
			kitchen: "adasdaadadad",
			additionalInfo: "asda adada asdadada",
			ratings: 4.5,
			price: "34$",
		},
	},
	user: {
		isSignedIn: false,
	},
};

const user = (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_USER":
			return action.payload;
		default:
			return state;
	}
};

export default combineReducers({
	user,
});
