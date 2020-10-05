import {
  Environment,
  Network,
  RequestParameters,
  RecordSource,
  Store,
  Variables
} from 'relay-runtime';

async function fetchQuery(request: RequestParameters, variables: Variables) {
  const response = await fetch('http://localhost:3000/api/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: request.text,
      variables
    })
  });

  return await response.json();
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
});

export default environment;
