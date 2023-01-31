import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    
    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0c5e0940eca74c6d89ba1ac79cc177c4"

        let data = await fetch(url);

        let parsedData = await data.json()

        this.setState({articles:parsedData.articles})
    }


  render() {
    return (
      <div className='container mt-5'>
        <h2 className='mb-5'>TOP NEWS TODAY</h2>
        <div className='row'>
        {this.state.articles.map((element)=>{
            return <div className='col-md-4' key={element.url}>
            <NewsItem title={element.title?element.title:""} desc={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>
        })}    
            
        </div>
      </div>
    )
  }
}
