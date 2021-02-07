import './App.css'
import React from 'react'
import Sidebar from './component/Sidebar'
import Mainbar from './component/Mainbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Album from './component/Album'
import Browse from './component/Browse'
import Artist from './component/Artist'
import Videos from './component/Videos'

function App() {
  return (
    <Router>
      <div className='App'>
        <main>
          <div className='box'>
            <Sidebar />
            <Route path='/' component={Mainbar} exact />
            <Route path='/browse' component={Browse} exact />
            <Route path='/album' component={Album} exact />
            <Route path='/artist' component={Artist} exact />
            <Route path='/videos' component={Videos} exact />
          </div>
          <div className='player'></div>
        </main>
      </div>
    </Router>
  )
}

export default App

/*



  const left = () => {
    console.log('left button pressed')
  }

  const right = () => {
    console.log('right button pressed')
  }

 <div className='topContainer'>
          <div className='listName'>
            <h4>Playlist Topchart</h4>
            <div>
              <IconButton className='left' onClick={left}>
                <KeyboardArrowLeftIcon />
              </IconButton>
              <IconButton className='right' onClick={right}>
                <KeyboardArrowRightIcon />
              </IconButton>
            </div>
          </div>
        </div>

          <Row>
            {playlist.map((item, index) => (
              <Col sm={12} md={3} lg={3} xl={3}>
                <SongComponent key={index} item={item} />
              </Col>
            ))}
          </Row>
        
          <div className='mostPopularContainer'>
            <h1 className='popular__text'>Most Popular</h1>
            {playlist.map((playlistitem, index) => (
              <Song key={playlistitem._id} song={playlistitem} />
            ))}
          </div>


*/
