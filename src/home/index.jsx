import React, { PureComponent, Fragment } from "react";
import Artcilelist from "./artcilelist";
import { connect } from "react-redux";
import * as actionCreators from "./store/actionCreators";
import Swiper from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.min.css";
import "../assets/sass/home/index.scss";
import {scrollAnimation} from "../assets/base"
class Home extends PureComponent {
  render() {
    const {
      bannerlist,
      tabNavlist,
      bannerMoveIn,
      bannerMoveOut,
      bmStatus,
      articlelist,
      getMore,
      page,
      backtopshow
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
        <Artcilelist
          articlelist={articlelist}
          getMore={getMore.bind(this, page)}
        />
        <div className="backtop" style={{display: backtopshow?'flex':'none'}} onClick={this.backtop}>
          <i className="iconfont">&#xe601;</i>
        </div>
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
    this.props.getHotArticle(this.props.page);

    window.addEventListener('scroll', this.props.windowScroll)
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.props.windowScroll)
  }
  backtop = () =>{
    
    const currentY = document.documentElement.scrollTop || document.body.scrollTop
    scrollAnimation(currentY, 0)
  }
}

const mapStateToProps = store => {
  return {
    bannerlist: store.getIn(["home", "banner"]),
    tabNavlist: store.getIn(["home", "tabnav"]).toJS(), //immutable对象多层数据需要转换为js对象
    bmStatus: store.getIn(["home", "bannerMoveStatus"]),
    articlelist: store.getIn(["home", "list"]).toJS(),
    page: store.getIn(["home", "page"]),
    backtopshow: store.getIn(["home", "backtopshow"])
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
    getHotArticle(page) {
      dispatch(actionCreators.hotArticlelist(page));
    },
    getMore(page) {
      dispatch(actionCreators.getMorelist(page + 1));
    },
    windowScroll(){
      if(document.documentElement.scrollTop || document.body.scrollTop > 100){
        dispatch(actionCreators.windowScroll(true))
      } else {
        dispatch(actionCreators.windowScroll(false))
      }
      
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
