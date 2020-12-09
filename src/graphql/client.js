import { ApolloClient, InMemoryCache, HttpLink, gql } from '@apollo/client';
import { WebSocketLink } from "apollo-link-ws";
import { SubscriptionClient } from "subscriptions-transport-ws";

 const createApolloClient = (authToken) => {
  return new ApolloClient({
    link: new WebSocketLink({
      uri: 'wss://helpful-hornet-97.hasura.app/v1/graphql',
      options: {
        reconnect: true
      }
    }),
    cache: new InMemoryCache(),
    typeDefs: gql`
      type Song {
        id: uuid!
        title: String!
        artist: String!
        thumbnail: String!
        duration: Float!
        url: String!
      }

    `
  });
 };

 export default createApolloClient;

//  link: new HttpLink({
//   uri: 'https://helpful-hornet-97.hasura.app/v1/graphql',
// }),