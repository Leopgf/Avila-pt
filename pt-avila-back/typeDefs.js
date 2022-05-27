const {gql} = require('apollo-server-express')

const typeDefs = gql`
    
    type User {
        id: ID
        name: String!
        birthDate: String!
        country: String!
        city: String!
        email: String!
        favProducts: [String]
        status: Boolean!
    }
    
    type Product {
        id: ID
        userID: String!
        name: String!
        description: String
        country: String!
        city: String!
        generalPT: String!
        specificPT: [String]
        productCondition: Boolean!
        price: Int!
        publicationDate: String!
        stock: Int!
        status: Boolean!
    }
    
    type Query {
        getUsers: [User]
        getUser(id: String!): User
        getProducts: [Product]
        getUserProducts(userID: String!): [Product]
        findProducts(name: String!): [Product]
    }
    
    input userInput {
        name: String
        birthDate: String
        country: String
        city: String
        email: String
        favProducts: [String]
    }
    
    input productInput {
        userID: String
        name: String
        description: String
        country: String
        city: String
        generalPT: String
        specificPT: [String]
        productCondition: Boolean
        price: Int
        publicationDate: String
        stock: Int
    }
    
    type Mutation {
        createUser(
        name: String!
        birthDate: String!
        country: String!
        city: String!
        email: String!
        favProducts: [String]
        status: Boolean): User
      
        createProduct(
        userID: String!
        name: String!
        description: String
        country: String!
        city: String!
        generalPT: String!
        specificPT: [String]
        productCondition: Boolean!
        price: Int!
        publicationDate: String!
        stock: Int!
        status: Boolean): Product
        
        updateUser(id: String!, user: userInput): User
        
        updateProduct(id: String!, product: productInput): Product
    }
    
`

module.exports = {typeDefs};