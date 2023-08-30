import axios from "axios";


const ProductReducer = (state={products:[{}],product:{}},action)=>{
    switch(action.type){
        case "getData":
            return {...state,products:action.payload}

        case "addData":
             axios.post('http://localhost:8000/products',action.payload)
        .then(console.log("Success"))
        .catch(err => console.log("Error:"+err))
        return state

        case "getsingle": return {...state,product:action.payload}

        case "uptData":
            return state

        case "delData":
        console.log(action.payload)    
        return state

        default : return state;
    }
}
export default ProductReducer;


// import axios from 'axios';

// const ProductReducer=(state={products:[{}],product:{}},action) =>{
//         switch(action.type){
//             case 'getData':
//                 return {...state,products:action.payload}
         
//             case 'addData':
//                 axios.post('http://localhost:8000/products',action.payload)
//                 .then(console.log("sucess"))
//                 .catch(err => console.log("Error is"+err))
//                 return state

//             case 'getsingle':
//                 return { ...state,product:action.payload}
               
//             case 'upData':
//                 return state
           
//             case "delData":
//                 console.log("data is deleted sucessfully")
//             console.log(action.payload)
//             return state

//             default:
//                 return state
//             }      
// }

// export default ProductReducer