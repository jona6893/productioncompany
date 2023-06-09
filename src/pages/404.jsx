import React, { useEffect } from 'react'
import { useRouter } from "next/router";


function FourOFour() {
    
    const router = useRouter();
    useEffect(() =>{
        router.push("/");

    })
    
  return (
    <div>404</div>
  )
}

export default FourOFour;