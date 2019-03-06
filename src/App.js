import React, { PureComponent, Fragment } from "react";
import "./assets/sass/base.css";

import { HashRouter, Route } from "react-router-dom";
import Header from "./header";
//import Home from "./home";
//import Detail from "./detail/detail";

//方便redux与react协作插件,使用该插件后不需要使用store.getState, store.subscribe等api
import { Provider } from "react-redux";
import store from "./store";

import Loadable from "react-loadable";

const MyLoadingComponent = props => {
  if (props.isLoading) {
      return <div>Loading...</div>
  }
  else if (props.error) {
      return <div>Error! <button onClick={ props.retry }>重载</button></div>
  }
  else {
      return null;
  }
};

const AsyncHome = Loadable({
  loader: () => import('./home'),
  loading: MyLoadingComponent,
});
const AsyncDetail = Loadable({
  loader: () => import('./detail/detail'),
  loading: MyLoadingComponent,
});



class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <HashRouter>
            <Fragment>
              <Header />
              <Route path="/" component={AsyncHome} exact />
              <Route path="/detail" component={AsyncDetail} />
            </Fragment>
          </HashRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
