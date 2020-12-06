import ApolloClient from 'apollo-boost';

cpnst client = new ApolloClient({
    url: 'https://helpful-hornet-97.hasura.app/v1/graphql'
})

export default client;