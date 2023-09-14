import React, { useEffect, useState } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa'
import * as $ from 'jquery'
const sw = window.innerWidth;

export default function CollectionImage({collection, scrollPos, index, slideChange}) {
    const [slidePos, setSlide] = useState(0)
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
      if (scrollPos-1 !== index) {
        if (intervalId) {
          clearInterval(intervalId)
        }
        return;
      };
      const id = setInterval(() => {
        setSlide(p => (p + 1) % (collection.imgs.length-1));
      }, 10000);
  
      setIntervalId(id);
  
      return () => {
        if (intervalId) {
          clearInterval(intervalId);
        }
      };
    }, [scrollPos]);

    function changeSlide(dir) {
      $(`#cImg${index}${slidePos}`).css('animation', 'none')

      if (intervalId) {
        clearInterval(intervalId);
      }

      setSlide(p=>(p+dir+collection.imgs.length) % collection.imgs.length)

      const id = setInterval(() => {
        setSlide(p => (p + 1) % collection.imgs.length);
      }, 10000);
  
      setIntervalId(id);
    }

    useEffect(() => {
      slideChange(index, slidePos)
      console.log(index, slidePos)
      $(`#cImg${index}${slidePos}`).css('animation', 'slowbounce 20s linear infinite')
    }, [slidePos])
    
  return (
    <div className="collectionCont">
      <div className='cImgCont' style={{transform: `translateX(-${slidePos * sw}px)`}}>
          {collection.imgs.map((img, i) => {
              return (
                <div className="cImg">
                  <img loading='lazy' id={`cImg${index}${i}`} src={img} alt="" />
                </div>
              )
          })}
      </div>
      <div className="arrows" style={{color: ["white", "black"][collection.color[slidePos]]}}>
        <FaChevronLeft onClick={()=>changeSlide(-1)} style={{cursor: 'pointer'}} size={'clamp(10px, 3vw, 20px)'} />
        <FaChevronRight onClick={()=>changeSlide(1)} style={{cursor: 'pointer'}} size={'clamp(10px, 3vw, 20px)'} />
      </div>
      <div className="textSection" style={{color: ["white", "black"][collection.color[slidePos]]}}>
          <h1>{collection.title}</h1>
          {collection.text.map(t => {
            return <p>
              {t}<br /><br />
            </p>
          })}
      </div>
      <div className="backdrop" style={{background: `linear-gradient(36deg, ${["#ffffff4c", "black"][Math.abs(collection.color[slidePos]-1)]} 0%, transparent 80%)`}}></div>
    </div>
  )
}
