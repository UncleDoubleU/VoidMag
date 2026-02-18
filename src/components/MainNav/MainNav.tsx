import React from 'react'
import sty from './MainNav.module.sass'
import InstagramLogo from '../../assets/img/Instagram_Glyph_Black.png'
import TiktokLogo from '../../assets/img/TIKTOK_SOCIAL_ICON_SOLO_BLACK.png'
import SpotifyLogo from '../../assets/img/Spotify_Primary_Logo_RGB_Black.png'
import YoutubeLogo from '../../assets/img/yt_icon_almostblack_digital.png'

function MainNav() {
     return (
          <header>
               <button>skip to main content</button>
               <nav role='navigation' className={sty.nav}>
                    <h1 className={sty.logo}>Outline Mag</h1>
                    <ul className={sty.navList}>
                         <li className={sty.navItem}>
                              <a href="#">magazine</a>
                         </li>
                         <li className={sty.navItem}>
                              <a href="#">news</a>
                         </li>
                         <li className={sty.navItem}>
                              <a href="#">shop</a>
                         </li>
                         <li className={sty.navItem}>
                              <a href="#">podcast</a>
                         </li>
                         <li className={sty.navItem}>
                              <a href="#">authors</a>
                         </li>
                         <li className={sty.navItem}>
                              <a href="#">drops</a>
                         </li>
                    </ul>
                    <ul className={sty.socialList}>
                         <li>
                              <a href="">
                                   <img src={InstagramLogo} width={40} alt="follow this link to our instagram" />
                              </a>
                         </li>
                         <li>
                              <a href="">
                                   <img src={SpotifyLogo} width={40} alt="Check out our tiktok" />
                              </a>
                         </li>
                         <li>
                              <a href="">
                                   <img src={TiktokLogo} width={40} alt="Check out our youtube" />
                              </a>
                         </li>
                         <li>
                              <a href="">
                                   <img src={YoutubeLogo} alt="Check out our spotify" height={40} />
                              </a>
                         </li>
                    </ul>
               </nav>
          </header>
     )
}

export default MainNav
