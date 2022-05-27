import {gql} from "@apollo/client";

export const CREATE_USER =gql`
    mutation CREATE_USER(
        $name: String!
        $birthDate: String!
        $country: String!
        $city: String!
        $email: String!
        $favProducts: [String]
        $status: Boolean
    ){
            createUser(
                name: $name
                birthDate: $birthDate
                country: $country
                city: $city
                email: $email
                favProducts: $favProducts
                status: $status
            ){
                id
            }
    }
`