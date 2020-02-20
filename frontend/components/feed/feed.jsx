// Import React Redux
import React from 'react';
import { Link } from 'react-router-dom';


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

    return(
      <div className='feed_container'>
        <div className='feed_header' ><div>Welcome To Godsend</div><div>Awesome Picture</div></div>
        <div className='feed_body'>Popular Colections</div>
        <div className='feed_body'>Top News</div>
        <div className='feed_news_container'>
          {allNews}
        </div>
        <button className='button' onClick={signOut} >Sign Out</button>
      </div>
    )
  }
}


export default Feed; 