import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as actionCreators from "./store/actionCreators";
import "../assets/sass/detail/index.scss";
import { Switch, withRouter, Route } from "react-router-dom";

class Detail extends PureComponent {
  details() {
    const { title, content } = this.props;
    return (
      <div className="detailContainer">
        <div
          style={{
            margin: "2rem auto",
            width: "80%",
            fontSize: "2rem"
          }}
        >
          {title}
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="ddcontent"
        />
      </div>
    );
  }
  render() {
    return (
      <Switch>
        {/* 普通路由 */}
        <Route
          path={`${this.props.match.path}`}
          render={route => {
            console.log("普通路由", route);
            return this.details();
          }}
          exact
        />
        {/* 子路由 */}
        <Route
          path={`${this.props.match.path}/details`}
          render={route => {
            console.log("子路由", route);
            return this.details();
          }}
        />
        {/* 动态路由 */}
        <Route
          path={`${this.props.match.path}/:aid`}
          render={route => {
            console.log("动态路由", route);
            return this.details();
          }}
          exact
        />
      </Switch>
    );
  }
  componentDidMount() {
    console.log("get传值为:", this.props.location.search);
    const { getContent } = this.props;
    getContent();
  }
}

const mapState = store => {
  return {
    title: store.getIn(["detail", "title"]),
    content: store.getIn(["detail", "content"])
  };
};
const mapDispatch = dispatch => {
  return {
    getContent() {
      dispatch(actionCreators.getContent());
    }
  };
};
export default connect(
  mapState,
  mapDispatch
)(withRouter(Detail));
