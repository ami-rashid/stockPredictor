import React from 'react'

const NewsCard = ({newsArticle}) => {
    return (
        <div className='newscard'>
            <img src={newsArticle.urlToImage ? newsArticle.urlToImage : 'https://static.thenounproject.com/png/340719-200.png' }/>
            <div className='news-info'>
                <h3>{newsArticle.title}</h3>
                <p>{newsArticle.description}</p>
            </div>
        </div>
    )
}

export default NewsCard