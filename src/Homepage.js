import React, { useEffect, useRef, useState } from 'react'
import $ from 'jquery';
import Logo from './Logo';
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
      [
        {src: require('./collections/rings/carat29/carat29_w_460.jpg'), w: 300},
        {src: require('./collections/rings/carat29/carat29_w_1305.jpg'), w: 1000},
        {src: require('./collections/rings/carat29/carat29_w_1848.jpg'), w: 1500},
        {src: require('./collections/rings/carat29/carat29_w_2310.jpg'), w: 2000},
        {src: require('./collections/rings/carat29/carat29_w_3408.jpg'), w: 3000},
      ],
      [
        {src: require('./collections/rings/carat32/carat32_w_460.jpg'), w: 300},
        {src: require('./collections/rings/carat32/carat32_w_1212.jpg'), w: 1000},
        {src: require('./collections/rings/carat32/carat32_w_2117.jpg'), w: 1500},
        {src: require('./collections/rings/carat32/carat32_w_2310.jpg'), w: 2000},
        {src: require('./collections/rings/carat32/carat32_w_4560.jpg'), w: 3000},
      ],
      [
        {src: require('./collections/rings/carat26/carat26_w_460.jpg'), w: 300},
        {src: require('./collections/rings/carat26/carat26_w_1251.jpg'), w: 1000},
        {src: require('./collections/rings/carat26/carat26_w_1789.jpg'), w: 1500},
        {src: require('./collections/rings/carat26/carat26_w_2310.jpg'), w: 2000},
        {src: require('./collections/rings/carat26/carat26_w_4555.jpg'), w: 3000},
      ],
      [
        {src: require('./collections/rings/carat27/carat27_w_460.jpg'), w: 300},
        {src: require('./collections/rings/carat27/carat27_w_1401.jpg'), w: 1000},
        {src: require('./collections/rings/carat27/carat27_w_1999.jpg'), w: 1500},
        {src: require('./collections/rings/carat27/carat27_w_2310.jpg'), w: 2000},
        {src: require('./collections/rings/carat27/carat27_w_4538.jpg'), w: 3000},
      ]
    ],
    color: [0, 0, 0, 0]
  },
  {
    title: 'Rose collection',
    text: ['Discover our captivating Rose Collection, seamlessly blending contemporary design with timeless elegance. Each piece exudes a harmonious fusion of modern aesthetics and classic charm, making it the perfect choice for those who seek sophistication with a modern twist.'],
    imgs: [
      [
        {src: require('./collections/tan/ctc1/ctc1_w_460.jpg'), w: 300},
        {src: require('./collections/tan/ctc1/ctc1_w_1266.jpg'), w: 1000},
        {src: require('./collections/tan/ctc1/ctc1_w_1927.jpg'), w: 1500},
        {src: require('./collections/tan/ctc1/ctc1_w_2310.jpg'), w: 2000},
        {src: require('./collections/tan/ctc1/ctc1_w_3291.jpg'), w: 3000},
      ],
      [
        {src: require('./collections/tan/ctc2/ctc2_w_460.jpg'), w: 300},
        {src: require('./collections/tan/ctc2/ctc2_w_1346.jpg'), w: 1000},
        {src: require('./collections/tan/ctc2/ctc2_w_1995.jpg'), w: 1500},
        {src: require('./collections/tan/ctc2/ctc2_w_2310.jpg'), w: 2000},
        {src: require('./collections/tan/ctc2/ctc2_w_5288.jpg'), w: 3000},
      ],
      [
        {src: require('./collections/tan/ctc3/ctc3_w_460.jpg'), w: 300},
        {src: require('./collections/tan/ctc3/ctc3_w_1176.jpg'), w: 1000},
        {src: require('./collections/tan/ctc3/ctc3_w_1844.jpg'), w: 1500},
        {src: require('./collections/tan/ctc3/ctc3_w_2310.jpg'), w: 2000},
        {src: require('./collections/tan/ctc3/ctc3_w_4288.jpg'), w: 3000},
      ],
      [
        {src: require('./collections/tan/ctc4/ctc4_w_460.jpg'), w: 300},
        {src: require('./collections/tan/ctc4/ctc4_w_1211.jpg'), w: 1000},
        {src: require('./collections/tan/ctc4/ctc4_w_1747.jpg'), w: 1500},
        {src: require('./collections/tan/ctc4/ctc4_w_2310.jpg'), w: 2000},
        {src: require('./collections/tan/ctc4/ctc4_w_4288.jpg'), w: 3000},
      ],
      [
        {src: require('./collections/tan/ctc5/ctc5_w_460.jpg'), w: 300},
        {src: require('./collections/tan/ctc5/ctc5_w_1233.jpg'), w: 1000},
        {src: require('./collections/tan/ctc5/ctc5_w_1835.jpg'), w: 1500},
        {src: require('./collections/tan/ctc5/ctc5_w_2310.jpg'), w: 2000},
        {src: require('./collections/tan/ctc5/ctc5_w_4405.jpg'), w: 3000},
      ],
      [
        {src: require('./collections/tan/ctc6/ctc6_w_460.jpg'), w: 300},
        {src: require('./collections/tan/ctc6/ctc6_w_1251.jpg'), w: 1000},
        {src: require('./collections/tan/ctc6/ctc6_w_1839.jpg'), w: 1500},
        {src: require('./collections/tan/ctc6/ctc6_w_2310.jpg'), w: 2000},
        {src: require('./collections/tan/ctc6/ctc6_w_4109.jpg'), w: 3000},
      ],
    ],
    color: [0, 0, 0, 0, 0, 0]
  },
  {
    title: 'Cuban collection',
    text: ["Introducing our Cuban Collection, a modern twist on the classic Cuban link chain. Adorned with your choice of lab or natural diamonds, it merges tradition with luxury, allowing you to wear a piece of history reimagined for the modern era. Explore the allure of Cuba's heritage in this captivating and elegant collection."],
    imgs: [
      [
        {src: require('./collections/cubans/cc5/cc5_w_460.jpg'), w: 300},
        {src: require('./collections/cubans/cc5/cc5_w_1305.jpg'), w: 1000},
        {src: require('./collections/cubans/cc5/cc5_w_1858.jpg'), w: 1500},
        {src: require('./collections/cubans/cc5/cc5_w_2310.jpg'), w: 2000},
        {src: require('./collections/cubans/cc5/cc5_w_2800.jpg'), w: 3000},
      ],
      [
        {src: require('./collections/cubans/cc6/cc6_w_460.jpg'), w: 300},
        {src: require('./collections/cubans/cc6/cc6_w_1290.jpg'), w: 1000},
        {src: require('./collections/cubans/cc6/cc6_w_1830.jpg'), w: 1500},
        {src: require('./collections/cubans/cc6/cc6_w_2310.jpg'), w: 2000},
        {src: require('./collections/cubans/cc6/cc6_w_3500.jpg'), w: 3000},
      ],
      [
        {src: require('./collections/cubans/cc8/cc8_w_460.jpg'), w: 300},
        {src: require('./collections/cubans/cc8/cc8_w_1305.jpg'), w: 1000},
        {src: require('./collections/cubans/cc8/cc8_w_1850.jpg'), w: 1500},
        {src: require('./collections/cubans/cc8/cc8_w_2310.jpg'), w: 2000},
        {src: require('./collections/cubans/cc8/cc8_w_2560.jpg'), w: 3000},
      ],
      [
        {src: require('./collections/cubans/cc1/cc1_w_460.jpg'), w: 300},
        {src: require('./collections/cubans/cc1/cc1_w_1294.jpg'), w: 1000},
        {src: require('./collections/cubans/cc1/cc1_w_1837.jpg'), w: 1500},
        {src: require('./collections/cubans/cc1/cc1_w_2310.jpg'), w: 2000},
        {src: require('./collections/cubans/cc1/cc1_w_3733.jpg'), w: 3000},
      ],
      [
        {src: require('./collections/cubans/cc4/cc4_w_460.jpg'), w: 300},
        {src: require('./collections/cubans/cc4/cc4_w_1296.jpg'), w: 1000},
        {src: require('./collections/cubans/cc4/cc4_w_1860.jpg'), w: 1500},
        {src: require('./collections/cubans/cc4/cc4_w_2310.jpg'), w: 2000},
        {src: require('./collections/cubans/cc4/cc4_w_3733.jpg'), w: 3000},
      ],
      [
        {src: require('./collections/cubans/cc2/cc2_w_460.jpg'), w: 300},
        {src: require('./collections/cubans/cc2/cc2_w_1264.jpg'), w: 1000},
        {src: require('./collections/cubans/cc2/cc2_w_1807.jpg'), w: 1500},
        {src: require('./collections/cubans/cc2/cc2_w_2310.jpg'), w: 2000},
        {src: require('./collections/cubans/cc2/cc2_w_2560.jpg'), w: 3000},
      ],
      [
        {src: require('./collections/cubans/cc7/cc7_w_460.jpg'), w: 300},
        {src: require('./collections/cubans/cc7/cc7_w_1295.jpg'), w: 1000},
        {src: require('./collections/cubans/cc7/cc7_w_1847.jpg'), w: 1500},
        {src: require('./collections/cubans/cc7/cc7_w_2310.jpg'), w: 2000},
        {src: require('./collections/cubans/cc7/cc7_w_3500.jpg'), w: 3000},
      ]
    ],
    color: [0, 0, 0, 0, 0, 0, 0]
  },
  {
    title: 'Natural Diamonds',
    text: ["For those who appreciate the timeless allure of natural diamonds, our collection offers hand-picked gems that are unparalleled in their rarity and radiance. Our experts curate these diamonds with utmost care, ensuring they meet the most stringent criteria for excellence. Every natural diamond we use is GIA certified, a testament to their exceptional quality and breathtaking beauty. Choose a piece of jewelry that embodies the essence of nature's wonders and craftsmanship's artistry with our exquisite natural diamond collection."],
    imgs: [
      [
        {src: require('./collections/diamonds/cd1/cd1_uwwujg_c_scale,w_600.jpg'), w: 300},
        {src: require('./collections/diamonds/cd1/cd1_uwwujg_c_scale,w_1115.jpg'), w: 1000},
        {src: require('./collections/diamonds/cd1/cd1_uwwujg_c_scale,w_1417.jpg'), w: 1300},
        {src: require('./collections/diamonds/cd1/cd1_uwwujg_c_scale,w_1727.jpg'), w: 1500},
        {src: require('./collections/diamonds/cd1/cd1_uwwujg_c_scale,w_1920.jpg'), w: 1920},
        {src: require('./collections/diamonds/cd1/cd1_w_3044.jpeg'), w: 1920},
      ],
      [
        {src: require('./collections/diamonds/cd2/cd2_n6cchh_c_scale,w_600.jpg'), w: 300},
        {src: require('./collections/diamonds/cd2/cd2_n6cchh_c_scale,w_1056.jpg'), w: 1000},
        {src: require('./collections/diamonds/cd2/cd2_n6cchh_c_scale,w_1384.jpg'), w: 1300},
        {src: require('./collections/diamonds/cd2/cd2_n6cchh_c_scale,w_1688.jpg'), w: 1500},
        {src: require('./collections/diamonds/cd2/cd2_n6cchh_c_scale,w_1920.jpg'), w: 1920},
        {src: require('./collections/diamonds/cd2/cd2_w_2879.jpeg'), w: 3000},
      ],
      [
        {src: require('./collections/diamonds/cd3/cd3_pucgh6_c_scale,w_600.jpg'), w: 300},
        {src: require('./collections/diamonds/cd3/cd3_pucgh6_c_scale,w_1065.jpg'), w: 1000},
        {src: require('./collections/diamonds/cd3/cd3_pucgh6_c_scale,w_1371.jpg'), w: 1300},
        {src: require('./collections/diamonds/cd3/cd3_pucgh6_c_scale,w_1661.jpg'), w: 1500},
        {src: require('./collections/diamonds/cd3/cd3_pucgh6_c_scale,w_1920.jpg'), w: 1920},
        {src: require('./collections/diamonds/cd3/cd3_w_3204.jpeg'), w: 3000},
      ]
    ],
    color: [1, 0, 1]
  },
  {
    title: 'Lab-Grown Diamonds',
    text: ["Elevate your jewelry experience with our lab-grown diamonds, renowned for their exceptional clarity and brilliance. Each diamond in our collection is IGI certified, assuring you of their authenticity and top-tier quality. We take pride in offering sustainable and ethical alternatives without compromising on the mesmerizing beauty of these gems. Discover the future of luxury with lab-grown diamonds that exemplify the pinnacle of modern craftsmanship."],
    imgs: [
      [
        {src: require('./collections/diamonds/cd6/cd6_reext5_c_scale,w_600.jpg'), w: 300},
        {src: require('./collections/diamonds/cd6/cd6_reext5_c_scale,w_1193.jpg'), w: 1000},
        {src: require('./collections/diamonds/cd6/cd6_reext5_c_scale,w_1451.jpg'), w: 1300},
        {src: require('./collections/diamonds/cd6/cd6_reext5_c_scale,w_1760.jpg'), w: 1500},
        {src: require('./collections/diamonds/cd6/cd6_reext5_c_scale,w_1920.jpg'), w: 1920},
        {src: require('./collections/diamonds/cd6/cd6_w_5760.jpeg'), w: 3000},
      ],
      [
        {src: require('./collections/diamonds/cd5/cd5_oovnoq_c_scale,w_600.jpg'), w: 300},
        {src: require('./collections/diamonds/cd5/cd5_oovnoq_c_scale,w_1155.jpg'), w: 1000},
        {src: require('./collections/diamonds/cd5/cd5_oovnoq_c_scale,w_1527.jpg'), w: 1300},
        {src: require('./collections/diamonds/cd5/cd5_oovnoq_c_scale,w_1808.jpg'), w: 1500},
        {src: require('./collections/diamonds/cd5/cd5_oovnoq_c_scale,w_1920.jpg'), w: 1920},
        {src: require('./collections/diamonds/cd5/cd5_w_6720.jpeg'), w: 3000},
      ],
      [
        {src: require('./collections/diamonds/cd4/cd4_yanvcd_c_scale,w_600.jpg'), w: 300},
        {src: require('./collections/diamonds/cd4/cd4_yanvcd_c_scale,w_1140.jpg'), w: 1000},
        {src: require('./collections/diamonds/cd4/cd4_yanvcd_c_scale,w_1516.jpg'), w: 1300},
        {src: require('./collections/diamonds/cd4/cd4_yanvcd_c_scale,w_1675.jpg'), w: 1500},
        {src: require('./collections/diamonds/cd4/cd4_yanvcd_c_scale,w_1920.jpg'), w: 1920},
        {src: require('./collections/diamonds/cd4/cd4_w_2622.jpeg'), w: 3000},
      ],
    ],
    color: [0, 1, 1]
  }
]

