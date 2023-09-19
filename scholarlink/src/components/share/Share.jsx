import React from 'react';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import "./share.scss";
import { useState } from 'react';
import { Close } from '@mui/icons-material';

const Share = () => {
    const [file, setFile] = useState(null);

    const removeImage = () =>{
        setFile(null);
    };
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="/assets/persons/user.jpg" alt="" className="shareProfileImg" />
                <input 
                type="text" name="" 
                placeholder='Whats on your mind Pascal?'
                className="shareInput" />
            </div>
            <hr className="shareHr" />
        {file && (
            <div className='shareImgContainer'>
                <img src={URL.createObjectURL(file)} alt="" className='shareImg'/>
            <Close className='shareCancelImg' onClick={removeImage}/>
            </div>
        )}
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <VideoCameraFrontIcon className='shareIcon' style={{color:"#bb0000f2"}}/>
                        <span className="shareOptionText">Live Video</span>
                    </div>
                    <label htmlFor='file' className="shareOption">
                        <PermMediaIcon className='shareIcon' style={{color:"#2e0196f1"}} />
                        <span className="shareOptionText">Photo/Video</span>
                        <input 
                        type="file" 
                        id='file' 
                        accept='.jpg, .png, .jpeg' 
                        style={{display: "none"}}
                        onChange={(e)=>setFile(e.target.files[0])}/>
                    </label>
                    <div className="shareOption">
                        <EmojiEmotionsIcon className='shareIcon' style={{color:"#bfc600ec"}} />
                        <span className="shareOptionText">Feelings/Activity</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Share