import { BrowserRouter,Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import API from "./API";
import { useEffect, useState } from "react";
import NewsDisplay from "./components/news/newsdisplay";

function App() {
  const [data,setData]=useState([])
  useEffect(() => {
    const fetchProducts = async () => {

      API.get("/")
      .then((res) => {
        setData(res.data);
      })
      .catch(console.error);
  };

  fetchProducts();
}, []);

  return (
   <div>
    
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home  data={data}/>} />
      <Route path="/:name" element={<NewsDisplay data={data}/>}/>
    </Routes>
   </BrowserRouter>
   </div>
  )
}

export default App
