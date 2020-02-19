// Import React Redux
import React from 'react';


class Feed extends React.Component {
  constructor(props) {
    super(props);
  }


  render(){
    return(
      <div className='feed_container'>
        <div className='feed_header' ><div>Welcome To Godsend</div><div>Awesome Picture</div></div>
        <div className='feed_body'>Popular Colections</div>
        <div className='feed_body'>News</div>
        <div className='feed_items'>
          <article>Tom News Item 1</article>
        </div>
        <div className='feed_items'>
          <article>Tom News Item 2</article>
        </div>
        <div className='feed_items'>
          <article>Tom Movers</article>
        </div>
        <div className='feed_items'>
          <article>News Item 1</article>
        </div>
        <div className='feed_items'>
          <article>News Item 2</article>
        </div>
        <div className='feed_items'>
          <article>News Item 3</article>
        </div>
        <div className='feed_items'>
          <article>News Item 4</article>
        </div>
        <div className='feed_items'>
          <article>News Item 5</article>
        </div>
        <div className='feed_items'>
          <article>News Item 6</article>
        </div>
        <div className='feed_items'>
          <article>News Item 7</article>
        </div>
        <div className='feed_items'>
          <button className='button' onClick={signOut} >Sign Out</button>
        </div>
      </div>
    )
  }
}


export default Feed; 