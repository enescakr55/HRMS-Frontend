import React, { useEffect, useState } from 'react'
import CvService from '../../services/cvService';

export default function UserDescription({...props}) {
    const [description, setDescription] = useState("")
    let cvService = new CvService();
    useEffect(() => {
        cvService.getDescriptionByUserId(props.userId).then(r=>{
            setDescription(r.data.data.userdescription);
        })
    }, [])
    return (
        <div>
            <div style={{paddingTop:"20"}}>
            {description != null && <div><div className="cvTitleFont">Hakkında</div><div>{description}</div></div>}
            </div>
        </div>
    )
}
