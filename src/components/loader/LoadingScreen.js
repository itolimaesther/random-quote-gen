import React from 'react'
import Loader from './Loader'

function LoadingScreen() {
    return (
        <div className="loading">
            <div className="container">
              <Loader message="Finding your daily inspiration" />  
            </div>
        </div>
    )
}

export default LoadingScreen
