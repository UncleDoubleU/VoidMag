import React from 'react'
import sty from './IssueInfo.module.sass'

function IssueInfo() {
     return (
          <footer className={sty.footer}>
               <h1 className={sty.h1}>Void Outline</h1>
               <p className={sty.issue}>issue N02 - Void Outline</p>
               <p className={sty.date}>june 2025</p>
          </footer>
     )
}

export default IssueInfo
