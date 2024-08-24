import './App.css';
import Header from "./components/Header"
import Meme from "./components/Meme"

function App() {
  return (
   <div style={{maxWidth:'1000px', margin: '0 auto'}}>
    <Header />
    <Meme />
   </div>
  )
}

export default App;
