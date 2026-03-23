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
        FETCH_PROMOTION({ state, commit, getters }, promotionId) {
 //todo
 // cel tej akcji to pobranie danych promocji oraz danych jej produktów i złożenie w całość
 // można tego dokonać na serwerze, dodając kolejny get, albo na kliencie, łącząc dane uzyskane z dotychczasowych getów

}
    }
}



export default promotion