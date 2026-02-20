

import './App.sass'
import MainNav from './components/MainNav/MainNav'
import ArticlesIndex from './components/ArticlesIndex/ArticlesIndex'
import IssueInfo from './components/IssueInfo/IssueInfo'
import { useId } from 'react'

function App() {
  const mainId = useId();

  return (
    <>
      <MainNav mainContentId={mainId} />
      <ArticlesIndex mainContentId={mainId}/>
      <IssueInfo />
    </>
  )
}

export default App
