import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

 const createApolloClient = (authToken) => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://helpful-hornet-97.hasura.app/v1/graphql',
    }),
    cache: new InMemoryCache(),
  });
 };

 export default createApolloClient;