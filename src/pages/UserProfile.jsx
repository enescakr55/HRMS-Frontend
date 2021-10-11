import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import CvService from '../services/cvService';

export default function UserProfile() {
   
    useEffect(() => {
        let cvService = new CvService();
        cvService.getDescriptions().then(response=>{
            console.log("asd");
            console.log(response.data.data);
        })

    }, [])
    let {userId} = useParams();
    return (
        <div>
            <div>
                {userId}
            </div>
        </div>
    )
}
