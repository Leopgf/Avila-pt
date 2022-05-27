const express = require('express')
const {ApolloServer} = require('apollo-server-express')
const {typeDefs} = require('./pt-avila-back/typeDefs')
const {resolvers} = require('./pt-avila-back/resolvers')
const {connectDB} = require('./pt-avila-back/db')

const server = express()

connectDB()

server.get('/', (req, res) =>
    res.send('Welcome to my technical test API'))

module.exports = server

async function runServer() {

    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    })

    await apolloServer.start()

    apolloServer.applyMiddleware({app: server})

    server.use('*', (req, res) => res.status(404).send('Not Found'))

    server.listen(4000, () => {
        console.log('Local server on port', 4000)
    })
}

runServer()