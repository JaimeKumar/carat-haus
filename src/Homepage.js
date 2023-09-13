import React, { useEffect, useRef, useState } from 'react'
import $ from 'jquery';
import Logo from './Logo';
import vid from './content/carat-haus-vid-small.mp4'
import Collection from './Collection';

const collections = [
  {
    title: 'Engagement Rings',
    // text: [
    //   'Discover the magic of our Engagement Ring Collection, where your love story takes center stage. Each ring is a unique masterpiece, meticulously crafted to your desires, and can be adorned with either lab-grown or natural diamonds.',
    //   "Why choose us? Because these rings transcend tradition, becoming heirlooms that capture your love's essence for generations to come. Our commitment to quality ensures every detail is perfect, making your special day an unforgettable experience. When you choose one of our custom-made engagement rings, you're not just buying jewellery; you're investing in a symbol of your eternal love, a testament to your unique bond that will shine as brilliantly as your future together."  
    // ],
    text: [
      'Discover the magic of our Engagement Ring Collection, where your love story takes center stage. Each ring is a unique masterpiece, meticulously crafted to your desires, and can be adorned with either lab-grown or natural diamonds.'
    ],
    imgs: [
      require('./collections/rings/carat29.jpeg'),
      require('./collections/rings/carat32.jpeg'),
      require('./collections/rings/carat25.jpeg'),
      require('./collections/rings/carat26.jpeg'),
      require('./collections/rings/carat27.jpeg'),
      require('./collections/rings/carat31.jpeg')
    ],
    color: [0, 0, 0, 0, 0, 0]
  },
  {
    title: 'Rose collection',
    text: ['Discover our captivating Rose Collection, seamlessly blending contemporary design with timeless elegance. Each piece exudes a harmonious fusion of modern aesthetics and classic charm, making it the perfect choice for those who seek sophistication with a modern twist.'],
    imgs: [
      require('./collections/tan collec/ctc1.jpeg'),
      require('./collections/tan collec/ctc2.jpeg'),
      require('./collections/tan collec/ctc3.jpeg'),
      require('./collections/tan collec/ctc4.jpeg'),
      require('./collections/tan collec/ctc6.jpeg'),
      require('./collections/tan collec/ctc5.jpeg')
    ],
    color: [1, 0, 1, 1, 0, 0]
  },
  {
    title: 'Cuban collection',
    text: ["Introducing our Cuban Collection, a modern twist on the classic Cuban link chain. Adorned with your choice of lab or natural diamonds, it merges tradition with luxury, allowing you to wear a piece of history reimagined for the modern era. Explore the allure of Cuba's heritage in this captivating and elegant collection."],
    imgs: [
      require('./collections/cubans/cc6.jpg'),
      require('./collections/cubans/cc0.jpeg'),
      require('./collections/cubans/cc1.jpeg'),
      require('./collections/cubans/cc3.jpeg'),
      require('./collections/cubans/cc4.jpeg'),
      require('./collections/cubans/cc5.jpeg'),
      require('./collections/cubans/cc2.jpeg')
    ],
    color: [0, 1, 1, 0, 0, 0, 0]
  },
  {
    title: 'Fine Jewellery',
    text: ["Experience the regal allure of our High Jewelry Collection, where each piece is a treasure fit for royalty. Adorn yourself in statement pieces adorned with exquisite gemstones, and elevate your style to a level of opulence fit for a princess. Explore this curated selection of jewelry, and let it be the crowning touch to your most majestic moments."],
    imgs: [
      require('./collections/fine jewellery/cfj1.jpeg'),
      require('./collections/fine jewellery/cfj2.jpeg'),
      require('./collections/fine jewellery/cfj3.jpeg'),
      require('./collections/fine jewellery/cfj4.jpeg'),
      require('./collections/fine jewellery/cfj5.jpeg')
    ],    
    color: [1, 1, 1, 1, 1]
  },
  {
    title: 'Natural Diamonds',
    text: ["For those who appreciate the timeless allure of natural diamonds, our collection offers hand-picked gems that are unparalleled in their rarity and radiance. Our experts curate these diamonds with utmost care, ensuring they meet the most stringent criteria for excellence. Every natural diamond we use is GIA certified, a testament to their exceptional quality and breathtaking beauty. Choose a piece of jewelry that embodies the essence of nature's wonders and craftsmanship's artistry with our exquisite natural diamond collection."],
    imgs: [
      require('./collections/diamonds/cd1.jpeg'),
      require('./collections/diamonds/cd2.jpeg'),
      require('./collections/diamonds/cd3.jpeg')
    ],    
    color: [1, 0, 1]
  },
  {
    title: 'Lab-Grown Diamonds',
    text: ["Elevate your jewelry experience with our lab-grown diamonds, renowned for their exceptional clarity and brilliance. Each diamond in our collection is IGI certified, assuring you of their authenticity and top-tier quality. We take pride in offering sustainable and ethical alternatives without compromising on the mesmerizing beauty of these gems. Discover the future of luxury with lab-grown diamonds that exemplify the pinnacle of modern craftsmanship."],
    imgs: [
      require('./collections/diamonds/cd6.jpeg'),
      require('./collections/diamonds/cd5.jpeg'),
      require('./collections/diamonds/cd4.jpeg')
    ],    
    color: [0, 1, 1]
  }
]

