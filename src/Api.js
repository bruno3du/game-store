import axios from "axios"

const productsApi = 'http://localhost:3004/products'

const teste = axios.get(productsApi).then(res => {console.log(res)}).catch(err => console.log(err))
