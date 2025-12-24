import React from 'react'
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="m-1 position-fixed">

      <div className="d-flex flex-column gap-3">
        <img className="insta-text-img" src="src\assets\insta_text.png" alt="Instagram" />
        <button className="btn text-start" onClick={() => {navigate('/')}}><i className="bi bi-house-door "></i>Home</button>
        <button className="btn text-start" onClick={() => {navigate('/defaultpage')}}><i className="bi bi-search"></i>Search</button>
        <button className="btn text-start" onClick={() => {navigate('/defaultpage')}}><i className="bi bi-compass"></i>Explore</button>
        <button className="btn text-start" onClick={() => {navigate('/defaultpage')}}><i className="bi bi-play-btn"></i>Reels</button>
        <button className="btn text-start" onClick={() => {navigate('/defaultpage')}}><i className="bi bi-chat-dots"></i>Message</button>
        <button className="btn text-start" onClick={() => {navigate('/defaultpage')}}><i className="bi bi-heart"></i>Notification</button>
        <button className="btn text-start" onClick={() => {navigate('/defaultpage')}}><i className="bi bi-plus-square"></i>Create</button>
        <button className="btn text-start" onClick={() => {navigate('/profile')}}><i className="bi bi-person-circle"></i>Profile</button>
      </div>

      <div className="d-flex flex-column position-fixed bottom-0 mb-3 gap-3">
        <button className="btn text-start" onClick={() => {navigate('/defaultpage')}}><i className="bi bi-threads"></i>Thread</button>
        <button className="btn text-start" onClick={() => {navigate('/defaultpage')}}><i className="bi bi-list"></i>More</button>
      </div>
    </div>
  );
}

export default Sidebar