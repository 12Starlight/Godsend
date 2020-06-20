// Import React Redux
import React from 'react';
import { Link } from 'react-router-dom';

// Import Local Directory Files
// import feedChart from '../../../app/assets/images/feed/stock_chart';
import SectorsContainer from './sectors/sector_container';


class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.receiveAllNews(); 
  }


  render(){
    const { news, convert, signOut } = this.props; 
    
    if (!news) {
      return <div>No news yet</div>
    } 
    // debugger; 
    const allNews = news.map((newsItem, i) => {
    const converted = convert(newsItem.datetime)  
    
      return(
        <article key={i} className='feed_newsItem_container' >
          <a href={newsItem.url} className='feed_newsItem_container_inner'>
          <div className='feed_newsItem_data'>
            <div className='feed_newsItem_content_container'>
              <div className='feed_newsItem_source'>{newsItem.source}</div>
              <div className='feed_newsItem_time'>{converted.hour}h</div>
            </div>
            <div className='feed_newsItem_headline_container'>
              <div className='feed_newsItem_headline'>{newsItem.headline}</div>
            </div>
          </div>
          <div className='feed_newsItem_pic_container'>
            <img className='feed_newsItem_pic' src={newsItem.image}/>
          </div>
          </a>
        </article>
      )
    })

    const reversed = allNews.reverse(); 

    return(
      <div className='feed_container'>
        <div className='feed_header' >
          <div className='feed_header_title' >Welcome To Godsend</div>
          <img src={window.stockChartURL} className='feed_header_pic' />
        </div>
        <SectorsContainer /> {/* Popular Collections */}
        <div className='topNews_container'></div> {/* Top News */}
        <div className='feed_news_container'>
          {reversed}
        </div>
      </div>
    )
  }
}


export default Feed; 



// <div className='feed_header_pic' ></div>