export default function Homepage({ forceToTop, doSetLogo, setNavColour, about, book, aboutTrigger }) {  
  const touchStart = useRef(null);
  const [scrollPos, setScroll] = useState(0)
  var sh = window.innerHeight;
  var sw = window.innerWidth;

  class Blob {
    constructor(i) {
      this.id = 'blob' + i;
      this.r = 10 + (Math.floor(Math.random() * 5));
      this.l = Math.random() * sw;
      this.t = sh + (this.r * (Math.random() * 50));
      this.v = Math.random() + 0.1;
      this.o = 1;
      this.c = 'white'
    }

    update() {
      if (this.t <= -5) {
        this.t = sh + this.r;
        this.v = Math.random() + 0.1;
        this.o = 1;
      }

      this.t -= this.v;
      this.o -= 0.0013 * this.v;
      this.v += Math.random() * 0.006
    }
  }

  var blobs = [];
  for (var i = 0; i < 40; i++) {
    blobs.push(new Blob(i))
  }

  function roundScroll(dir) {
    if (dir > 0) {
      let newScroll = Math.round(($('#collections').scrollTop()/sh) + 0.4);
      if (newScroll > collections.length) return;
      if ((($('#collections').scrollTop()/sh) % 1) > 0.1) {
        $('#collections')[0].scrollTo({
          left: 0,
          top: newScroll * sh,
          behavior: 'smooth'
        })
        setScroll(newScroll)
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

  function linkCollections() {
    $('#collections')[0].scrollTo({
      left: 0,
      top: sh,
      behavior: 'smooth'
    })
    setScroll(1)
  }

  function updatePos(c, slide) {
    setNavColour(collections[c].color[slide]);
  }

  function animateBG() {
    blobs.forEach(b => {
      b.update()
      $(`#${b.id}`).css({top: b.t, opacity: b.o})
    })
    requestAnimationFrame(animateBG)
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      sh = window.innerHeight;
    })

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
      console.log(e.target)
      roundScroll(dir.y)
    })

    animateBG()
  }, [])

  useEffect(() => {
    $('#centerLogo').toggleClass('hideCLogo')
  }, [aboutTrigger])

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
        <div className="bgAnim">
          {blobs.map((b,i) => {
            return <div className="blob" id={b.id} style={{left: b.l + 'px', top: b.t + 'px', width: b.r + 'px', backgroundColor: b.c}}></div>
          })}
        </div>
        <div className='centerLogo hideCLogo' id="centerLogo">
          <Logo opac={1} type={'home'} clicked={()=>{}} />
          <ul style={{opacity: '0', animation: 'navSlide 2s ease 2s 1 forwards', color: 'white'}}>
            <li onClick={about}>About Us</li>
            <li onClick={linkCollections}>Our Collections</li>
            <li onClick={book}>Book a Consultation</li>
          </ul>
        </div>
      </div>
      {collections.map((c, i) => {
        return <Collection collection={c} scrollPos={scrollPos} index={i} slideChange={updatePos} />
      })}
    </div>
  )
}
