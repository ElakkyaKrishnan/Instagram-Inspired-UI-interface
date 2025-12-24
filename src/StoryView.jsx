import { useEffect,useState } from 'react'
import {useParams} from 'react-router-dom'

function StoryView() {
    const {id} = useParams();
    const [story,setStory] = useState(null);

    useEffect(() => {
      fetch(`http://localhost:3000/story/${id}`)  
      .then(data =>  data.json())
      .then(data => setStory(data))
      .catch(err => console.log(err))
    },[id]) 
       
  return (
    <div>
        {story ? (
            <div>
                <h1>{story.user.username}</h1>
                <img src={story.user.profilePic} alt="story" />
                
            </div>
        ) : (
            <div>Loading...</div>
        )}
    </div>
  )
}

export default StoryView