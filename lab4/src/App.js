import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Header, Profile, News, Login } from "./components"
import { useEffect, useState } from "react"

function App() {

  const [news, setNews] = useState([])

  useEffect(() => {
   const f=async()=> { 
     await fetch('https://jsonplaceholder.typicode.com/posts')
     .then(response => response.json())
     .then(data => setNews(data.slice(0,13)))
     .catch(console.error)
   }
    f().catch(console.error)
    localStorage.setItem('isLoginned','false')
  }, [])

  console.log(news)
  
  return (
    <Router>
      <Header/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/news" element={<News news={news} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
