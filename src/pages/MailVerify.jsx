import React, { useState } from 'react'
import { useParams } from 'react-router';

export default function MailVerify() {
    let {code} = useParams();
    return (
        <div>
            <font>Doğrulama Kodunuz : {code}</font>
        </div>
    )
}
