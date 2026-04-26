import { loginUser, logoutUser, getCurrentUser } from '@/api'

const user = {
	//state
	state() {
		return {
			userObject: null,
			userLoading: false,
		}
	},

	//mutations czyli setters
	mutations: {
		SET_CURRENT_USER(state, userObject) {
			state.userObject = userObject
		},
		SET_CURRENT_LOADING(state, loading) {
			state.promotionsLoading = loading
		},
		SET_USER_ERROR(state, error) {
			state.promotionsError = error
		},
	},

	//getters
	getters: {
		GET_CURRENT_USER(state) {
			return state.userObject
		},
		GET_CURRENT_LOADING(state) {
			return state.promotionsLoading
		},
		GET_USER_ERROR(state) {
			return state.promotionsError
		},
	},

	// tu zapytania do serwera z pomocą naszego api
	actions: {



        
    }
}

export default user
