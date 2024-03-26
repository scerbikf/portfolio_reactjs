import React, {useEffect, useState} from "react";

function ProgressBar() {

    const [scrollPercentage, setScrollPercentage] = useState(0);

      useEffect(()=>{

        const handleScroll = ()=>{
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollY = window.scrollY;
            const scrollPercent = (scrollY / (documentHeight - windowHeight))*100 
    
            setScrollPercentage(scrollPercent)
        }
    
        window.addEventListener("scroll", handleScroll);
    
        return()=>{
            window.removeEventListener("scroll", handleScroll)
        }
    
      },[])

  return (
      <progress className="progressNav" max="100" value={scrollPercentage}></progress>
  )
}

export default ProgressBar