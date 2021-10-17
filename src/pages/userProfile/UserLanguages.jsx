import React, { useEffect, useState } from 'react'
import CvService from '../../services/cvService'
import { Icon, Popup } from 'semantic-ui-react';
import AuthService from '../../services/authService';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
export default function UserLanguages({...props}) {
    let cvService = new CvService();
    const [languages, setLanguages] = useState([]);
    useEffect(() => {
        cvService.getLanguagesByUserId(props.userId).then(r=>{
            setLanguages(r.data.data);
        })
    }, [])
    
    const [me, setMe] = useState([]);
    let authService = new AuthService();
    useEffect(() => {
      authService.me().then((r) => {
        setMe(r.data.data);
        console.log("me");
        console.log(r);
      });
    }, []);
    function deleteLanguage(language){
      cvService.deleteMyLanguage(language.languageId).then((result)=>{
        result.data.success == true ? toast.success("Başarıyla silindi") : toast.error("Bir hata oluştu"); 
      })
    }
    return (
        <div>
        <div className="cvTitleFont">Bildiği Diller {me != undefined && me.id == props.userId && (<Link to="/user-profile-edit/language"><font className="userProfileEditCSS" style={{float:"right"}}><Icon name="add"></Icon>Dil Ekle</font></Link>)}</div>
        {languages.map((r) => 
        
        (
          <div className="marginLeft15" key={r.languageId}>
            <Icon name="dot circle"></Icon>
            <div className="cvSchoolsListClass marginRight5">
              <font className="cvBlackFont"> </font>
              <font className="cvSchoolsFontSchoolName">{r.languageName} </font>
            </div>
            <div className="marginLeft15" style={{display:"inline-block",verticalAlign:"top"}}>
            <div className="cvSchoolsListClass">
              <font className="cvBlackFont"> </font>
              {r.languageLevel > 0 ? (<font><Icon name="star" color="yellow"></Icon></font>) : (<font><Icon name="star outline" color="grey"></Icon></font>)}
              {r.languageLevel > 1 ? (<font><Icon name="star" color="yellow"></Icon></font>) : (<font><Icon name="star outline" color="grey"></Icon></font>)}
              {r.languageLevel > 2 ? (<font><Icon name="star" color="yellow"></Icon></font>) : (<font><Icon name="star outline" color="grey"></Icon></font>)}
              {r.languageLevel > 3 ? (<font><Icon name="star" color="yellow"></Icon></font>) : (<font><Icon name="star outline" color="grey"></Icon></font>)}
              {r.languageLevel > 4 ? (<font><Icon name="star" color="yellow"></Icon></font>) : (<font><Icon name="star outline" color="grey"></Icon></font>)}
            </div>
          </div>
          {me != undefined && me.id == props.userId && <Popup content="Sil" position="right center" trigger={ <Icon onClick={()=>deleteLanguage(r)} name="trash" className="userProfileMiniCSS"></Icon>}></Popup>}
          </div>
        ))}
      </div>
    )
}
