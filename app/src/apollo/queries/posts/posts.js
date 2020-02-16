import gql from 'graphql-tag';

const POSTS_QUERY = gql`
    query Posts {
        posts {
            id
            Title
            Content
        }
    }
`;

export default POSTS_QUERY;