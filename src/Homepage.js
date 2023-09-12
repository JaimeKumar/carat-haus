import React, { useEffect, useRef } from 'react'
import $ from 'jquery';
import Logo from './Logo';
import vid from './content/carat-haus-vid.mp4'

const wb = ['white', 'black']
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
    color: 0
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
    color: 0
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
    color: 0
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
    color: 1
  },
  {
    title: 'Natural Diamonds',
    text: ["For those who appreciate the timeless allure of natural diamonds, our collection offers hand-picked gems that are unparalleled in their rarity and radiance. Our experts curate these diamonds with utmost care, ensuring they meet the most stringent criteria for excellence. Every natural diamond we use is GIA certified, a testament to their exceptional quality and breathtaking beauty. Choose a piece of jewelry that embodies the essence of nature's wonders and craftsmanship's artistry with our exquisite natural diamond collection."],
    imgs: [
      require('./collections/diamonds/cd1.jpeg'),
      require('./collections/diamonds/cd2.jpeg'),
      require('./collections/diamonds/cd3.jpeg')
    ],    
    color: 1
  },
  {
    title: 'Lab-Grown Diamonds',
    text: ["Elevate your jewelry experience with our lab-grown diamonds, renowned for their exceptional clarity and brilliance. Each diamond in our collection is IGI certified, assuring you of their authenticity and top-tier quality. We take pride in offering sustainable and ethical alternatives without compromising on the mesmerizing beauty of these gems. Discover the future of luxury with lab-grown diamonds that exemplify the pinnacle of modern craftsmanship."],
    imgs: [
      require('./collections/diamonds/cd6.jpeg'),
      require('./collections/diamonds/cd5.jpeg'),
      require('./collections/diamonds/cd4.jpeg')
    ],    
    color: 1
  }
]
const scrollTime = 8000;
const scrollAmnt = 50

