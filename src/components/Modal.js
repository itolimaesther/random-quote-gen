import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { motion } from 'framer-motion';
import axios from 'axios';

function Modal({lights, modal, setModal, author, toggleOpen, isOpen }) {

    const [ quotes, setQuotes ] = useState([]);
    const [ didMount, setDidMount ] = useState(false);

    const handleClick = e => {
        if(isOpen) {
            setModal({ display: 'none' });
            toggleOpen();
        }
    }
    let url = `https://quote-garden.herokuapp.com/api/v3/quotes/random?author=${author}&count=10`;


    useEffect(() => {
        setDidMount(true);

        axios.get(url).then((res) => {
            setQuotes(res.data.data);
        }).catch((err) => console.log(err));

        return () => {
            setDidMount(false);
        }
    }, [didMount, url]);
    /* variants */
    const modal_open = {
        open: { 
            opacity: 1, 
            x: 0,
            display: 'block',
            transition: {
                type: "spring",
                stiffness: 75,
                restDelta: 2,
                duration: 0.5,
                delay: 0.5
            },
        },
        closed: { 
            opacity: 0, 
            x: '75vw',
            transition : {
                type: "spring",
                duration: 0.5
            }
        }
    }

    const backdrop_open = {
        open: {
            opacity: 1,
            transition: {
                type: "spring"
            }
        },
        closed: { 
            opacity: 0,
            transition : {
                type: "spring",
                duration: 0.5,
                delay: 0.6
            }

        }
    }

    const ModalContainer = styled(motion.div)`
    
 `;

const ModalHeading = styled.div`
    text-align: center;
`;


const CloseModal = styled.div `
    cursor: pointer;
    margin-right: 20px;
    margin-top: 25px;
    width: 25%;
    text-align: right;
`;

const QuoteContainer = styled.div`
    margin: 0px 25px 20px;
    padding: 15px;
`;

const GenreLabel = styled.div `
    width: 100%;
    text-align: right;
    text-decoration: underline;
`;

const subTextLights = (lights, classnames) => classnames + ` ${lights === 'on' ? 'light-subtext' : 'dark-subtext'}`;

const List = styled.div `
    padding-top: 35px;
`;

const backgroundLights = (lights) => `${lights === 'on' ? "light-bg" : "dark-bg" }`;
const dimBackground = (lights) => `${lights === 'on' ? "light-dim" : "dark-dim" }`;
    
    return (
        <div style={modal} variants={backdrop_open}
        onClick={handleClick} className="modal-wrapper backdrop">
            <CloseModal style={{ marginRight: '20px', marginTop: '25px'}} 
            onClick={toggleOpen} className="exit-modal">
                <ArrowBackIcon className="dark-text"  />
            </CloseModal>
            <ModalContainer variants={modal_open}
            animate={isOpen ? 'open' : 'closed'}
            className={`modal ` + backgroundLights(lights)}>
                <div className="content">
                    <ModalHeading className="dark-text">
                        <h5>Full list of quotes by</h5>
                        <h1>{author}</h1>
                    </ModalHeading>
                    <List className={`list`}>
                        {quotes && quotes.map((quote) => (
                            <>
                                <QuoteContainer key={quote.id} 
                                className={`quote-container ` + dimBackground(lights) + ` ` + subTextLights(lights)}
                                >
                                    {quote.quoteText}
                                    <GenreLabel>
                                        {quote.quoteGenre}                                    
                                    </GenreLabel>
                                </QuoteContainer>
                            </>
                        ))}
                    </List>
                </div>
            </ModalContainer>
        </div>
    )
}

export default Modal
