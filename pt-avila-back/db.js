const {connect} = require("mongoose")

const dbUri = "mongodb+srv://pt-avila-db-user:pt-avila-db-password@pt-avila-mongodb.j7hpm1h.mongodb.net/?retryWrites=true&w=majority"

const connectDB = async () => {
    try{
        await connect(dbUri);
        console.log('Connexion to mongodb successful')
    }catch (error) {
        console.error(error)
    }
}
module.exports = {connectDB};