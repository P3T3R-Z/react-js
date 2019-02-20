import React, { PureComponent, Fragment } from "react";
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
                  <a className="title" href="/">
                    {item.title}
                  </a>
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
                <a className="cover" href="/">
                  <div style={{ backgroundImage: `url(${item.cover})` }} />
                </a>
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
