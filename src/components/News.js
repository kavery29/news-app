import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
// import LoadingBar from 'react-top-loading-bar';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setpage] = useState(1);
  const [loading, setloading] = useState(true);
  const [totalResults, settotalResults] = useState(0);

    // constructor(props){
    //   super(props);
    //   // console.log("hello");
    //   this.state={
    //       articles: [],
    //       loading: true,
    //       page: 1,
    //       totalResults: 0
    //   }
      document.title=`New Today -${props.category}`;
  const updateNews = async() => {
    props.setProgress(10);
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=113759b6e26a48a68fa56480212f19c1&page=${page}&pageSize=${props.pageSize}`;
      setloading (true);
      props.setProgress(40);
      let data= await fetch(url);
      let parsedData= await data.json();
      props.setProgress(70);
          setArticles(parsedData.articles);
          settotalResults (parsedData.totalResults);
          setloading (false);
      props.setProgress(100);
  }
  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, [ ]);
    // handlePrevClick = async () =>{
    //   this.setState({page: this.state.page -1});
    //   this.updateNews();
    // }
    // handleNextClick = async () =>{
    //   this.setState({page: this.state.page +1});
    //   this.updateNews();
    // }
    const fetchMoreData = async () => {
        setpage (page + 1);
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=113759b6e26a48a68fa56480212f19c1&page=${page+1}&pageSize=${props.pageSize}`;
      // this.setState({loading: true});
      let data= await fetch(url);
      let parsedData= await data.json();
      // this.setState({ 
      //     articles: this.state.articles.concat(parsedData.articles),
      //     totalResults: parsedData.totalResults,
      //     loading: false
          setArticles(articles.concat(parsedData.articles));
          settotalResults (parsedData.totalResults);
          setloading (false);
    };
    return (
      <>
        <h2 className="text-center" style={{marginTop: '70px'}} >Top headlines from {props.category}</h2>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults }
          loader ={ <Spinner/>}
          >
      <div className="container">
      <div className="row">
        {!loading && articles.map((element)=>{
          return <div className="col-md-4 my-2" key={element.url}>
          <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} /></div>
        })}
      </div></div>
      </InfiniteScroll></>
    )
  }
News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'science'
}
News.propTypes ={
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
export default News