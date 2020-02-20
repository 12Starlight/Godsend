// // Import React Redux
// import React from 'react';
// import { Link } from 'react-router-dom';


// class Feed extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {
//     this.props.receiveAllNews();
//   }


//   render() {
//     const { news, convert } = this.props;

//     if (!news) {
//       return <div>No news yet</div>
//     }

//     const allNews = news.reverse().map((newsItem, i) => {
//       const converted = convert(newsItem.datetime)

//       return (
//         <article key={i} className='feed_items'  >
//           <div className='feed_items_line'>
//             <a className='feed_anchor' href={newsItem.url} >
//               <div className='feed_header_outer_container'>
//                 <div className='feed_header_container'>
//                   <div className='feed_header_source'>{newsItem.source}</div>
//                   <div>{converted.hour}h</div>
//                 </div>
//                 <div className='feed_data_container' >
//                   <div className='feed_data_content' >{newsItem.headline}</div>
//                   <img className='feed_img' src={newsItem.image} />
//                 </div>
//               </div>
//             </a>
//           </div>
//         </article>
//       )
//     })

//     return (
//       <div className='feed_container'>
//         <div className='feed_header' ><div>Welcome To Godsend</div><div>Awesome Picture</div></div>
//         <div className='feed_body'>Popular Colections</div>
//         <div className='feed_body'>News</div>
//         <div className=''>
//           {allNews}
//         </div>
//         <button className='button' onClick={signOut} >Sign Out</button>
//       </div>
//     )
//   }
// }


// export default Feed; 