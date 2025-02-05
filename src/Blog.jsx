import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from './Popup.jsx'
 
function Blog({ datas, addCom, deleteBlog ,editBlog}) {
  let [com, setCom] = useState("");
  let [getId,setId]=useState();
  function add(index) {
    addCom(com, index);
  }
 
  function deletePost(index) {
    deleteBlog(index);  
  }
 
  let [isEdit,setEdit]=useState(false)
 
  function changeEdit(index){
    setId((preId)=>{ return preId=index})
    setEdit(true)
  }
 
  function closeEdit(){
    setEdit(false)
  }
 
  function passEdit(data){
    editBlog(data,getId)
  }
 
  return (
    <>
   <>
  {isEdit ? <Popup passEdit={passEdit} closeEdit={closeEdit}/>   : null}
  </>
 
    <div className="blog-container">
   
      {datas.map((d, index) => (
        <div key={index} className="blog-item">
          <button
            className="delete-btn"
            onClick={() => deletePost(index)}
          >
            Delete
          </button>
          <button
            className="edit-btn"
            onClick={()=>changeEdit(index)}
          >
            Edit
          </button>
          <div className="blog-content">
            <div className="blog-image">
              <img src={d.url} alt={d.title} />
            </div>
            <div className="blog-text">
              <h2>{d.title}</h2>
              <p>Email: {d.email}</p>
           
     
              <Link to={`/blog/${index}`}>Read Blog</Link>
              <p></p>
              <label htmlFor="comments">Add Comments</label>
              <input
                type="text"
                placeholder="Add a comment"
                onChange={(e) => setCom(e.target.value)}
              />
              <button onClick={() => add(index)}>Add Comment</button>
              <p>Comments:</p>
              <ol>
                {
                  d.Comments?.map((dd, i) => {
                    return <li key={`${index}:${i}`}>{dd}</li>
                  })
                }
              </ol>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
 
export default Blog;