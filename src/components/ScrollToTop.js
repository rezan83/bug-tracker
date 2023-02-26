import React, {useEffect, useState} from 'react'

function ScrollToTop() {
    const [ ScrollToTop, setScrollToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 100) {
                setScrollToTop(true)
            } else{
                setScrollToTop(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" 
        })
    }
  return (
    <div className='scroll__btn'>
   {ScrollToTop && (
<button style={{
    position: "fixed",
    bottom: "50px",
    right: "50px",
    height: "50px",
    width: "50px",
    fontSize: "50px"
}} onClick = {scrollUp}>⬆️</button>)
}
   </div>
   )
 
}

export default ScrollToTop
