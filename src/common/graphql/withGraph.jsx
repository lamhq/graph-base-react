import React, { useContext } from 'react';
import { graphql } from 'react-apollo';
import { IdentityContext } from '../identity';

function getTokenFromContext(context) {
  if (!context) return null;
  const { token } = context;
  if (!token) return null;
  return token.value;
}

const withGraph = (query, config) => (WrappedComponent) => {
  const GraphConsumer = (props) => {
    const context = useContext(IdentityContext);
    const cfg = { ...config };
    const token = getTokenFromContext(context);
    if (token) {
      cfg.options = {
        context: {
          headers: {
            authorization: `Bearer ${token.value}`,
          },
        },
      };
    }
    const Comp = graphql(query, cfg)(WrappedComponent);
    return <Comp {...props} />;
  };

  return GraphConsumer;
};

export default withGraph;
