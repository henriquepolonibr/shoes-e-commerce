import React from 'react'
import ReactDOM from 'react-dom'
import IndexPage from './Pages'

import GlobalStyles from './Styles/Global'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <IndexPage />
  </React.StrictMode>,
  document.getElementById('root')
);
