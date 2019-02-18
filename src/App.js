import React, { Component } from "react";
import "./assets/sass/base.css";
import Header from "./header";
//方便redux与react协作插件
import { Provider } from "react-redux";
import store from "./store"
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Provider中的组件都能使用store数据 */}
        <Provider store= {store}>
          <Header />
        </Provider>
      </div>
    );
  }
}

export default App;
