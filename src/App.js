import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Quote from './components/quote/Quote'
// import Author from './components/quote/Quote'
import axios from 'axios'

function App() {
  const url = 'https://quote-garden.herokuapp.com/api/v3/quotes/random'


  const [ random, setRandom ] = useState(false);
  const [ quote, setQuote ] = useState(null);

  function handleRandom() {
    window.location.reload();
  }

  useEffect(() => {
    axios.get(url).then((res) => {
      const quoteRes = res.data.data[0]
      setQuote(quoteRes)
    }).catch((error) => {
      console.log(error)
    })

    return () => { 
      setRandom(false);
    }
  }, [url])


  if(random) {
    setQuote(null);
    handleRandom();
  }

  return (
    <div className="App">
      <Header handleRandom={handleRandom} />

      <main>
        {quote ? (
          <>
          <Quote text={quote.quoteText} setRandom={setRandom} 
              author={quote.quoteAuthor} genre={quote.quoteGenre} />
          </>
        ): (console.log("hellooo"))}

        {/* <Author fullname={quote.author} genre={quote.genre} /> */}
      </main>

      <Footer />
    </div>
  );
}

export default App;
