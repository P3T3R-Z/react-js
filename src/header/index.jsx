import React, { Component, Fragment } from "react";
//用于组件与store连接
import { connect } from "react-redux";

import logo from "../assets/image/logo.png";
import "../assets/icon/iconfont.css";
import "../assets/sass/header/index.scss";
import { CSSTransition } from "react-transition-group";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {}
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
          <CSSTransition in={this.props.focus} timeout={200} classNames="slide">
            <div className="searchbox">
              <input
                placeholder="搜索"
                type="text"
                className="navSearch"
                onFocus={this.props.searchFocus}
                onBlur={this.props.searchBlur}
              />
              <i className={`iconfont ${this.props.focus ? "on" : ""}`}>
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

}

//将store数据映射到组件state, store指store数据
const mapStateToProps = (store) =>{
  return {
   focus: store.header.focus
  }
}
// 组件方法调用store.dispatch方法
const mapDispatchToProps = (dispatch)=>{
  return {
    searchFocus (){
      const action={
        type:'search_focus'
      }
      dispatch(action)
    },
    searchBlur: function(){
      const action = {
        type: 'search_blur'
      }
      dispatch(action)
    }
  }
}
//组件与store连接
export default connect(mapStateToProps, mapDispatchToProps)(Header);
