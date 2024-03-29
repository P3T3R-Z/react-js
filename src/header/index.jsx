import React, { PureComponent, Fragment } from "react";
//用于组件与store连接
import { connect } from "react-redux";
import { actionCreators } from "./store";
import logo from "../assets/image/logo.png";

import "../assets/sass/header/index.scss";
import { CSSTransition } from "react-transition-group";
import { Link, withRouter } from "react-router-dom";

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { focus, searchFocus, searchBlur, recommendList } = this.props; //es6解构赋值
    return (
      <Fragment>
        <div className="navBox">
          <Link className="logo" to="/">
            <img src={logo} alt="" />
          </Link>
          <div className="nav_center">
            {/* 组件跳转 */}
            <Link className="navtext on" to="/">
              首页
            </Link>
            <a
              className="navtext"
              href="javascript:void(0)"
              onClick={() => {
                this.props.history.push("/detail/1"); //函数式跳转
              }}
              title="函数式跳转带参"
            >
              下载App
            </a>
            <CSSTransition in={focus} timeout={200} classNames="slide">
              <div className="searchbox">
                <input
                  placeholder="搜索"
                  type="text"
                  className="navSearch"
                  onFocus={() => {
                    searchFocus(recommendList.toJS().length);
                  }}
                  onBlur={searchBlur}
                />
                <i className={`iconfont ${focus ? "on" : ""}`}>&#xe602;</i>
                {this.searchBox(focus)}
              </div>
            </CSSTransition>
          </div>
          <div className="rightbox">
            <span className="iconfont changefont">&#xe600;</span>
            <div className="login">登录</div>
            <Link to="/" className="nocolor">
              注册
            </Link>
            <Link to="/" className="hascolor">
              <span className="iconfont">&#xe603;</span>写文章
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
  searchBox = show => {
    const {
      recommendList,
      mouseEnter,
      mouseStatus,
      mouseLeave,
      page,
      totalpage,
      changeListShow
    } = this.props;

    if (show || mouseStatus) {
      //recommendList为immutable对象
      let jslist = recommendList.toJS(); //immutable对象转js对象

      let pagelist = [];
      if (jslist.length) {
        for (let i = (page - 1) * 10; i < page * 10; i++) {
          if (jslist[i]) {
            pagelist.push(<span key={jslist[i]}>{jslist[i]}</span>);
          }
        }
      }
      return (
        <div
          className="recommend_box"
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          <div className="title">
            <span>热门搜索</span>

            <span
              onClick={() => {
                changeListShow(page, totalpage, this.icondom);
              }}
            >
              <span
                className="iconfont"
                ref={icondom => {
                  this.icondom = icondom;
                }}
              >
                &#xe60a;
              </span>
              换一换
            </span>
          </div>
          <div className="recommendTip">{pagelist}</div>
        </div>
      );
    } else {
      return null;
    }
  };
}

//将store数据映射到组件state
const mapStateToProps = store => {
  return {
    //focus: store.header.focus, //未使用immutable库的取法
    //focus: store.header.get('focus') //使用immutable库的取法, 没使用redux-immutable
    focus: store.get("header").get("focus"), //使用redux-immutable 后reducer也变成了immutable对象
    //focus: store.getIn(['header', 'focus'])  //immutable另外的api取法,与上一个结果相同

    recommendList: store.get("header").get("recommendList"),
    mouseStatus: store.getIn(["header", "mouseStatus"]),
    page: store.getIn(["header", "page"]),
    totalpage: store.getIn(["header", "totalpage"])
  };
};
// 组件方法调用store.dispatch方法
const mapDispatchToProps = dispatch => {
  return {
    searchFocus(listlength) {
      if (listlength === 0) {
        dispatch(actionCreators.getRecommendlist());
      }

      dispatch(actionCreators.seach_focus());
    },
    searchBlur: function() {
      dispatch(actionCreators.seach_blur());
    },
    mouseEnter: function() {
      dispatch(actionCreators.mouseEnter());
    },
    mouseLeave: function() {
      dispatch(actionCreators.mouseLeave());
    },
    changeListShow: function(page, totalpage, icon) {
      //.log(icon.style.transform.match(/rotate\((-?[0-9]+)deg\)/i));
      var origindegree = parseInt(
        icon.style.transform === ""
          ? 0
          : icon.style.transform.match(/rotate\((-?[0-9]+)deg\)/i)[1]
      );
      origindegree -= 360;
      icon.style.transform = `rotate(${origindegree}deg)`;
      if (page < totalpage) {
        dispatch(actionCreators.changeListShow(page + 1));
      } else {
        dispatch(actionCreators.changeListShow(1));
      }
    }
  };
};
//组件与store连接
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header)); //将react-router 的 history、location、match 三个对象传入props对象
