import React, { useEffect, useState } from 'react';
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    link: "",
    publishDate: "",
    type: ""
  });

  useEffect(() => {
    const fetchVideo = async () => {
      if (!id) {
        console.error("No video ID provided");
        return;
      }
  
      try {
        const docRef = doc(db, "Lessons", id);
        const videoSnap = await getDoc(docRef);
  
        if (videoSnap.exists()) {
          console.log("Video data:", videoSnap.data());
          setApiData(videoSnap.data());
        } else {
          console.error("Video not found");
        }
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };
  
    fetchVideo();
  }, [id]);
  

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="Back" onClick={() => navigate(-2)} />
      <iframe 
        width='90%' 
        height='90%' 
        src={`https://www.youtube.com/embed/${apiData.link}`} 
        title={apiData.name} 
        frameBorder='0' 
        allowFullScreen
      ></iframe>
      <div className="player-info">
        console.log(apiData);
        <p>{apiData.publishDate?.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
