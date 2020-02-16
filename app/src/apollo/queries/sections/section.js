import React, { Fragment } from "react";
import gql from "graphql-tag";

const GET_SECTION = gql`
  query LaunchDetails($sectionId: ID!) {
    section(id: $sectionId) {
      id
      title
      url
    }
  }
`;

export default GET_SECTION;