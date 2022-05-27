const User = require('./models/user')
const Product = require('./models/product')


const resolvers = {

    Query: {
        getUsers: async () => {
            const users = await User.find()
            return users
        },
        getUser: async (_, {id}) => {
            const user = await User.findById(id)
            return user
        },
        getProducts: async () => {
            const products = await Product.find()
            return products
        },
        getUserProducts: async (_,args) => {
            const products =  await Product.where(args)
            return products
        },
        findProducts: async (_,args) => {
            const products =  await Product.where(args)
            return products
        }
    },

    Mutation: {
        createUser: async (_, args) => {
            const {name, birthDate, country, city, email, favProducts, status} = args
            const newUser = new User({name, birthDate, country, city, email, favProducts, status})
            await newUser.save()
            return newUser
        },
        createProduct: async (_,args) => {

            const {userID, name, description, country, city, generalPT, specificPT,productCondition, price, publicationDate, stock, status} = args
            const newProduct = new Product({userID, name, description, country, city, generalPT, specificPT, productCondition, price, publicationDate, stock, status})
            await newProduct.save()
            return newProduct
        },
        updateUser: async (_,{id, user}) => {
            const updtUser = await User.findByIdAndUpdate(id, {
                $set: user
            }, {new: true})
            return updtUser
        },
        updateProduct: async (_,{id, product}) =>{
            const updtProduct = await Product.findByIdAndUpdate(id, {
                $set: product
            }, {new: true})
            return updtProduct
        }
    }

}

module.exports = {resolvers};