import axios from "axios"

// const get = (url) => new Promise((resolve, reject) => {
//  setTimeout(() => {
//  axios.get(url)
//  .then(response => {
//  console.log("data", response.data);
//  resolve(response.data)
//  })
//  .catch(error => {
//  reject(error)
//  })

//  }, 500 + Math.random() * 1000);

// })

const get = (url) => new Promise((resolve, reject) => {
  setTimeout(() => {
    axios.get(url, {
      // KLUCZOWY DODATEK:
      withCredentials: true 
    })
    .then(response => {
      console.log("data", response.data);
      resolve(response.data);
    })
    .catch(error => {
      reject(error);
    });
  }, 500 + Math.random() * 1000);
});


const post = (url, userObject) => new Promise((resolve, reject) => {
    
    setTimeout(() => {
        axios.post(url, userObject, { withCredentials: true }) // nagłówek obsługiwany na serwerze
            .then(response => {
                console.log("data", response.data);
                resolve(response.data)
            })
            .catch(error => {
                reject(error)
            })

    }, 1000);

})

// const get = async (url) => {
//  try {

//  const delay = 500 + Math.random() * 1000;
//  await new Promise(resolve => setTimeout(resolve, delay));

//  const response = await axios.get(url);
 
//  console.log("data", response.data);

//  return response.data; // Zwracamy dane (to samo co resolve)

//  } catch (error) {

//  throw error; 
//  }
// };

const getPromotions = () => get("http://localhost:8080/promotions")

const getPromotion = (id) => get(`http://localhost:8080/promotion/${id}`)

const getProduct = (id) => get(`http://localhost:8080/product/${id}`)

const registerUser = (userObject) => post(`http://localhost:8080/registerUser`, userObject);

const loginUser = (userObject) => post(`http://localhost:8080/loginUser`, userObject);
const logoutUser = () => post(`http://localhost:8080/logoutUser`);

const getCurrentUser = () => get(`http://localhost:8080/getCurrentUser`);

const getProducts = () => get(`http://localhost:8080/products`)

export {

    getPromotions,
    getPromotion,
    getProduct,
    registerUser,
    loginUser,
    logoutUser,
    getCurrentUser,
    getProducts
    //tu będą pozostałe metody
}
