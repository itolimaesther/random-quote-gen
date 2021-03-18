import React, { useState } from 'react'
import { useCycle } from 'framer-motion';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Modal from '../Modal'

function Author({lights, fullname, genre}) {

    const [ modal, setModal ] = useState({ display: 'none' });
    const [ isOpen, toggleOpen ] = useCycle(true);

    const toggleModal = () => {
        setModal({ display: 'flex' });
        toggleOpen(!isOpen);
    }




    return (
        <div className={`author-summary ${lights === 'on' ? 'light-dim-bg' : 'dark-dim-bg'}`}>
            <div className="container">
                <div className="text">
                    <h4 className={`${lights === 'on' ? 'light-text' : 'dark-text'}`}>{fullname}</h4>
                    <p className={`${lights === 'on' ? 'light-subtext' : 'dark-subtext'}`}>{genre}</p>    
                </div>
                <ArrowForwardIcon className="icon" onClick={toggleModal} />
                <Modal 
                modal={modal} setModal={setModal}
                animate={ !isOpen ? 'open' : 'closed' } lights={lights} 
                author={fullname} isOpen={isOpen} toggleOpen={toggleOpen} />
                </div>
        </div>
    )
}

export default Author
