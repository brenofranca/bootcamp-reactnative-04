import React from 'react';
import { Provider } from 'react-redux';

import '~/config/ReactotronConfig';
import '~/config/DevToolsConfig';

import store from '~/store';
import Routes from '~/routes';

console.tron.log(Routes);

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
