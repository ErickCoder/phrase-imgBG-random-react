import { useState } from "react";
import "./App.css";
import dbQuotes from "./db/quote.json";
import { getRandom } from "./utils/random";
import QuoteBox from "./components/QuoteBox";
const bgImages=["bg1","bg2","bg3","bg4","bg5","bg6"]

function App() {
  const [quote, setQuote] = useState(getRandom(dbQuotes));
  const [bgImg, setBgImg] = useState(getRandom(bgImages))

  const handleChangeQuote=()=>{
    setQuote(getRandom(dbQuotes));
    setBgImg(getRandom(bgImages));
  }

  return (
    <main className={`app ${bgImg}`}>
      <section className="app__container">
        <h1 className="title">Pura Vida</h1>

        <QuoteBox handleChangeQuote={handleChangeQuote} phrase={quote.phrase} profession={quote.profession} date={quote.date} author={quote.author} />

        <footer>
      {/*     <h3>Author: {quote.author}</h3> */}
        </footer>
      </section>
    </main>
  );
}

export default App;
