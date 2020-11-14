import React from 'react'

const NewsCard = ({newsArticle}) => {
    const formatDate = (str) => {
        const date = new Date(str);
        const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
        const month = new Intl.DateTimeFormat("en", { month: "long" }).format(date);
        const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;

        return `Published at ${month} ${day}, ${year} at ${hours}:${minutes} ${ampm}`;
    }

    return (
        <div className='newscard'>
            <div className='imagebox'>
                <img src={newsArticle.urlToImage ? newsArticle.urlToImage : 'https://static.thenounproject.com/png/340719-200.png' }/>
            </div>
            <div className='news-info'>
                <h3>{newsArticle.title}</h3>
                <p className='publish-date'>{formatDate(newsArticle.publishedAt)}</p>
                <p>{newsArticle.description}</p>
                <div className='article-source'>
                    <button className="article-but" type="submit">
                        <a target="_blank" href={newsArticle.url}>Read Article</a>
                    </button>
                    <h3 className='company'>{newsArticle.source.name}</h3>
                </div>
                
            </div>
            <a></a>
        </div>
    )
}

export default NewsCard