export default function Homepage({scrolled, forceToTop, makeNavBlack, makeNavWhite, logoOpac}) {
  var deltaY = 0;
  var deltaX = 0;

  const atTop = useRef(true);
  const scrollPos = useRef(0);
  const slidePos = useRef(0);
  var loops = [];

  const sh = window.innerHeight;
  const sw = window.innerWidth;

  const animationStages = [
    // 0 - Scroll img0
    (callback) => {
      $(`#img${scrollPos.current-1}0`).animate({top: ($(`#img${scrollPos.current-1}0`).height()/-2) + (sh/2) - scrollAmnt}, scrollTime, 'linear', callback)
    },
    
    // 1 - Increment slidePos
    (callback) => {
      slidePos.current = slidePos.current + 1;
      if (slidePos.current > collections[scrollPos.current-1].imgs.length-1) {
        slidePos.current = 0;
      }
      callback();
    },

    // 2 - Re-init img1
    (callback) => {
      $(`#img${scrollPos.current-1}1`).attr('src', collections[scrollPos.current-1].imgs[slidePos.current])
      $(`#img${scrollPos.current-1}1`).animate({top: ($(`#img${scrollPos.current-1}0`).height()/-2) + (sh/2) + scrollAmnt}, 100, 'linear', callback)
    },

    // 3 - Fade-in img1
    (callback) => {
      $(`#img${scrollPos.current-1}1`).animate({opacity: 1}, 750, 'linear', callback)
    },

    // 4 - Scroll img1
    (callback) => {
      $(`#img${scrollPos.current-1}1`).animate({top: ($(`#img${scrollPos.current-1}1`).height()/-2) + (sh/2) - scrollAmnt}, scrollTime, 'linear', callback)
    },

    // 5 - Increment slidePos
    (callback) => {
      slidePos.current = slidePos.current + 1;
      if (slidePos.current > collections[scrollPos.current-1].imgs.length-1) {
        slidePos.current = 0;
      }
      callback();
    },

    // 6 - Re-inint img0
    (callback) => {
      $(`#img${scrollPos.current-1}0`).attr('src', collections[scrollPos.current-1].imgs[slidePos.current])
      $(`#img${scrollPos.current-1}0`).animate({top: ($(`#img${scrollPos.current-1}0`).height()/-2) + (sh/2) + scrollAmnt}, 100, 'linear', callback)
    },

    // 7 - Fade-out img1
    (callback) => {
      $(`#img${scrollPos.current-1}1`).animate({opacity: 0}, 750, 'linear', callback)
    }
  ]

  class Loop {
    constructor(startingPosition) {
      this.pos = startingPosition;
      this.kill = false;
      this.loop();
    }

    loop() {
      if (this.kill) return;
      if (this.pos < animationStages.length) {
        animationStages[this.pos](() => {
          this.pos = this.pos + 1
          this.loop();
        });
      } else {
        this.pos = 0
        this.loop();
      }
    }
  }

  function initPics() {
    $(`#img${scrollPos.current-1}0`).css('top', ($(`#img${scrollPos.current-1}0`).height()/-2) + (sh/2) + 100)
    $(`#img${scrollPos.current-1}1`).css('top', ($(`#img${scrollPos.current-1}1`).height()/-2) + (sh/2) + 100)
  };

  function kill() {
    $(`#img${scrollPos.current-1}0`).stop(true, false);
    $(`#img${scrollPos.current-1}1`).stop(true, false);
  }

  function updateScrollPos() {
    let dir = deltaY / Math.abs(deltaY);
    slidePos.current = 0;
    
    kill();

    let newScrollPos = scrollPos.current + dir;
    
    if (newScrollPos < 0) {
      newScrollPos = 0;
    } else if (newScrollPos > 6) {
      newScrollPos = 6;
    }
    
    if (!isNaN(newScrollPos)) {
      scrollPos.current = newScrollPos;
    }

    if (scrollPos.current > 3) {
      makeNavBlack();
    } else {
      makeNavWhite();
    }
    
    scroll();
  }

  function scroll() {
    initPics();

    // $('#home').scrollTop(scrollPos.current * window.innerHeight)
    $('#home')[0].scrollTo({
      left: 0,
      top: scrollPos.current * window.innerHeight,
      behavior: 'smooth'
    })
    
    if (atTop.current && scrollPos.current !== 0) {
      scrolled(1)
      atTop.current = false;
    } else if (!atTop.current && scrollPos.current === 0) {
      scrolled(0);
      atTop.current = true;
    }

    if (scrollPos.current !== 0) {
      setTimeout(() => {
        loops.push(new Loop(0))
      }, 500)
    }
  }

  function horzScroll() {
    loops = loops.filter(l => !l.kill)
    kill();
    loops.forEach(loop => {
      loop.kill = true;
    })
    if (+$(`#img${scrollPos.current-1}1`).css('opacity') === 0) {
      loops.push(new Loop(1))
    } else if (+$(`#img${scrollPos.current-1}1`).css('opacity') === 1) {
      loops.push(new Loop(5))
    }
  }

  function vidLoaded() {
    $('#vid').animate({opacity: 1}, 500)
  }

  useEffect(() => {
    initPics();

    $('#home')[0].addEventListener('wheel', e => {
      e.preventDefault();
      deltaY += e.deltaY;
      deltaX += e.deltaX;
      let fractionY = deltaY / sh;
      let fractionX = deltaX / sw;
      if (Math.abs(fractionY) > 0.6) {
        updateScrollPos()
        deltaY = 0;
      } else if (Math.abs(fractionX) > 0.5) {
        horzScroll();
        deltaX = 0;
      }
    })

    $('#home')[0].addEventListener('touchend', e => {
      scrollPos.current = Math.round($('#home').scrollTop() / window.innerHeight);
      scroll();
    })

    $('#home')[0].addEventListener('click', e => {
      horzScroll();
    })
  }, [])

  useEffect(() => {
    kill();
    scrollPos.current = 0;
    updateScrollPos();
    deltaY = 0;
    atTop.current = true;
  }, [forceToTop])
  
  return (
    <div className='page' id='home'>
      <div className="section">
      {/* <div className="section" style={{overflowY: 'hidden'}}> */}
        <div className="vidCont">
          <video id='vid' className='homeVid' type="video/mp4" src={vid} style={{opacity: '0'}} controls={false} onPlay={vidLoaded} autoPlay loop muted playsInline></video>
          <Logo opac={logoOpac} type={'home'} />
        </div>
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
