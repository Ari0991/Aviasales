import React from 'react';

import Content from '../Content/Content.js';
import AviaService from '../../services/avia-service.js';

const aviaService = new AviaService();
const res = aviaService.getSearchId();
console.log(res);

const App = () => {
  return <Content />;
};

export default App;
