import { gql } from '@apollo/client';

export const GET_QUEUED_SONGS = gql`
    query getQueuedSongs {
        queue @createApolloClient {
            artist
            duration
            id
            thumbnail
            title
            url
        }
}`