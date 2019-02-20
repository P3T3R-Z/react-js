import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as actionCreators from "./store/actionCreators";
import "../assets/sass/detail/index.scss"
class Detail extends PureComponent {
  render() {
    
    const { title, content ,getContent} = this.props;
    getContent()
    console.log(title)
    return (
      <div className="detailContainer">
        <div>{title}</div>
        <div dangerouslySetInnerHTML={{__html: content}} className="ddcontent"></div>
      </div>
    );
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
)(Detail);
