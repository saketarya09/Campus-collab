import React, { useState, useEffect } from 'react';
import './Quotes.css'

const Quotes = () => {
    const [quote, setQuote] = useState("Loading...");
    const [author, setAuthor] = useState("Loading...");
    const api_url = "https://api.quotable.io/random";

    const fetchQuote = async () => {
        try {
            const response = await fetch(api_url);
            const data = await response.json();
            setQuote(data.content);
            setAuthor(data.author);
        } catch (error) {
            console.error("Error fetching quote:", error);
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    const tweet = () => {
        const tweetText = `${quote}\nBy --- ${author}`;
        const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
        window.open(tweetUrl, "Tweet Window", "width=600,height=300");
    };

//     const [mode, setMode] = useState('light');

//   // Function to toggle the mode
//   const toggleMode = () => {
//     if (mode === 'light') {
//       setMode('dark');
//       document.body.style.backgroundColor = 'black';
//       // Optionally change other styles or class names as needed
//     } else {
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//       // Optionally revert other styles or class names as needed
//     }
//   };

    return (
        <>
        <div className='quotify' >
        <div className="quote-box">
            <h2>Quote of the day</h2>
            <blockquote id="quote">{quote}</blockquote>
            <span id="author">{author}</span>
            <div>
                <button onClick={() => fetchQuote(api_url)}>New Quote</button>
                <button onClick={tweet}><img src="/twitter.png" alt="Twitter Logo" />Tweet</button>
{/* <button id="primary-btn" onClick={toggleMode}>{mode === 'light' ? 'Switch to Dark' : 'Switch to Light'}</button> */}
            </div>
            </div>
            </div>
</>
    );
};

export default Quotes;