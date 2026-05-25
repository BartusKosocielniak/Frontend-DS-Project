import { getCategories } from "@/api"

const categories = {

    state() {
        return {
            categoriesList: [],
            categoriesLoading: false,
            categoriesError: null

        }
    },


	mutations: {
		SET_CATEGORIES_LIST(state, newCategories) {
            console.log(newCategories);
			state.categoriesList = newCategories
		},
		SET_CATEGORIES_LOADING(state, loading) {
			state.categoriesLoading = loading
		},
		SET_CATEGORIES_ERROR(state, error) {
			state.categoriesError = error
		},
	},

	//getters
	getters: {
		GET_CATEGORIES_LIST(state) {
			return state.categoriesList
		},
		GET_CATEGORIES_LOADING(state) {
			return state.categoriesLoading
		},
		GET_CATEGORIES_ERROR(state) {
			return state.categoriesError
		},
	},

	actions: {
		FETCH_CATEGORIES({ state, commit }) {
			commit('SET_CATEGORIES_LOADING', true)


			getCategories()
				.then(data => {
					commit('SET_CATEGORIES_LIST', data)
				})
				.catch(error => {
					commit('SET_CATEGORIES_ERROR', 'server error!!!' + error)
					console.log(error)
				})
				.finally(() => {
					commit('SET_CATEGORIES_LOADING', false)
				})
		},
	},
}

export default categories