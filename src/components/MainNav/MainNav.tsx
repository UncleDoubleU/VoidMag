import React from 'react'

function MainNav() {
     return (
          <header>
               <button>skip to main content</button>
               <nav role='naviagtion'>
                    <h1>Outline Mag</h1>
                    <ul>
                         <li>magazine</li>
                         <li>news</li>
                         <li>shop</li>
                         <li>podcast</li>
                         <li>authors</li>
                         <li>drops</li>
                    </ul>
                    <ul>
                         <li><a href=""><img src="" alt="follow this link to our instagram" /></a></li>
                         <li><a href=""><img src="" alt="Check out our tiktok" /></a></li>
                         <li><a href=""><img src="" alt="Check out our youtube" /></a></li>
                         <li><a href=""><img src="" alt="Check out our spotify" /></a></li>
                    </ul>
               </nav>
          </header>
     )
}

export default MainNav
