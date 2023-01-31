import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, desc, imageUrl, newsUrl} = this.props;
    return (
      
        <div className="card mt-5" style={{width: "18rem"}}>
            <img src={!imageUrl?"https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/zESdDhnu0VA8kUpWh0mtaBZ-nUI=/1200x630/filters:focal(2120x64:2130x54):no_upscale()/cloudfront-us-east-1.images.arcpublishing.com/dmn/XPMOY3ORAZDRTOIRIEKUDAIZHA.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{desc}...</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Get Details</a>
            </div>
        </div>

      
    )
  }
}
