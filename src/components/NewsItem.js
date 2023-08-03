import React from 'react'

const NewsItem=(props)=> {
    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
        <div>
         <div className="card">
          <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}} >
         <span className="badge rounded-pill bg-success" style={{zIndex: '1', left: '90%'}} >{source}</span></div>
         <img src={!imageUrl? "https://media.cnn.com/api/v1/images/stellar/prod/221110131925-dan-snyder-file-100222.jpg?c=16x9&q=w_800,c_fill":imageUrl } className="card-img-top" alt="..." />
         <div className="card-body">
           <h5 className="card-title">{title}</h5>
           <p className="card-text">{description}
           </p>
           <p className="card-text"><small className="text-muted">By {!author? "unknown" : author} on {new Date(date).toGMTString() } </small></p>
           <a rel="noreferrer" href= {newsUrl} target="_blank" className="btn btn-primary btn-sm">Read More
           </a>
         </div>
       </div>
    </div>
    )
  }

export default NewsItem