export default function Homepage({ forceToTop, doSetLogo, setNavColour }) {  
  const touchStart = useRef(null);
  const [scrollPos, setScroll] = useState(0)
  const sh = window.innerHeight;

  function vidLoaded() {
    $('#vid').css({opacity: 1})
  }

  function roundScroll(dir) {
    if (dir > 0) {
      if ((($('#collections').scrollTop()/sh) % 1) > 0.1) {
        $('#collections')[0].scrollTo({
          left: 0,
          top: Math.round(($('#collections').scrollTop()/sh) + 0.4) * sh,
          behavior: 'smooth'
        })
        setScroll(Math.round(($('#collections').scrollTop()/sh) + 0.4))
      }
    } else if (dir < 0) {
      if ((($('#collections').scrollTop()/sh) % 1) < 0.9) {
        $('#collections')[0].scrollTo({
          left: 0,
          top: Math.round(($('#collections').scrollTop()/sh) - 0.4) * sh,
          behavior: 'smooth'
        })
        setScroll(Math.round(($('#collections').scrollTop()/sh) - 0.4))
      }
    }
  }

  function updatePos(c, slide) {
    setNavColour(collections[c].color[slide]);
  }

  useEffect(() => {
    $('#collections')[0].addEventListener('wheel', e => {
      let dir = e.deltaY / Math.abs(e.deltaY);
      roundScroll(dir)
    })

    $('#collections')[0].addEventListener('touchstart', e => {
      touchStart.current = {y: e.changedTouches[0].clientY, x: e.changedTouches[0].clientX};
    })

    $('#collections')[0].addEventListener('touchend', e => {
      if (!touchStart.current) return;
      let dir = {
        y: (touchStart.current.y > e.changedTouches[0].clientY) ? 1: -1,
        x: (touchStart.current.x > e.changedTouches[0].clientX) ? 1: -1,
      }
      roundScroll(dir.y)
    })
  }, [])

  useEffect(() => {
    if (scrollPos===0) {
      doSetLogo(0);
      if ($('#collections').scrollTop() !== 0) {
        $('#collections')[0].scrollTo({
          left: 0,
          top: 0,
          behavior: 'smooth'
        })
      }
    } else {
      doSetLogo(1)
      updatePos(scrollPos-1, 0)
    }
  }, [scrollPos])

  useEffect(() => {
    setScroll(0);
  }, [forceToTop])
  
  return (
    <div className='page' id='collections'>
      <div className="vidCont">
        <video id='vid' className='homeVid' type="video/mp4" src={vid} style={{opacity: '0', transition: '0.3s'}} controls={false} onPlay={vidLoaded} autoPlay loop muted playsInline></video>
        <Logo opac={1} type={'home'} clicked={()=>{}} />
      </div>
      {collections.map((c, i) => {
        return <Collection collection={c} scrollPos={scrollPos} index={i} slideChange={updatePos} />
      })}
    </div>
  )
}
