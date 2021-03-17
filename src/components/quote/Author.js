import React from 'react'

function Author(props) {
    return (
        <div className="author-summary">
            <div className="container">
                <div className="text">
                    <h4 className={`${props.lights === 'on' ? 'light-text' : 'dark-text'}`}>{props.fullname}</h4>
                    <p className={`${props.lights === 'on' ? 'light-subtext' : 'dark-subtext'}`}>{props.genre}</p>    
                </div>
                {/* <Modal 
                modal={modal} setModal={setModal}
                animate={ isOpen ? 'open' : 'closed' } lights={props.lights} 
                author={props.fullname} isOpen={isOpen} toggleOpen={toggleOpen} /> */}
                </div>
        </div>
    )
}

export default Author
