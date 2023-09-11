import React, { useEffect, useRef, useState } from 'react'
import $ from 'jquery';

import vid from './content/carat-haus-vid.mp4'

import ring1 from './content/rings/carat29.jpeg'
import ring2 from './content/rings/carat32.jpeg'
import ring3 from './content/rings/carat25.jpeg'
import ring4 from './content/rings/carat26.jpeg'
import ring5 from './content/rings/carat27.jpeg'
import ring6 from './content/rings/carat31.jpeg'

import tanPic1 from './content/tan collec/ctc1.jpeg'
import tanPic2 from './content/tan collec/ctc2.jpeg'
import tanPic3 from './content/tan collec/ctc3.jpeg'
import tanPic4 from './content/tan collec/ctc4.jpeg'
import tanPic5 from './content/tan collec/ctc6.jpeg'
import tanPic6 from './content/tan collec/ctc5.jpeg'

import cuban0 from './content/cubans/cc6.jpeg'
import cuban1 from './content/cubans/cc0.jpeg'
import cuban2 from './content/cubans/cc1.jpeg'
import cuban3 from './content/cubans/cc3.jpeg'
import cuban4 from './content/cubans/cc4.jpeg'
import cuban5 from './content/cubans/cc5.jpeg'
import cuban6 from './content/cubans/cc2.jpeg'

import fine1 from './content/fine jewellery/cfj1.jpeg'
import fine2 from './content/fine jewellery/cfj2.jpeg'
import fine3 from './content/fine jewellery/cfj3.jpeg'
import fine4 from './content/fine jewellery/cfj4.jpeg'
import fine5 from './content/fine jewellery/cfj5.jpeg'

import nat1 from './content/diamonds/cd1.jpeg'
import nat2 from './content/diamonds/cd2.jpeg'
import nat3 from './content/diamonds/cd3.jpeg'

import lab1 from './content/diamonds/cd6.jpeg'
import lab2 from './content/diamonds/cd5.jpeg'
import lab3 from './content/diamonds/cd4.jpeg'

