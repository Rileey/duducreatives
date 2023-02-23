import NavBar from '../components/navbar/navbar';
import './works.css'
import React, { useRef, useState } from 'react'
import Footer from '../components/footer/footer';

const Works = () => {

    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    const [show5, setShow5] = useState(false)
    const [show6, setShow6] = useState(false)

    return (
        <div className="App">
        <NavBar />
            <div className="works-container">
                <h1 className='work-title'>Johnny Walker</h1 >
                <div className="player-cont">
                    <iframe title="vimeo-player" src="https://player.vimeo.com/video/728787993?h=c10e97471c" className='vimeo' frameborder="0" allowfullscreen></iframe>
                    <div className="write">
                        <p className='desc'>Experience the ultimate in luxury and sophistication with Johnnie Walker. In this exciting campaign video created by Dudu Creatives, we showcase the premium new package from Johnnie Walker, featuring their new high-rise cocktail and bold bottle design. Watch as notable celebrity influencer, Dusten Truce, unboxes the package and takes you on a journey through the world of Johnnie Walker. With his expert knowledge and sophisticated taste, Dusten reveals the secret behind the new high-rise cocktail and shows you how to mix it to perfection. The new bold bottle design is also a sight to behold, with its sleek lines and stunning design, it's sure to turn heads at any occasion. Watch the video now to join Dusten Truce on this unforgettable journey through the world of Johnnie Walker and discover the ultimate in luxury and sophistication.</p>
                    </div>
                </div>
                <div className="player-cont">
                        <h1 className='work-title'>Fuji Opera Exhibition</h1 >
                        <iframe title="vimeo-player" src="https://player.vimeo.com/video/728788905?h=89b83a6825" className='vimeo'
                        frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe><script src="https://player.vimeo.com/api/player.js"></script>
                    <div className="write">
                        <p className='desc'>Relive the magic of the Fujiland Exhibition, an event that celebrated the rich history and culture of Fuji music. In this captivating event coverage video created by Dudu Creatives, we take you behind the scenes of the Fujiland Exhibition held at the Wale Adenuga Building in Ikoyi, Lagos. Witness the electrifying performances by legendary Fuji musicians, as they take the audience on a journey through time and space. With notable people in attendance, this exhibition was truly a star-studded affair, filled with glamour, excitement, and nostalgia. Our cameras captured all the sights and sounds, from the mesmerizing music to the dazzling outfits, and everything in between. Watch the video now to experience the magic of the Fujiland Exhibition for yourself!</p>
                    </div>
                </div>
                <div className="player-cont">
                    <h1 className='work-title'>Umba App</h1 >
                    <iframe title='vimeo-player' src="https://player.vimeo.com/video/797303098?h=da568e1818" className='vimeo' frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    <div className="write">
                        <p className='desc'>Introducing the Umba app - your ultimate financial solution! This explainer video was created entirely in-house by Dudu Creatives, using our own equipment, for Umba, a fintech company based in Nigeria and Kenya. With Umba, you can easily manage your finances, transfer money, and pay bills all in one place. Our app features a simple and user-friendly interface, making it easy for you to keep track of your spending and savings. Plus, with our fast and secure payment system, you can make transactions with confidence. Join thousands of satisfied users and download the Umba app today!</p>
                    </div>
                </div>
                <div className="player-cont">
                    <h1 className='work-title'>Happy Africa Day</h1 >
                    <iframe title='vimeo-player' src="https://player.vimeo.com/video/738667764?h=619a8330e7" className='vimeo' frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    <div className="write">
                        <p className='desc'>Experience the future of payments with Eyowo! In this exciting ad created by Dudu Creatives, we showcase the revolutionary new payment structure from Eyowo, the fintech company and sub-company of Softcom. Designed to connect deeply with the everyday worker in Africa, this new payment structure makes it easier than ever to send and receive money with just a few clicks. With its user-friendly interface and lightning-fast transactions, Eyowo puts the power of financial freedom in the palm of your hand. Join the millions of satisfied users and start enjoying the benefits of this game-changing platform today. Watch the ad now to see how Eyowo is transforming the payments landscape in Africa.</p>
                    </div>
                </div>
                <div className="player-cont">
                    <h1 className='work-title'>Childrens Day</h1 >
                    <iframe title='vimeo-player' src="https://player.vimeo.com/video/752165294?h=2f3cf26943" className='vimeo' frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    <div className="write">
                        <p className='desc'>This is a typical example of the power of collaboration toward a common goal which is satisfaction. Here at dúdú creatives we strongly believe in the power of collaboration aimed toward customer satisfaction.</p>
                    </div>
                </div>
                <div className="player-cont">
                    <h1 className='work-title'>GTBANK FASHION WEEKEND PROJECTION MAPPING</h1 >
                    <iframe title='vimeo-player' src="https://player.vimeo.com/video/780670357?h=931e287ee3" className='vimeo' frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    <div className="write">
                        <p className='desc'>Experience the magic of the GTBank Fashion Show like never before! In this exclusive video by Dudu Creatives, we take you behind the scenes to showcase the innovative mapping technology used to bring the runway to life. Witness the stunning visuals as the designs come to life in a dynamic display of light and color, perfectly synchronized with the models' movements. Our cutting-edge mapping technology elevates the fashion show to new heights, immersing you in a visual spectacle that you won't soon forget. Watch the video now to see the magic unfold before your very eyes!</p>
                    </div>
                </div>
                <div className="player-cont">
                    <h1 className='work-title'>New Harvest Documentary</h1 >
                    <iframe title='vimeo-player' src="https://player.vimeo.com/video/738660250?h=3d770f7d6e" className='vimeo' frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    <div className="write">
                        <p className='desc'>Step into the world of self-care and mental health awareness with this inspiring short documentary created by Dudu Creatives. Meet the founders of New Harvest, a self-care organization dedicated to promoting mental health awareness and wellbeing, based out of the UK with ties in Nigeria. In this touching documentary, we hear from the founders themselves, as they share their personal stories and experiences that led them to create this vital organization. They discuss the challenges and obstacles they've faced, but also the triumphs and victories they've achieved along the way. With powerful storytelling and stunning visuals, this documentary sheds light on the important work being done by New Harvest, and inspires us all to take better care of ourselves and those around us. Watch now and be inspired to make a positive difference in the world today.</p>
                    </div>
                </div>
            </div>

        <Footer/>

        </div>
    )
}

export default Works

