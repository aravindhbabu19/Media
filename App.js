
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Header from './Header';
import Missing from './Missing';
import Navi from './Navi';
import Post from './Post';
import Newpost from './Newpost';
import Postpage from './Postpage';
import About from './About';
import { useEffect, useState } from 'react';
import {format} from 'date-fns'
import Postlayout from './Postlayout';
function App() {
  const navigate=useNavigate()
  const [Title,setTitle]=useState('')
  const [Content,setContent]=useState('')
  const [search,setSearch]=useState('')
  const [searchResult,setSearchResult]=useState(null)
  const [post,setPost]=useState([
    {
      id:1,
      title:'My First Post',
      date:'May 23 2023',
      content:'insta reel'
    },
    {
      id:2,
      title:'My Second Post',
      date:'Jun 23 2023',
      content:'insta start'
    },
    {
      id:3,
      title:'My Third Post',
      date:'Jul 23 2023',
      content:'insta story'
    },
    {
      id:4,
      title:'My Fourth Post',
      date:'Aug 23 2023',
      content:'insta post'
    }
  ])
  const handleSubmit=(e)=>{
    e.preventDefault()
    const id=post.length ? post[post.length-1].id+1:1
    const date=format(Date(),'dd-mm-yyyy')
    const addn={id,title:Title,date,content:Content}
    const result=[...post,addn]
    setPost(result)
    navigate('/')
  }

  const handleDelete=(id)=>{
  const result=post.filter((po)=>po.id!==id)
  setPost(result)
  navigate('/')
  }

  useEffect(()=>{
    const filteredResult=post.filter((po)=>(po.title).toLowerCase().includes(search.toLowerCase())||(po.content).toLowerCase().includes(search.toLowerCase()))
    setSearchResult(filteredResult)
  },[post,search])

  return (
    <div>
          <Navi search={search} setSearch={setSearch}/>

  <Routes>
    <Route path='/' element={<Home post={searchResult} />} />
    <Route path='/Head' element={<Header />} />
    <Route path='/Miss' element={<Missing />} />
    
    <Route path='/Pos' element={<Post />} />
    <Route path='/New' element={<Postlayout />} >
    <Route index element={<Newpost handleSubmit={handleSubmit} Title={Title} setTitle={setTitle} Content={Content} setContent={setContent}/>} />
    <Route path=':id' element={<Postpage post={post} handleDelete={handleDelete} />} />
    </Route>
  
    <Route path='/Abo' element={<About />} />
  </Routes>
    </div>
  );
}

export default App;
