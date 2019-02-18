import React, { Component, Fragment } from "react";
import logo from "../assets/image/logo.png";
import "../assets/icon/iconfont.css";
import "../assets/sass/header/index.scss";
import { CSSTransition } from "react-transition-group";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false
    };
  }
  render() {
    return (
      <Fragment>
        <div className="navBox">
          <a className="logo" href="/">
            <img src={logo} alt="" />
          </a>
          <a className="navtext on" href="/">
            首页
          </a>
          <a className="navtext" href="/">
            下载App
          </a>
          <CSSTransition in={this.state.focus} timeout={200} classNames="slide">
            <div className="searchbox">
              <input
                placeholder="搜索"
                type="text"
                className="navSearch"
                onFocus={this.searchFocus}
                onBlur={this.searchBlur}
              />
              <i className={`iconfont ${this.state.focus ? "on" : ""}`}>
                &#xe602;
              </i>
            </div>
          </CSSTransition>
          <div className="rightbox">
            <span className="iconfont changefont">&#xe600;</span>
            <div className="login">登录</div>
            <a href="/" className="nocolor">
              注册
            </a>
            <a href="/" className="hascolor">
              <span className="iconfont">&#xe603;</span>写文章
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
  searchFocus = () => {
    this.setState(() => {
      return {
        focus: true
      };
    });
  };
  searchBlur = () => {
    this.setState(() => {
      return {
        focus: false
      };
    });
  };
}

export default Header;
