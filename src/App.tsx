import React from 'react';
import '@/global.less';
import '@/utils/rem';
// @ts-ignore
import { HashRouter as Router } from 'react-router-dom';
import {Provider} from "react-redux";
// @ts-ignore
import { renderRoutes } from 'react-router-config';
import { TabBar, NavBar } from "@/components/Layouts";
import store from "./store"
import routes from './routes'
import Toast from "@/components/Toast";
function App() {

    return (
      <Provider store={store}>
        <Router>
          <div className="app-main">
            <NavBar />
            <div className='app-content'>
              {renderRoutes(routes)}
            </div>
            <TabBar />
          </div>
        </Router>
      </Provider>
  );
}

export default App;
