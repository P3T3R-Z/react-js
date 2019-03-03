import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as actionCreators from "./store/actionCreators";
import "../assets/sass/detail/index.scss"
class Detail extends PureComponent {
  render() {
    
    const { title, content } = this.props;
    return (
      <div className="detailContainer">
        <div style={{margin:'2rem auto',width:'80%',fontSize:'2rem'}}>{title}</div>
        <div dangerouslySetInnerHTML={{__html: content}} className="ddcontent"></div>
      </div>
    );
  }
  componentDidMount(){
    const {getContent} = this.props;
    getContent()
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
