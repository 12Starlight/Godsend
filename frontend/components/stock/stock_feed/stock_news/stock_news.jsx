// Import React Redux
import React from 'react';
import { withRouter } from 'react-router-dom'; 

// Import Local Directory Files


class StockNews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentDidMount() {
    // debugger; 
    this.props.giveMeMyStockNews(this.props.match.params.ticker);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      // console.log('Now I am on fire')
      // console.log(this.props.match.params);
      // debugger; 
      this.props.giveMeMyStockNews(this.props.match.params.ticker);
      // this.props.giveMeMyStockRatings(this.props.match.params.ticker);
      // this.props.giveMeMyStockEarnings(this.props.match.params.ticker);
      // this.props.givePeopleAlsoBought(this.props.match.params.ticker); 
      this.props.history.push(`/stock/${this.props.match.params.ticker}`);
    }
  }


  render() {
    const { stockNews } = this.props; 

    if (!stockNews) {
      return <div></div>;
    }

    const allNews = stockNews.map((newsItem, i) => {
    debugger; 
    const converted = convert(newsItem.datetime)

      return (
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
              <img className='feed_newsItem_pic' src={newsItem.image} />
            </div>
          </a>
        </article>
      )
    })

    return(
      <div className='stockNews_container' >Stock News
        {allNews}
      </div>
    )
  }
}


export default withRouter(StockNews); 