import Body from "./Body"


const NewsItem = ({news}) => {
    return <div className="flex justify-center mb-4 hover:scale-105">
        <div className="block p-6 rounded-lg shadow-lg bg-base max-w-sm border-2 border-pink/70 ">
            <h5 className="font-bold text-2xl leading-tight mb-2 text-mauve">{ news.title}</h5>
            <p className="text-lavender mb-4">
            {news.body}
            </p>
        </div>
        </div>
}


const News = ({news}) => {
    return <Body>
        <div className="flex flex-wrap justify-around">{news.map((el, idx) => <NewsItem key={idx} news={el} />)}</div>
        </Body>
}

export default News