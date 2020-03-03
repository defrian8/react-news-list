import React from 'react';
import { Link, } from "react-router-dom";
import moment from 'moment'
import 'moment/locale/id'
function Article({ news }) {
    moment.locale("id");
    return (

        <article className="article" id={news.id} key={news.id}>
            <div className="article-img" style={{ position: "relative", overflow: "hidden" }}>
                <div style={{ width: "100%", paddingBottom: "66.69921875%" }}></div>
                <img src="data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMCBf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAHpzai6hP/EABoQAAIDAQEAAAAAAAAAAAAAAAERAAIxAxP/2gAIAQEAAQUCGDqGohYeVHk//8QAFREBAQAAAAAAAAAAAAAAAAAAECH/2gAIAQMBAT8Bh//EABURAQEAAAAAAAAAAAAAAAAAABAh/9oACAECAQE/Aaf/xAAaEAACAgMAAAAAAAAAAAAAAAABIQAQETFR/9oACAEBAAY/AnMFcpiFbr//xAAbEAEBAAIDAQAAAAAAAAAAAAABABEhMVFhsf/aAAgBAQABPyFYyWvZbB+lh1BW6ASjQDgv/9oADAMBAAIAAwAAABA77//EABYRAQEBAAAAAAAAAAAAAAAAAAAhAf/aAAgBAwEBPxDIR//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAECAQE/EGP/xAAcEAEBAAMAAwEAAAAAAAAAAAABEQAhQTFRYZH/2gAIAQEAAT8QKYB1TLVyU8vT4a/cCNAvnWDpERC9yQSxbycPWAFwIGf/2Q=="
                    alt="" />

            </div>
            <div className="article-content">
                <header>

                    <Link to={"/news/" + news.id}> <h2>{news.title}</h2></Link>

                </header>
                <p>{news.content.substring(0, 100)}</p>
                <div className="article-footer">
                    <span className="tanggal">
                        {moment(news.created_at).format("DD MMMM YYYY")}
                    </span>
                    <span className="Author">{news.user.username}</span>
                </div>
            </div>
        </article>
    )
}
export default Article;