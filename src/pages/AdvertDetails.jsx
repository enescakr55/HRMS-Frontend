import React from 'react'
import { useParams } from 'react-router'

export default function AdvertDetails() {
    let {advertId} = useParams();
    return (
        <div>
            {advertId}
        </div>
    )
}
