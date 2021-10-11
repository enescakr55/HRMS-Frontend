import React, { useEffect } from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import { Dimmer, Icon,Image, Loader } from 'semantic-ui-react';
import ProfilePictureService from '../services/profilePictureService';

export default function UploadProfileImage() {
    const [image, setImage] = useState([]);
    const [profileImage, setProfileImage] = useState([])
    const [dimmerState, setDimmerState] = useState(false);
    const inputFile = useRef(null);
    const openFileSelector = () => {
       inputFile.current.click();
      };
    const fileUpload = () =>{
        let profilePictureService = new ProfilePictureService();
        let formdata = new FormData();
        formdata.append('file',image);
        setDimmerState("active");
        profilePictureService.uploadImage(formdata).then(r=>{
            console.log(r);
            if(r.data.success){
                getProfilePicture();
            }else{
                alert("Profil fotoğrafı güncellenemedi");
            }
            setDimmerState("");
        },()=>{
            alert("Profil fotoğrafı güncellenemedi");
            setDimmerState("");
        })
    }
    function onChangeFile(event){
        setImage(event.target.files[0]);
        let profilePictureService = new ProfilePictureService();
        let formdata = new FormData();
        formdata.append('file',event.target.files[0]);
        setDimmerState(true);
        profilePictureService.uploadImage(formdata).then(r=>{
            console.log(r);
            if(r.data.success){
                toast.success("Profil fotoğrafı başarıyla güncellendi");
                getProfilePicture();
            }else{
                toast.error("Profil fotoğrafı güncellenemedi");
            }
            setDimmerState(false);
        },()=>{
            toast.error("Profil fotoğrafı güncellenemedi");
            setDimmerState(false);
        })
    }
    function getProfilePicture(){
        let profilePictureService = new ProfilePictureService();
        profilePictureService.getProfileImage().then(r=>{
            setProfileImage(r.data.data.imageUrl);
        })
    }
    useEffect(() => {
        getProfilePicture();
    }, [])
    return (
        <div style={{display:"inline-block",verticalAlign:"top"}}>
            <div style={{position:"relative",display:"inline-block"}}>
            <img className="editppdiv" src={profileImage} style={{display:"block",maxWidth:"200px",minWidth:"200px",width:"100%",borderRadius:"50%",background:"black",objectFit:"contain",height:"200px"}}/>
            <div onClick={openFileSelector} className="ppuploaddiv" style={{maxWidth:"200px",width:"100%",left:"50%",top:"50%",transform:"translate(-50%, -50%)",position:"absolute",background:"gray",textAlign:"center",height:"100%",borderRadius:"50%",paddingTop:"30%",opacity:"0.8"}}><Icon style={{zIndex:"2"}}name="camera" size="huge"></Icon><br/><font style={{fontWeight:"bold"}}>Değiştir</font></div>
            <Dimmer style={{borderRadius:"50%"}} active={dimmerState} ><Loader indeterminate>Fotoğraf Yükleniyor</Loader></Dimmer>
            </div><br/>
            
            { /*<label htmlFor="file" ><Icon name="image" size="huge"></Icon><font style={{fontWeight:"bold"}}>Fotoğraf Seç </font></label> */}
            <input type='file' id='file' ref={inputFile} style={{display: 'none'}} onChange={onChangeFile.bind(this)}/>
            { /*<button >Resim seç</button> <button onClick={()=>fileUpload()}>Yükle</button> */}
            
        </div>
    )
}
