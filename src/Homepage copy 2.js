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
        {src: require('./collections/rings/carat29/carat29_w_460.jpg'), w: 600},
        {src: require('./collections/rings/carat29/carat29_w_1305.jpg'), w: 1041},
        {src: require('./collections/rings/carat29/carat29_w_1848.jpg'), w: 1376},
        {src: require('./collections/rings/carat29/carat29_w_2310.jpg'), w: 1741},
        {src: require('./collections/rings/carat29/carat29_w_3408.jpg'), w: 1920},
      ],
      [
        {src: require('./collections/rings/carat32/carat32_w_460.jpg'), w: 600},
        {src: require('./collections/rings/carat32/carat32_w_1212.jpg'), w: 990},
        {src: require('./collections/rings/carat32/carat32_w_2117.jpg'), w: 1376},
        {src: require('./collections/rings/carat32/carat32_w_2310.jpg'), w: 1654},
        {src: require('./collections/rings/carat32/carat32_w_4560.jpg'), w: 1920},
      ],
      [
        {src: require('./collections/rings/carat26/carat26_w_460.jpg'), w: 600},
        {src: require('./collections/rings/carat26/carat26_w_1251.jpg'), w: 1043},
        {src: require('./collections/rings/carat26/carat26_w_1789.jpg'), w: 1372},
        {src: require('./collections/rings/carat26/carat26_w_2310.jpg'), w: 1679},
        {src: require('./collections/rings/carat26/carat26_w_4555.jpg'), w: 1920},
      ],
      [
        {src: require('./collections/rings/carat27/carat27_w_460.jpg'), w: 600},
        {src: require('./collections/rings/carat27/carat27_w_1401.jpg'), w: 1055},
        {src: require('./collections/rings/carat27/carat27_w_1999.jpg'), w: 1368},
        {src: require('./collections/rings/carat27/carat27_w_2310.jpg'), w: 1675},
        {src: require('./collections/rings/carat27/carat27_w_4538.jpg'), w: 1920},
      ]
    ],
    color: [0, 0, 0, 0, 0, 0]
  },
  {
    title: 'Rose collection',
    text: ['Discover our captivating Rose Collection, seamlessly blending contemporary design with timeless elegance. Each piece exudes a harmonious fusion of modern aesthetics and classic charm, making it the perfect choice for those who seek sophistication with a modern twist.'],
    imgs: [
      [
        {src: require('./collections/tan/ctc1/ctc1_w_460.jpg'), w: 300},
        {src: require('./collections/tan/ctc1/ctc1_w_1266.jpg'), w: 1059},
        {src: require('./collections/tan/ctc1/ctc1_w_1927.jpg'), w: 1387},
        {src: require('./collections/tan/ctc1/ctc1_w_2310.jpg'), w: 1709},
        {src: require('./collections/tan/ctc1/ctc1_w_3291.jpg'), w: 1920},
      ],
      [
        {src: require('./collections/tan/ctc2/ctc2_w_460.jpg'), w: 300},
        {src: require('./collections/tan/ctc2/ctc2_w_1346.jpg'), w: 1097},
        {src: require('./collections/tan/ctc2/ctc2_w_1995.jpg'), w: 1469},
        {src: require('./collections/tan/ctc2/ctc2_w_3210.jpg'), w: 1762},
        {src: require('./collections/tan/ctc2/ctc2_w_5288.jpg'), w: 1920},
      ],
      [
        {src: require('./collections/tan/ctc3/ctc3_w_460.jpg'), w: 300},
        {src: require('./collections/tan/ctc3/ctc3_w_1176.jpg'), w: 1059},
        {src: require('./collections/tan/ctc3/ctc3_w_1844.jpg'), w: 1386},
        {src: require('./collections/tan/ctc3/ctc3_w_2310.jpg'), w: 1729},
        {src: require('./collections/tan/ctc3/ctc3_w_4288.jpg'), w: 1920},
      ],
      [
        {src: require('./collections/tan/ctc4/ctc4_w_460.jpg'), w: 300},
        {src: require('./collections/tan/ctc4/ctc4_w_1211.jpg'), w: 1075},
        {src: require('./collections/tan/ctc4/ctc4_w_1747.jpg'), w: 1434},
        {src: require('./collections/tan/ctc4/ctc4_w_2310.jpg'), w: 1732},
        {src: require('./collections/tan/ctc4/ctc4_w_4288.jpg'), w: 1920},
      ],
      [
        {src: require('./collections/tan/ctc5/ctc5_w_460.jpg'), w: 300},
        {src: require('./collections/tan/ctc5/ctc5_w_1233.jpg'), w: 1076},
        {src: require('./collections/tan/ctc5/ctc5_w_1835.jpg'), w: 1384},
        {src: require('./collections/tan/ctc5/ctc5_w_2310.jpg'), w: 1713},
        {src: require('./collections/tan/ctc5/ctc5_w_4405.jpg'), w: 1920},
      ],
      [
        {src: require('./collections/tan/ctc6/ctc6_w_460.jpg'), w: 300},
        {src: require('./collections/tan/ctc6/ctc6_w_1251.jpg'), w: 968},
        {src: require('./collections/tan/ctc6/ctc6_w_1839.jpg'), w: 1248},
        {src: require('./collections/tan/ctc6/ctc6_w_2310.jpg'), w: 1502},
        {src: require('./collections/tan/ctc6/ctc6_w_4109.jpg'), w: 1920},
      ],
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
      require('./collections/cubans/cc4.jpeg'),
      require('./collections/cubans/cc5.jpeg'),
      require('./collections/cubans/cc2.jpeg')
    ],
    set: [
      [
        {src: require('./collections/cubans/cc6/cc6_ciz6yb_c_scale,w_600.jpg'), w: 600},
        {src: require('./collections/cubans/cc6/cc6_ciz6yb_c_scale,w_1027.jpg'), w: 1027},
        {src: require('./collections/cubans/cc6/cc6_ciz6yb_c_scale,w_1456.jpg'), w: 1456},
        {src: require('./collections/cubans/cc6/cc6_ciz6yb_c_scale,w_1828.jpg'), w: 1828},
        {src: require('./collections/cubans/cc6/cc6_ciz6yb_c_scale,w_1920.jpg'), w: 1920},
      ],
      [
        {src: require('./collections/cubans/cc0/cc0_jcao5u_c_scale,w_600.jpg'), w: 600},
        {src: require('./collections/cubans/cc0/cc0_jcao5u_c_scale,w_1060.jpg'), w: 1060},
        {src: require('./collections/cubans/cc0/cc0_jcao5u_c_scale,w_1394.jpg'), w: 1394},
        {src: require('./collections/cubans/cc0/cc0_jcao5u_c_scale,w_1715.jpg'), w: 1715},
        {src: require('./collections/cubans/cc0/cc0_jcao5u_c_scale,w_1920.jpg'), w: 1920},
      ],
      [
        {src: require('./collections/cubans/cc1/cc1_hkscu8_c_scale,w_600.jpg'), w: 600},
        {src: require('./collections/cubans/cc1/cc1_hkscu8_c_scale,w_1088.jpg'), w: 1088},
        {src: require('./collections/cubans/cc1/cc1_hkscu8_c_scale,w_1452.jpg'), w: 1452},
        {src: require('./collections/cubans/cc1/cc1_hkscu8_c_scale,w_1753.jpg'), w: 1753},
        {src: require('./collections/cubans/cc1/cc1_hkscu8_c_scale,w_1920.jpg'), w: 1920},
      ],
      [
        {src: require('./collections/cubans/cc4/cc4_ljnpla_c_scale,w_600.jpg'), w: 600},
        {src: require('./collections/cubans/cc4/cc4_ljnpla_c_scale,w_1067.jpg'), w: 1067},
        {src: require('./collections/cubans/cc4/cc4_ljnpla_c_scale,w_1399.jpg'), w: 1399},
        {src: require('./collections/cubans/cc4/cc4_ljnpla_c_scale,w_1751.jpg'), w: 1751},
        {src: require('./collections/cubans/cc4/cc4_ljnpla_c_scale,w_1920.jpg'), w: 1920},
      ],
      [
        {src: require('./collections/cubans/cc5/cc5_iripa9_c_scale,w_600.jpg'), w: 600},
        {src: require('./collections/cubans/cc5/cc5_iripa9_c_scale,w_1066.jpg'), w: 1066},
        {src: require('./collections/cubans/cc5/cc5_iripa9_c_scale,w_1391.jpg'), w: 1391},
        {src: require('./collections/cubans/cc5/cc5_iripa9_c_scale,w_1716.jpg'), w: 1716},
        {src: require('./collections/cubans/cc5/cc5_iripa9_c_scale,w_1920.jpg'), w: 1920},
      ],
      [
        {src: require('./collections/cubans/cc2/cc2_kywrjd_c_scale,w_600.jpg'), w: 600},
        {src: require('./collections/cubans/cc2/cc2_kywrjd_c_scale,w_1067.jpg'), w: 1067},
        {src: require('./collections/cubans/cc2/cc2_kywrjd_c_scale,w_1392.jpg'), w: 1392},
        {src: require('./collections/cubans/cc2/cc2_kywrjd_c_scale,w_1794.jpg'), w: 1794},
        {src: require('./collections/cubans/cc2/cc2_kywrjd_c_scale,w_1920.jpg'), w: 1920},
      ],
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
    set: [
      [
        {src: require('./collections/fine jewellery/cfj1/cfj1_d4ldms_c_scale,w_600.jpg'), w: 600},
        {src: require('./collections/fine jewellery/cfj1/cfj1_d4ldms_c_scale,w_1042.jpg'), w: 1042},
        {src: require('./collections/fine jewellery/cfj1/cfj1_d4ldms_c_scale,w_1333.jpg'), w: 1333},
        {src: require('./collections/fine jewellery/cfj1/cfj1_d4ldms_c_scale,w_1381.jpg'), w: 1381},
        {src: require('./collections/fine jewellery/cfj1/cfj1_d4ldms_c_scale,w_1920.jpg'), w: 1920},
      ],
      [
        {src: require('./collections/fine jewellery/cfj2/cfj2_pftktw_c_scale,w_600.jpg'), w: 600},
        {src: require('./collections/fine jewellery/cfj2/cfj2_pftktw_c_scale,w_1101.jpg'), w: 1101},
        {src: require('./collections/fine jewellery/cfj2/cfj2_pftktw_c_scale,w_1509.jpg'), w: 1509},
        {src: require('./collections/fine jewellery/cfj2/cfj2_pftktw_c_scale,w_1721.jpg'), w: 1721},
        {src: require('./collections/fine jewellery/cfj2/cfj2_pftktw_c_scale,w_1920.jpg'), w: 1920},
      ],
      [
        {src: require('./collections/fine jewellery/cfj3/cfj3_jnepyg_c_scale,w_600.jpg'), w: 600},
        {src: require('./collections/fine jewellery/cfj3/cfj3_jnepyg_c_scale,w_1079.jpg'), w: 1079},
        {src: require('./collections/fine jewellery/cfj3/cfj3_jnepyg_c_scale,w_1479.jpg'), w: 1479},
        {src: require('./collections/fine jewellery/cfj3/cfj3_jnepyg_c_scale,w_1835.jpg'), w: 1835},
        {src: require('./collections/fine jewellery/cfj3/cfj3_jnepyg_c_scale,w_1920.jpg'), w: 1920},
      ],
      [
        {src: require('./collections/fine jewellery/cfj4/cfj4_rfy9qi_c_scale,w_600.jpg'), w: 600},
        {src: require('./collections/fine jewellery/cfj4/cfj4_rfy9qi_c_scale,w_1233.jpg'), w: 1233},
        {src: require('./collections/fine jewellery/cfj4/cfj4_rfy9qi_c_scale,w_1552.jpg'), w: 1552},
        {src: require('./collections/fine jewellery/cfj4/cfj4_rfy9qi_c_scale,w_1786.jpg'), w: 1786},
        {src: require('./collections/fine jewellery/cfj4/cfj4_rfy9qi_c_scale,w_1920.jpg'), w: 1920},
      ],
      [
        {src: require('./collections/fine jewellery/cfj5/cfj5_zojbk2_c_scale,w_600.jpg'), w: 600},
        {src: require('./collections/fine jewellery/cfj5/cfj5_zojbk2_c_scale,w_1388.jpg'), w: 1388},
        {src: require('./collections/fine jewellery/cfj5/cfj5_zojbk2_c_scale,w_1462.jpg'), w: 1462},
        {src: require('./collections/fine jewellery/cfj5/cfj5_zojbk2_c_scale,w_1909.jpg'), w: 1909},
        {src: require('./collections/fine jewellery/cfj5/cfj5_zojbk2_c_scale,w_1920.jpg'), w: 1920},
      ],
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
    set: [
      [
        {src: require('./collections/diamonds/cd1/cd1_uwwujg_c_scale,w_600.jpg'), w: 600},
        {src: require('./collections/diamonds/cd1/cd1_uwwujg_c_scale,w_1115.jpg'), w: 1115},
        {src: require('./collections/diamonds/cd1/cd1_uwwujg_c_scale,w_1417.jpg'), w: 1417},
        {src: require('./collections/diamonds/cd1/cd1_uwwujg_c_scale,w_1727.jpg'), w: 1727},
        {src: require('./collections/diamonds/cd1/cd1_uwwujg_c_scale,w_1920.jpg'), w: 1920},
      ],
      [
        {src: require('./collections/diamonds/cd2/cd2_n6cchh_c_scale,w_600.jpg'), w: 600},
        {src: require('./collections/diamonds/cd2/cd2_n6cchh_c_scale,w_1056.jpg'), w: 1056},
        {src: require('./collections/diamonds/cd2/cd2_n6cchh_c_scale,w_1384.jpg'), w: 1384},
        {src: require('./collections/diamonds/cd2/cd2_n6cchh_c_scale,w_1688.jpg'), w: 1688},
        {src: require('./collections/diamonds/cd2/cd2_n6cchh_c_scale,w_1920.jpg'), w: 1920},
      ],
      [
        {src: require('./collections/diamonds/cd3/cd3_pucgh6_c_scale,w_600.jpg'), w: 600},
        {src: require('./collections/diamonds/cd3/cd3_pucgh6_c_scale,w_1065.jpg'), w: 1065},
        {src: require('./collections/diamonds/cd3/cd3_pucgh6_c_scale,w_1371.jpg'), w: 1371},
        {src: require('./collections/diamonds/cd3/cd3_pucgh6_c_scale,w_1661.jpg'), w: 1661},
        {src: require('./collections/diamonds/cd3/cd3_pucgh6_c_scale,w_1920.jpg'), w: 1920},
      ]
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
    set: [
      [
        {src: require('./collections/diamonds/cd6/cd6_reext5_c_scale,w_600.jpg'), w: 600},
        {src: require('./collections/diamonds/cd6/cd6_reext5_c_scale,w_1193.jpg'), w: 1193},
        {src: require('./collections/diamonds/cd6/cd6_reext5_c_scale,w_1451.jpg'), w: 1451},
        {src: require('./collections/diamonds/cd6/cd6_reext5_c_scale,w_1760.jpg'), w: 1760},
        {src: require('./collections/diamonds/cd6/cd6_reext5_c_scale,w_1920.jpg'), w: 1920},
      ],
      [
        {src: require('./collections/diamonds/cd5/cd5_oovnoq_c_scale,w_600.jpg'), w: 600},
        {src: require('./collections/diamonds/cd5/cd5_oovnoq_c_scale,w_1155.jpg'), w: 1155},
        {src: require('./collections/diamonds/cd5/cd5_oovnoq_c_scale,w_1527.jpg'), w: 1527},
        {src: require('./collections/diamonds/cd5/cd5_oovnoq_c_scale,w_1808.jpg'), w: 1808},
        {src: require('./collections/diamonds/cd5/cd5_oovnoq_c_scale,w_1920.jpg'), w: 1920},
      ],
      [
        {src: require('./collections/diamonds/cd4/cd4_yanvcd_c_scale,w_600.jpg'), w: 600},
        {src: require('./collections/diamonds/cd4/cd4_yanvcd_c_scale,w_1140.jpg'), w: 1140},
        {src: require('./collections/diamonds/cd4/cd4_yanvcd_c_scale,w_1516.jpg'), w: 1516},
        {src: require('./collections/diamonds/cd4/cd4_yanvcd_c_scale,w_1675.jpg'), w: 1675},
        {src: require('./collections/diamonds/cd4/cd4_yanvcd_c_scale,w_1920.jpg'), w: 1920},
      ],
    ],
    color: [0, 1, 1]
  }
]

export default function Homepage({ forceToTop, doSetLogo, setNavColour, about, book }) {  
  const touchStart = useRef(null);
  const [scrollPos, setScroll] = useState(0)
  var sh = window.innerHeight;
  var sw = window.innerWidth;
  var blobs = [
    {
      r: (Math.random() * sw/5) + 10,
      l: Math.random() * sw,
      t: Math.random() * sh,
      v: {x: Math.random(), y: Math.random()}
    },
    {
      r: (Math.random() * sw/5) + 10,
      l: Math.random() * sw,
      t: Math.random() * sh,
      v: {x: Math.random(), y: Math.random()}
    },
    {
      r: (Math.random() * sw/5) + 10,
      l: Math.random() * sw,
      t: Math.random() * sh,
      v: {x: Math.random(), y: Math.random()}
    }
  ]

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
            return <div className="blob" id={`blob${i}`} style={{left: b.l, top: b.t, width: b.r}}></div>
          })}
        </div>
        {/* <Logo opac={1} type={'home'} clicked={()=>{}} />
        <ul style={{opacity: '0', animation: 'navSlide 2s ease 2s 1 forwards', color: 'white'}}>
          <li onClick={about}>About Us</li>
          <li onClick={linkCollections}>Our Collections</li>
          <li onClick={book}>Book a Consultation</li>
        </ul> */}
      </div>
      {collections.map((c, i) => {
        return <Collection collection={c} scrollPos={scrollPos} index={i} slideChange={updatePos} />
      })}
    </div>
  )
}
