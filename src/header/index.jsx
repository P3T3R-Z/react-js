import React, { Component, Fragment } from "react";
import logo from "../assets/image/logo.png";
import "../assets/icon/iconfont.css";
import "../assets/sass/header/index.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <div className="navBox">
          <a className="logo" href="/">
            <img src={logo} alt="" />
          </a>
          <div className="nav_center">
            <span className="navtext">首页</span>
            <span className="navtext">下载App</span>
            <input type="text" className="navSearch" />
            <span className="iconfont">&#xe600;</span>
            <span className="navtext">登录</span>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Header;
