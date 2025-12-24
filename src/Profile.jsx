import axios from 'axios'
import { useState, useEffect } from 'react'

function profileuser() {
    const [profileuser,setProfileuser] = useState(null)
    const [followers,setFollowers] = useState([])
    const [unfollow, setUnfollow] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:3000/profile')
        .then(data => {setProfileuser(data.data);  console.log(data)})
        .catch(err => console.log(err))


        axios.get('http://localhost:3000/followers')
        .then(data => setFollowers(data.data))
        .catch(err => console.log(err))


    },[unfollow])

    function HandleOnChange(e){
        setProfileuser(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
       
    }

    const handleUpdate = async() =>{
        axios.put('http://localhost:3000/profile',profileuser)
        .then(console.log("updated"))
        .catch(err => console.log(err))
    }

    const handleUnFollow = async(id,username) => {
        axios.delete(`http://localhost:3000/followers/${id}`)
        .then(alert("you unfollowed "+username))
        .then(setUnfollow(!unfollow))
        .catch(err => console.log("error in unfollowing:"+err))
    }

    
  return (
    <div className="m-5">
        {profileuser?(
            <div>
                <img className="profile rounded-circle" src={profileuser.profilePic} alt="profileuser" />
                <h5>{profileuser.username}</h5>
                <input type="text"
                        name="username"
                        value={profileuser.username}
                        className="form-control my-4"
                        onChange={HandleOnChange}
                        placeholder="username" 
                />
                <input type="text"
                        name="profilePic"
                        value={profileuser.profilePic}
                        className="form-control my-4"
                        onChange={HandleOnChange}
                        placeholder="pic url"
                        
                />
                <button className="btn btn-primary my-2 " onClick={handleUpdate}>Update</button>

            </div>
        ):(
            <div>Loading...</div>
        )}

        <hr />
        <h5 className="text-center w-20">Following</h5>
        <br />

        {followers.length >0 ?
        (
            

            followers.map(follower => (
                
              <div className="my-2 m-4 w-20" key={follower.id}>
                    <div className="d-flex">
                        <img className="profile_size rounded-circle" src={follower.profilePic} alt="" />
                        <h5>{follower.username}</h5>
                        <button onClick={() => {handleUnFollow(follower.id,follower.username)}} className="btn p-0 m-0 text-primary ms-auto text-decoration-none ">un follow</button>
              </div>
              </div>
               
                 
               

            
            ))

        ):(
            <div>Loading followers</div>
        )}




    </div>
  )
}

export default profileuser