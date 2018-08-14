import React from "react";
import ReactDOM from "react-dom";

import { QueryRenderer, graphql } from "react-relay";
import { Environment, Network, RecordSource, Store } from "relay-runtime";

function fetchQuery(operation, variables) {
  return fetch("http://localhost:3000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => {
    return response.json();
  });
}

const modernEnvironment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
});

class App extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={modernEnvironment}
        query={graphql`
          query appQuery {
            roles {
              id,
              name
            }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            return <div>Error!</div>;
          }

          if (!props) {
            return <div>Loading...</div>;
          }

          return (
            <ul>
              {props.roles.map(({name,id})=><li key={id}>{name}</li>)}
            </ul>
          );
        }}
      />
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
