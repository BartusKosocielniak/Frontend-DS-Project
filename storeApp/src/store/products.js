import { getProducts } from '@/api'
import { createLogger } from 'vuex'
const products = {
	//state
	state() {
		return {
			productsList: [],
			productsLoading: false,
			productsError: null,
		}
	},

	//mutations czyli setters
	mutations: {
		SET_PRODUCTS_LIST(state, newProducts) {
            console.log("pis pis pisss");
            console.log(newProducts);
			state.productsList = newProducts
		},
		SET_PRODUCTS_LOADING(state, loading) {
			state.productsLoading = loading
		},
		SET_PRODUCTS_ERROR(state, error) {
			state.productsError = error
		},
	},

	//getters
	getters: {
		GET_PRODUCTS_LIST(state) {
			return state.productsList
		},
		GET_PRODUCTS_LOADING(state) {
			return state.productsLoading
		},
		GET_PRODUCTS_ERROR(state) {
			return state.productsError
		},
	},

	// tu zapytania do serwera z pomocą naszego api
	actions: {
		FETCH_PRODUCTS({ state, commit }) {
			// najpierw ustawiamy stan ładowania na true (czyli dane się ładują, teraz mógłby się pokazywać loader)

			commit('SET_PRODUCTS_LOADING', true)

			// potem wywołujemy funkcję z api, która
			// odbiera dane z serwera (poprzez axios) i ustawia listę promocji w store
			// w razie błędu ustawia error w store (catch)
			// niezależnie od błędu lub jego braku (finally), kończy loading

			getProducts()
				.then(data => {
					commit('SET_PRODUCTS_LIST', data)
				})
				.catch(error => {
					commit('SET_PRODUCTS_ERROR', 'server error!!!' + error)
					console.log(error)
				})
				.finally(() => {
					console.log('kocham PIS')
					commit('SET_PRODUCTS_LOADING', false)
				})
		},
	},
}

export default products
