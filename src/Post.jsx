import React, { useState , useEffect} from 'react'

function Post() {
    const [post,setPost] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/post")
        .then(data => data.json())
        .then(data => setPost(data))
        .catch(err => console.log("err"));

    },[])

    
  return (
    <div className="d-flex justify-content-center">
        {post.length > 0 ?

        (<div>
          

            {post.map((post) => (
                <div className="my-3" key={post.id}>
                    <div className="d-flex">
                        <img className="profile_size rounded-circle" src={post.user.profilePic} alt="" />
                        <h5>{post.user.username}</h5>
                    </div>
                    <img className="post_size" src={post.imageUrl} alt="" />
                    <div>
                        <i className="bi bi-heart"></i>
                        <i className="bi bi-chat"></i>
                        <i className="bi bi-send"></i>
                    </div>
                    <div>
                        <b>{post.likes} Likes</b>
                    </div>
                    <p>{post.caption}</p>
                   
                </div>
            )
               
            )}

        </div>
        
    ) : (<div>loading</div>)
        
    }
    </div>
  )
}

export default Post