import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {LoginPage} from './src/pages/login-page';
import {HomePage} from './src/pages/home-page';
import {RootStackParamList} from './src/types/navigation';

const client = new ApolloClient({
  uri: 'https://template-onboarding-node-sjz6wnaoia-uc.a.run.app/graphql',
  cache: new InMemoryCache(),
});

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Home" component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
