import gql from 'graphql-tag';

const SECTIONS_QUERY = gql`
    query Sections {
        sections {
          id
          title
          url
          pages {
            id
            title
            content
          }
        }
    }
`;

export default SECTIONS_QUERY;