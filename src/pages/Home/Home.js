
import React, { useState, useEffect } from 'react';
import api from '../../config/api';
import { getUser } from '../../config/auth';
import Articles from './Articles';
function Home() {

    const [news, setNews] = useState({ data: [] });

    useEffect(() => {
        api.get('/news')
            .then((data) => {

                setNews(data.data);
            })
            .catch(function (error) {

            });

    }, []);

    return (
        
        <div className="news-home">
            <h2>RECENT NEWS</h2>
            {
                news.data.map((content, key) => (
                   <Articles news={content} key={content.id}/>
                ))
            }
        </div>
    )
}
export default Home;