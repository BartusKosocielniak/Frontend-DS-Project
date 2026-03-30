import { getPromotion, getProduct } from "@/api"

const promotion = {

    //state
    state() {

        return {
            promotionObject: {},
            promotionLoading: false,
            promotionError: null
        }
    },

    //mutations czyli setters
    mutations: {
        SET_PROMOTION_OBJECT(state, newPromotionObject) {
            state.promotionObject = newPromotionObject
        },
        SET_PROMOTIONS_LOADING(state, loading) {
            state.promotionsLoading = loading
        },
        SET_PROMOTIONS_ERROR(state, error) {
            state.promotionsError = error
        }
    },

    //getters
    getters: {
        GET_PROMOTION_OBJECT(state) {
            return state.promotionObject
        },
        GET_PROMOTIONS_LOADING(state) {
            return state.promotionsLoading
        },
        GET_PROMOTIONS_ERROR(state) {
            return state.promotionsError
        }
    },

    // tu zapytania do serwera z pomocą naszego api
    actions: {
        async FETCH_PROMOTION({ state, commit, getters }, promotionId) {

            //todo - tutaj też trzeba coś zrobić generalnei zebt byla promocja tylko o podanym id
            
            try {
                commit("SET_PROMOTION_LOADING", true)
                const fullProducts = [];

                // Iteracja - czekamy na każdy produkt po kolei

                for (const productId of data.items) {
                    const product = await getProduct(productId);
                    fullProducts.push(product);
                }

                // Łączymy dane promocji (header, color itp.) z pełnymi obiektami produktów

                const returnObject = {
                    ...data,
                    items: fullProducts
                };

                commit("SET_PROMOTION_OBJECT", returnObject);
            } catch (error) {
                commit("SET_PROMOTION_ERROR", "Nie udało się pobrać produktów.");
            } finally {
                commit("SET_PROMOTION_LOADING", false);
            }

        }
    }
}



export default promotion