import React, { PureComponent, Fragment } from "react";
import {Link} from "react-router-dom"
class Artcilelist extends PureComponent {

  
  render() {

    const { articlelist, getMore } = this.props;
    return (
      <Fragment>
        <div className="hotArticle_box">
          {articlelist.map((item, index) => {
            return (
              <div className="article_item" key={item.title + index}>
                <div className="left">
                  <Link className="title" to="/detail/details" title="子路径跳转">
                    {item.title}
                  </Link>
                  <div className="desc">{item.desc}</div>
                  <div className="otherinfo">
                    <span className="views">
                      <i className="iconfont">&#xe749;</i>
                      {item.views}
                    </span>
                    <span>{item.owner}</span>
                    <span>
                      <i className="iconfont">&#xe6f3;</i>
                      {item.discuss}
                    </span>
                    <span>
                      <i className="iconfont">&#xe640;</i>
                      {item.like}
                    </span>
                  </div>
                </div>
                <Link className="cover" to="/detail?id=1" title="get传值">
                  <div style={{ backgroundImage: `url(${item.cover})` }} />
                </Link>
              </div>
            );
          })}
          <div className="showMore" onClick={getMore}>查看更多</div>
        </div>
      </Fragment>
    );
  }
}

export default Artcilelist;