export default function Homepage({scrolled, forceToTop, makeNavBlack, makeNavWhite}) {
  const wb = ['white', 'black']
  const collections = [
    {
      title: 'Engagement Rings',
      text: [
        'Discover the magic of our Engagement Ring Collection, where your love story takes center stage. Each ring is a unique masterpiece, meticulously crafted to your desires, and can be adorned with either lab-grown or natural diamonds.',
        "Why choose us? Because these rings transcend tradition, becoming heirlooms that capture your love's essence for generations to come. Our commitment to quality ensures every detail is perfect, making your special day an unforgettable experience. When you choose one of our custom-made engagement rings, you're not just buying jewellery; you're investing in a symbol of your eternal love, a testament to your unique bond that will shine as brilliantly as your future together."  
      ],
      imgs: [ring1, ring2, ring3, ring4, ring5, ring6],
      color: 0
    },
    {
      title: 'Rose collection',
      text: ['Discover our captivating Rose Collection, seamlessly blending contemporary design with timeless elegance. Each piece exudes a harmonious fusion of modern aesthetics and classic charm, making it the perfect choice for those who seek sophistication with a modern twist.'],
      imgs: [tanPic1, tanPic2, tanPic3, tanPic4, tanPic5, tanPic6],
      color: 0
    },
    {
      title: 'Cuban collection',
      text: ["Introducing our Cuban Collection, a modern twist on the classic Cuban link chain. Adorned with your choice of lab or natural diamonds, it merges tradition with luxury, allowing you to wear a piece of history reimagined for the modern era. Explore the allure of Cuba's heritage in this captivating and elegant collection."],
      imgs: [cuban0, cuban1, cuban2, cuban3, cuban4, cuban5, cuban6],
      color: 0
    },
    {
      title: 'Fine Jewellery',
      text: ["Experience the regal allure of our High Jewelry Collection, where each piece is a treasure fit for royalty. Adorn yourself in statement pieces adorned with exquisite gemstones, and elevate your style to a level of opulence fit for a princess. Explore this curated selection of jewelry, and let it be the crowning touch to your most majestic moments."],
      imgs: [fine1, fine2, fine3, fine4, fine5],
      color: 1
    },
    {
      title: 'Natural Diamonds',
      text: ["For those who appreciate the timeless allure of natural diamonds, our collection offers hand-picked gems that are unparalleled in their rarity and radiance. Our experts curate these diamonds with utmost care, ensuring they meet the most stringent criteria for excellence. Every natural diamond we use is GIA certified, a testament to their exceptional quality and breathtaking beauty. Choose a piece of jewelry that embodies the essence of nature's wonders and craftsmanship's artistry with our exquisite natural diamond collection."],
      imgs: [nat1, nat2, nat3],
      color: 1
    },
    {
      title: 'Lab-Grown Diamonds',
      text: ["Elevate your jewelry experience with our lab-grown diamonds, renowned for their exceptional clarity and brilliance. Each diamond in our collection is IGI certified, assuring you of their authenticity and top-tier quality. We take pride in offering sustainable and ethical alternatives without compromising on the mesmerizing beauty of these gems. Discover the future of luxury with lab-grown diamonds that exemplify the pinnacle of modern craftsmanship."],
      imgs: [lab1, lab2, lab3],
      color: 1
    }
  ]
  var deltaY = 0;
  var deltaX = 0;
  var swipeStart = null;

  const atTop = useRef(true)
  const scrollPos = useRef(0)
  const slidePos = useRef(2)

  const sh = window.innerHeight;
  const sw = window.innerWidth;
  $(`#img${scrollPos.current}0`).css('top', ($(`#img${scrollPos.current}0`).height()/-2) + (sh/2) + 100)
  $(`#img${scrollPos.current}1`).css('top', ($(`#img${scrollPos.current}1`).height()/-2) + (sh/2) + 100)

  function vertScroll() {
    let dir = deltaY / Math.abs(deltaY);

    console.log(scrollPos.current)
 
    deltaY = 0;

    $(`#img${scrollPos.current-1}0`).stop();
    $(`#img${scrollPos.current-1}1`).stop();
    
    slidePos.current = 2;

    let newScrollPos = scrollPos.current + dir;
    
    if (newScrollPos < 0) {
      newScrollPos = 0;
    } else if (newScrollPos > 6) {
      newScrollPos = 6;
    }
    
    scrollPos.current = newScrollPos;
    scrollPosChange();
  }

  function horzScroll() {
    $(`#img${scrollPos.current-1}0`).stop(true, false);
    $(`#img${scrollPos.current-1}1`).stop(true, false);
    if (+$(`#img${scrollPos.current-1}1`).css('opacity') === 1) {
      act3();
    } else if (+$(`#img${scrollPos.current-1}1`).css('opacity') === 0) {
      act2();
    } else {
      $(`#img${scrollPos.current-1}1`).animate({opacity: 0}, 750, 'linear', () => {
        act2()
      })
    }
  }

  function act1() {
    $(`#img${scrollPos.current-1}0`).stop();
    $(`#img${scrollPos.current-1}1`).stop();
    $(`#img${scrollPos.current-1}0`).animate({top: ($(`#img${scrollPos.current-1}0`).height()/-2) + (sh/2) - 100}, 24000, 'linear', () => {
      act2();
    })
  }

  function act2() {
    $(`#img${scrollPos.current-1}1`).animate({opacity: 1}, 750, 'linear', () => {
      if (slidePos.current > collections[scrollPos.current-1].imgs.length-1) {
        slidePos.current = 0;
      }
      $(`#img${scrollPos.current-1}0`).attr('src', collections[scrollPos.current-1].imgs[slidePos.current])
      $(`#img${scrollPos.current-1}0`).css('top', ($(`#img${scrollPos.current-1}0`).height()/-2) + (sh/2) + 100)
      slidePos.current = slidePos.current + 1;
      $(`#img${scrollPos.current-1}1`).animate({top: ($(`#img${scrollPos.current-1}1`).height()/-2) + (sh/2) - 100}, 24000, 'linear', () => {
        act3();
      })
    })
  }

  function act3() {
    $(`#img${scrollPos.current-1}1`).animate({opacity: 0}, 750, 'linear', () => {
      if (slidePos.current > collections[scrollPos.current-1].imgs.length-1) {
        slidePos.current = 0;
      }
      $(`#img${scrollPos.current-1}1`).attr('src', collections[scrollPos.current-1].imgs[slidePos.current])
      $(`#img${scrollPos.current-1}1`).css('top', ($(`#img${scrollPos.current-1}1`).height()/-2) + (sh/2) + 100)
      slidePos.current = slidePos.current + 1;
      act1();
    })
  }

  function scroll() {
    $('#home')[0].scrollTo({
      left: 0,
      top: scrollPos.current * window.innerHeight,
      behavior: 'smooth'
    })

    if (atTop.current && scrollPos.current !== 0) {
      scrolled()
      atTop.current = false;
    } else if (!atTop.current && scrollPos.current === 0) {
      scrolled();
      atTop.current = true;
    }

    if (scrollPos.current !== 0) {
      setTimeout(() => {
        act1();
      }, 500)
    }
  }
  
  useEffect(() => {
    $('#home')[0].addEventListener('wheel', e => {
      e.preventDefault();
      deltaY += e.deltaY;
      let fraction = deltaY / sh;
      if (Math.abs(fraction) < 0.4) return;
      vertScroll()
    })

    $('#home')[0].addEventListener('click', e => {
      horzScroll();
    })
  
    $('#home')[0].addEventListener('touchstart', e => {
      e.preventDefault();
      swipeStart = {x: e.touches[0].clientX, y: e.touches[0].clientY};
    })
    
    $('#home')[0].addEventListener('touchend', e => {
      e.preventDefault();
      deltaY = e.changedTouches[0].clientY - swipeStart.y
      deltaX = e.changedTouches[0].clientX - swipeStart.x
      let fractionY = deltaY / sh;
      let fractionX = deltaX / sw;
      if (Math.abs(fractionY) > 0.4) {
        vertScroll();
      } else if (fractionX > 0.4) {
        horzScroll();
      }
      deltaX = 0;
      deltaY = 0;
      swipeStart = null;
    })

    // $('#home')[0].addEventListener('touchmove', e => {
    //   // e.preventDefault();
    //   if (swipeStart) {
    //     deltaSwipe = e.touches[0].clientY - swipeStart;
    //   }
    // })
  }, [])

  function scrollPosChange() {

    if (scrollPos.current > 3) {
      makeNavBlack();
    } else {
      makeNavWhite();
    }
    
    $(`#img${scrollPos.current-1}0`).stop();
    $(`#img${scrollPos.current-1}1`).stop();
    $(`#img${scrollPos.current-1}0`).css('top', ($(`#img${scrollPos.current-1}0`).height()/-2) + (sh/2) + 100)
    $(`#img${scrollPos.current-1}1`).css('top', ($(`#img${scrollPos.current-1}1`).height()/-2) + (sh/2) + 100)
    
    scroll()
  }

  useEffect(() => {
    $(`#img${scrollPos.current-1}0`).stop();
    $(`#img${scrollPos.current-1}1`).stop();
    scrollPos.current = 0;
    scrollPosChange();
    deltaY = 0;
    atTop.current = true;
    // setAtTop(true)
  }, [forceToTop])
  
  return (
    <div className='page' id='home'>
      <div className="section" style={{overflowY: 'hidden'}}>
      {/* <video autoplay loop muted playsinline className="homeVid">
        <source src={vid} type="video/mp4" />
      </video> */}
        <video id='vid' className='homeVid' type="video/mp4" src={vid} controls={false} autoPlay loop muted playsInline></video>
      </div>
      <div className="section" id='collections'>
        {collections.map((c, i) => {
          return (
            <div className="collection">
              <img className='cImg' src={c.imgs[0]} alt="" id={`img${i}0`} />
              <img className='cImg hide' src={c.imgs[1]} alt="" id={`img${i}1`} />
              <div className="textSection" style={{color: wb[c.color]}}>
                <h1>{c.title}</h1>
                {c.text.map(t => {
                  return <p>
                    {t}<br /><br />
                  </p>
                })}

              </div>
              <div className="backdrop" style={{background: `linear-gradient(36deg, ${wb[Math.abs(c.color-1)]} 0%, transparent 80%)`}}></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
