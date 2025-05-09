import React from 'react';
import {LoginPage} from './src/pages/login-page';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://template-onboarding-node-sjz6wnaoia-uc.a.run.app/graphql',
  cache: new InMemoryCache(),
});

function App(): React.JSX.Element {
  return (
    <ApolloProvider client={client}>
      <LoginPage />
    </ApolloProvider>
  );
}

export default App;
