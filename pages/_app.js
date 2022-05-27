import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import '../styles.css'
import '../styles/styles.css'

function MyApp({ Component, pageProps }) {

  const client = new ApolloClient({
    uri:`http://localhost:4000/graphql`,
    cache: new InMemoryCache()
  })
  return (
      <ApolloProvider client = {client}>
        <Component {...pageProps} />
      </ApolloProvider>)
}

export default MyApp
