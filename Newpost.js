import React from 'react'

const Newpost = ({handleSubmit,Title,setTitle,Content,setContent}) => {
  return (
    <div>
       <form action="" onClick={handleSubmit}>
        <label htmlFor="nam">title</label>
        <input type="text" id="nam" value={Title} onChange={(e)=>setTitle(e.target.value)}/>
        <label htmlFor="nam">content</label>
        <input type="text" id="nam" value={Content} onChange={(e)=>setContent(e.target.value)}/>
        <button type='submit'> Post</button>
       </form>
    </div>
  )
}

export default Newpost