import 'assets/global.css';

import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Messenger } from 'components/Messenger';
import { routes } from './routes';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Routes>
      {routes.map((route, idx) => {
        return <Route key={idx} exact={route.exact} path={route.path} element={route.component}  />
      })}
    </Routes>
  </BrowserRouter>
  // document.getElementById('root'),
);