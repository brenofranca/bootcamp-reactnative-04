import React from 'react';
import { Provider } from 'react-redux';

import store from '~/store';
import Routes from '~/routes';

if (__DEV__) {
  import('./config/ReactotronConfig').then(() => console.tron.log('Reactotron Configured'),);
}

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
