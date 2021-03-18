import React from 'react'
import styled from 'styled-components'
import Author from './Author'

function Quote({text, author, genre}) {

    const QuoteText = styled.h2 `
        font-size: 2.2em;
        margin: 0px;
        
    `;

    return (
        <div className="quote-wraper">
            <div className="quote" id="quote">
            <div className="quote-block">
                <div className="strip accent-dark"></div>
                <span>
                    <QuoteText className= "quote-text" >
                        {text}
                    </QuoteText> 
                </span>
            </div>
        </div>
        <Author fullname={author} genre={genre} />
        </div>
    )
}

export default Quote
