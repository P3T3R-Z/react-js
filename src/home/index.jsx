import React, { Component, Fragment } from "react";
import Artcilelist from "./artcilelist"
import { connect } from "react-redux";
import * as actionCreators from "./store/actionCreators";
import Swiper from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.min.css";
import "../assets/sass/home/index.scss";

class Home extends Component {
  render() {
    const {
      bannerlist,
      tabNavlist,
      bannerMoveIn,
      bannerMoveOut,
      bmStatus,
      articlelist
    } = this.props;
    return (
      <Fragment>
        <div className="home_container">
          <div
            className="swiper-container bannerSwiper"
            onMouseEnter={bannerMoveIn}
            onMouseLeave={bannerMoveOut}
          >
            <div className="swiper-wrapper">
              {bannerlist.map((item, index) => (
                <img key={item} className="swiper-slide" src={item} alt="" />
              ))}
            </div>
            {/*banner左右按钮*/}
            {this.bannerChangeBtn(bmStatus)}
            <div className="swiper-pagination">
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
            </div>
          </div>
          {/*右侧tab*/}
          <div className="right_tab">
            {tabNavlist.map(item => {
              return (
                <a href={item.url} key={item.img}>
                  <img src={item.img} alt="" />
                </a>
              );
            })}
          </div>
        </div>
        <Artcilelist articlelist={articlelist}/>
      </Fragment>
    );
  }
  bannerChangeBtn = show => {
    return (
      <Fragment>
        <div
          className="swiper-button-prev"
          style={{ display: show ? "flex" : "none" }}
        >
          <span className="iconfont">&#xe601;</span>
        </div>
        <div
          className="swiper-button-next"
          style={{ display: show ? "flex" : "none" }}
        >
          <span className="iconfont">&#xe601;</span>
        </div>
      </Fragment>
    );
  };

  componentDidMount() {
    new Swiper(".swiper-container", {
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true // 允许点击跳转
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
    this.props.getHotArticle();
  }

}

const mapStateToProps = store => {
  return {
    bannerlist: store.getIn(["home", "banner"]),
    tabNavlist: store.getIn(["home", "tabnav"]).toJS(), //immutable对象多层数据需要转换为js对象
    bmStatus: store.getIn(["home", "bannerMoveStatus"]),
    articlelist: store.getIn(["home", "list"]).toJS()
  };
};

const mapDispatchToProps = dispatch => {
  return {
    bannerMoveIn() {
      dispatch(actionCreators.bannerMove());
    },
    bannerMoveOut() {
      dispatch(actionCreators.bannerMoveOut());
    },
    getHotArticle() {
      dispatch(actionCreators.hotArticlelist());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
