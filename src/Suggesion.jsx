import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Suggesion() {
  const [profile,setProfile] = useState(null);
  const [suggesions,setSuggesions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    fetch("http://localhost:3000/profile")
    .then(data => data.json())
    .then(data => setProfile(data))
    .catch(err => {console.log(err)})

    fetch("http://localhost:3000/suggestions")
    .then(data => data.json())
    .then(data => setSuggesions(data))
    .catch(err => {console.log(err)})

  },[]);

  const handleFollow = async (id, username, profilePic) => {
    axios.post('http://localhost:3000/followers', {"id":id, "username":username, "profilePic":profilePic})
    .then(alert("followed " + username))
    .catch(err => console.log(err))
  }
  return (
    <div >
      <div className="suggesion w-75 m-4 ">
        {profile ?       
    <div className="d-flex btn" onClick={() => navigate('/profile')}>
      <img className="profile_size rounded-circle" src={profile.profilePic} alt="profile pic" />
      <h5>{profile.username}</h5>
      <small className="ms-auto text-primary">switch</small>
    </div>
     : <p>Loading</p> }
      <br />
     <div className="d-flex">
        <h5>Suggested for you</h5>
        <b className="ms-auto">See All</b>
      </div>
      

      </div>


       {suggesions.length > 0 ?

        (<div>
          

            {suggesions.map((suggesion) => (
                <div className="my-1 m-4 w-75" key={suggesion.id}>
                    <div className="d-flex">
                        <img className="profile_size rounded-circle" src={suggesion.profilePic} alt="" />
                        <h5>{suggesion.username}</h5>
                        <a onClick={() => {handleFollow(suggesion.id,suggesion.username,suggesion.profilePic)}} className="text-primary ms-auto text-decoration-none">follow</a>
                    </div>

                </div>
            )
               
            )}

        </div>
        
    ) : (<div>loading</div>)
        
    }

    </div>

   
  )
}

export default Suggesion