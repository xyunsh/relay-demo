import React from "react";
import ReactDOM from "react-dom";

import { QueryRenderer, graphql } from "react-relay";
import { Environment, Network, RecordSource, Store } from "relay-runtime";

import Rights from './Rights';

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

type Props = {};

class App extends React.Component<Props> {
  render() {
    return (
      <QueryRenderer
        environment={modernEnvironment}
        cacheConfig={{
            force:true
        }}
        query={graphql`
          query appQuery {
            roles {
              id
              name
              rights {
                  ...Rights_items
              }
            }
            queryResources {
                ...Resource_item
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
            <dl>
              {props.roles.map(({ name, id , rights}) => [
                    <dt key={id}>{name}</dt>,
                    <dd key={`${id}.rights`}><Rights items={rights}/></dd>
              ])}
            </dl>
          );
        }}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
