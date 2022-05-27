import {gql} from "@apollo/client";

export const GET_USERS = gql`
    query GET_USERS{
        getUsers{
            id
            name
            birthDate
            country
            city
            email
            favProducts
        }
    }
`

// export const GET_USER = gql`
//     query GET_USER($id){
//         getUser(id: $id){
//             name
//             birthDate
//             country
//             city
//             email
//             favProducts
//         }
//     }
// `

export const GET_PRODUCTS = gql`
    query GET_PRODUCTS{
        getProducts{
             id
             name
             price
             productCondition
             status
        }
    }
`