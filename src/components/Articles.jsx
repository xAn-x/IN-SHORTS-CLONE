import { useState, useEffect } from 'react';
import { getNews } from "../service/api";

import InfiniteScroll from 'react-infinite-scroll-component';

//components
import Article from './Article';

const Articles = () => {

    const [news, setNews] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        const dailyNews = async () => {
            const response = await getNews(page);
            console.log(new Set([...news, ...response.data.articles]));
            setNews([...new Set([...news, ...response.data.articles])]);
        }
        dailyNews();
    }, [page])

    useEffect(() => {
        console.log(news);
    }, [news])

    return (
        <InfiniteScroll
            dataLength={news.length}
            next={() => setPage(page => page + 1)}
            hasMore={true}
        >
            {
                news.map((article,idx) => (
                    <Article key={idx} article={article} />
                ))
            }
        </InfiniteScroll>
    )
}

export default Articles;