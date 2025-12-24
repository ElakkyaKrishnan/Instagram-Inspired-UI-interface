import { useEffect,useState } from 'react'
import {useParams, Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function ViewStory() {
    const {id, tot} = useParams();
    const [story,setStory] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
      fetch(`http://localhost:3000/story/${id}`)  
      .then(data =>  data.json())
      .then(data => setStory(data))
      .catch(err => console.log(err))
    },[id]) 

    if(id > tot || id <=0){
      navigate('/')
    }

      const [video,setVideo] = useState(true);

    function unmute(){
      setVideo.muted = false;
      video.play();
      
    }
       
  return (
    <div>
        {story ? (
            <div className="d-flex justify-content-center align-items-center">
              <Link to={`http://localhost:5173/story/${Number(id)-1}/${tot}`}><i className="btn btn-secondary carousel-control-prev-icon" ></i></Link>
              <video className="vh-100" src={story.video} controls autoPlay loop muted playsinline></video>
              <Link to={`http://localhost:5173/story/${Number(id)+1}/${tot}`}><i className="btn btn-secondary carousel-control-next-icon"></i></Link>    
                          
            </div>
        ) : (
            <div>Loading...</div>
        )}
    </div>
  );
}

export default ViewStory