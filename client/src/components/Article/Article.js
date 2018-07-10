import React from 'react';

const Article = ({ title, url, _id, date, handleClick, buttonText, saved, icon }) => (
    <div  style={{padding:"3px"}}>
        
        <a href="#!" className="collection-item">
        <span>
            <p className="text-black"><a href={url} >{title} </a></p>
            <button className="btn waves-effect waves-light  teal darken-1" onClick={() => handleClick(_id)}>
                {buttonText}
                 <i className="material-icons">{icon}</i>
            </button>
            </span>
        </a>
    </div>
);


export default Article;