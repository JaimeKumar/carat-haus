import React, { useEffect, useRef } from 'react'
import $ from 'jquery';

export default function About({ close }) {

    const skip = useRef(false)
    const closed = useRef(false)
    const pos = useRef(0)

    useEffect(() => {
        $(`#abouts`).animate({opacity: 1}, 500, 'linear', () => {
            animate(0);
        })
    }, [])

    function animateClose() {
        closed.current = true;
        pos.current = 0;
        skip.current = false;
        $(`#abouts`).animate({opacity: 0}, 500, 'linear', () => {
            close();
        })
    }
    
    const abouts = [
        "Welcome to Carat Haus London, where timeless elegance meets modern innovation in the world of diamonds. With a legacy spanning over five decades, our family has been at the heart of the jewellery industry, and today, we proudly specialise in both natural and lab-grown diamonds, offering you the finest selection of ethically sourced gems.",
        "At Carat Haus London, we understand that the moment you decide to commit to a lifetime of love is a truly special one. That's why our primary focus is on crafting exquisite engagement rings that capture the essence of your unique love story. Our expert artisans combine traditional craftsmanship with cutting-edge technology to create rings that are not just symbols of commitment, but also works of art.",
        "But our commitment to excellence doesn't stop there. We also offer bespoke, custom-made luxury pieces that cater to your individual style and desires. Whether it's an anniversary gift, a statement necklace, or a pair of dazzling earrings, our team will work closely with you to bring your vision to life, ensuring every detail is a reflection of your distinct personality.",
        "At Carat Haus London, we are dedicated to transparency, quality, and sustainability. Our diamonds are sourced responsibly, and our craftsmanship is second to none. We invite you to explore our exquisite collection, experience the magic of our custom creations, and embark on a journey through the world of diamonds with us. It's our privilege to be part of your most cherished moments, helping you celebrate love and life's precious milestones in the most beautiful way possible."
    ]

    function animate(n) {
        if (n > 3) {animateClose(); return}
        $(`#about${n}`).animate({opacity: 1}, 1000, 'linear', () => {
            setTimeout(() => {
                if (closed.current) return;
                $(`#about${n}`).animate({opacity: 0}, 1000, 'linear', () => {
                    if (!skip.current) {
                        pos.current = n + 1;
                        animate(n+1)
                    } else {
                        skip.current = false;
                    }
                })
            }, 9000)
        })
    }

    function nextSlide() {
        skip.current = true;
        $(`#about${pos.current}`).animate({opacity: 0}, 1000, 'linear', () => {
            pos.current = pos.current + 1;
            animate(pos.current)
        })
    }

  return (
    <div id='abouts' onClick={nextSlide}>
        <div className="aboutTexts">
            {abouts.map((t, i) => {
                let tstyle = (i%2)===0?{
                    left: Math.floor(Math.random() * 15) + '%',
                    bottom: Math.floor(Math.random() * 65) + '%'    
                }:{
                    right: Math.floor(Math.random() * 15) + '%',
                    bottom: Math.floor(Math.random() * 65) + '%'
                };
                tstyle.opacity = 0;
                return <p id={`about${i}`} style={tstyle}>{t}</p>
            })}
        </div>
    </div>
  )
}
