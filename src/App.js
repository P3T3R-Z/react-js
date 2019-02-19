import React, { Component } from "react";
import "./assets/sass/base.css";


import Header from "./header";
import Home from "./home";


//方便redux与react协作插件,使用该插件后不需要使用store.getState, store.subscribe等api
import { Provider } from "react-redux";
import store from "./store"
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Provider中的组件都能使用store数据 */}
        <Provider store= {store}>
          <Header />
          <Home />

        </Provider>
      </div>
    );
  }
}

export default App;
