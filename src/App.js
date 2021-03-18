import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Quote from './components/quote/Quote'
import LoadingScreen from './components/loader/LoadingScreen'
import Loader from './components/loader/Loader'
import axios from 'axios'
import { motion } from 'framer-motion';

function App() {
  const url = 'https://quote-garden.herokuapp.com/api/v3/quotes/random'


  const [ random, setRandom ] = useState(false);
  const [ quote, setQuote ] = useState(null);
  const [ loading, setLoading ] = useState(true);

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
      setLoading(false);
    }
  }, [url])


  if(random) {
    setQuote(null);
    handleRandom();
  }

  if(loading && !quote){
    return [
    (<LoadingScreen />),
    setLoading(false)]
  }

  return (
    <motion.div className="App">
      <Header handleRandom={handleRandom} />

      <main>
        {quote ? (
          <>
          <Quote text={quote.quoteText} setRandom={setRandom} 
              author={quote.quoteAuthor} genre={quote.quoteGenre} />
          </>
        ): (<Loader message="Randomizing"/>)}

      </main>

      <Footer />
    </motion.div>
  );
}

export default App;
