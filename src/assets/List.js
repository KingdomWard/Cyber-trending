import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Item from './Item'

const List = () =>  {
    const [articles, setArticles] = useState([])

    useEffect(() => {

        const getArticles = async () => {
            const response = await axios.get('https://newsapi.org/v2/everything?q=cybersecurity&from=2022-12-17&sortBy=popularity&pageSize=10&apiKey=f9cc329e57c347e49c6f601822cbba41')
            console.log(response)
            setArticles(response.data.articles)
        }
        getArticles()

    }, [])

    return (

        <div>
            {articles.map(article => {
                return (

                    <Item
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage}
                    />
                )
            })}
        </div>
        
    )
}

export default List