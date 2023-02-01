import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, desc, imageUrl, newsUrl,author, date, source} = this.props;
    return (
      
        <div className="card my-3">
            <img src={!imageUrl?"https://t4.ftcdn.net/jpg/04/00/24/31/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{desc}...</p>
            <h6>Source: <span className="badge bg-danger">{source}</span></h6>
            <p className='card-text'><small className='text-muted'>By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p> 
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Get Details</a>
            </div>
        </div>

      
    )
  }
}
