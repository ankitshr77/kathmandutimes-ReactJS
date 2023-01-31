import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    
    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1 
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0c5e0940eca74c6d89ba1ac79cc177c4&page=1&pageSize=20"

        let data = await fetch(url);

        let parsedData = await data.json()

        this.setState({articles:parsedData.articles, totalResults: parsedData.totalResults})
    }

    handlePrevClick = async ()=>{
        console.log("Previous")

        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0c5e0940eca74c6d89ba1ac79cc177c4&page=${this.state.page - 1}&pageSize=20`;

        let data = await fetch(url);

        let parsedData = await data.json()

        this.setState({
            page: this.state.page - 1,
            articles:parsedData.articles
        })
    }

    handleNextClick = async ()=>{
        console.log("Next")

        if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

        }

        else{
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0c5e0940eca74c6d89ba1ac79cc177c4&page=${this.state.page + 1}&pageSize=20`;

        let data = await fetch(url);

        let parsedData = await data.json()

        this.setState({
            page: this.state.page + 1,
            articles:parsedData.articles
        })
        }

    }


  render() {
    return (
      <div className='container my-4'>
        <h2 className='mb-5'>TOP NEWS TODAY</h2>
        <div className='row'>
        {this.state.articles.map((element)=>{
            return <div className='col-md-4' key={element.url}>
            <NewsItem title={element.title?element.title:""} desc={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>
        })}    
            
        </div>

        <div className='d-flex justify-content-center my-4'>
            <button disabled={this.state.page<=1} type="button" className='mx-2 btn btn-primary' onClick={this.handlePrevClick}>&larr; Previous </button>

            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)} type="button" className='mx-2 btn btn-primary' onClick={this.handleNextClick}>Next &rarr;</button>
        </div>



      </div>
    )
  }
}
