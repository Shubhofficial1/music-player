import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Song from './Song'

const Mainbar = () => {
  const [playlist] = useState([
    {
      _id: 1,
      name: 'react',
      content: 'Start learning react development & build amazing web apps',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/tasky-ec13f.appspot.com/o/react.jpg?alt=media&token=4d945b80-9a6f-4b48-9d75-592db1ff1904',
      readTime: 7,
      author: 'Shubham kumar',
      addTime: '29 Jan,2020',
    },
    {
      _id: 2,
      name: 'python',
      content:
        'For all those geeks who believes in future teach like ML , AI , Blockchain  ',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/tasky-ec13f.appspot.com/o/python.jpg?alt=media&token=6c348cf3-8fe1-40f0-bbb8-ccebdf940f44',
      readTime: 10,
      author: 'Shubham kumar',
      addTime: '29 Jan,2020',
    },
    {
      _id: 3,
      name: 'html',
      content: 'Begin your web development journey by learning the foundation ',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/tasky-ec13f.appspot.com/o/html.jpg?alt=media&token=eb7288dd-c665-4dd4-8ab6-5fee3b5f0a6c',
      readTime: 6,
      author: 'Shubham kumar',
      addTime: '29 Jan,2020',
    },

    {
      _id: 4,
      name: 'java',
      content:
        'Join the  list of 3 billion people & get placed in your dream company ',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/tasky-ec13f.appspot.com/o/Java.jpg?alt=media&token=5e8ca844-e3fc-4a85-890d-0b7d6d56f8c1',
      readTime: 14,
      author: 'Shubham kumar',
      addTime: '29 Jan,2020',
    },
    {
      _id: 1,
      name: 'react',
      content: 'Start learning react development & build amazing web apps',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/tasky-ec13f.appspot.com/o/react.jpg?alt=media&token=4d945b80-9a6f-4b48-9d75-592db1ff1904',
      readTime: 7,
      author: 'Shubham kumar',
      addTime: '29 Jan,2020',
    },
    {
      _id: 2,
      name: 'python',
      content:
        'For all those geeks who believes in future teach like ML , AI , Blockchain  ',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/tasky-ec13f.appspot.com/o/python.jpg?alt=media&token=6c348cf3-8fe1-40f0-bbb8-ccebdf940f44',
      readTime: 10,
      author: 'Shubham kumar',
      addTime: '29 Jan,2020',
    },
    {
      _id: 3,
      name: 'html',
      content: 'Begin your web development journey by learning the foundation ',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/tasky-ec13f.appspot.com/o/html.jpg?alt=media&token=eb7288dd-c665-4dd4-8ab6-5fee3b5f0a6c',
      readTime: 6,
      author: 'Shubham kumar',
      addTime: '29 Jan,2020',
    },

    {
      _id: 4,
      name: 'java',
      content:
        'Join the  list of 3 billion people & get placed in your dream company ',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/tasky-ec13f.appspot.com/o/Java.jpg?alt=media&token=5e8ca844-e3fc-4a85-890d-0b7d6d56f8c1',
      readTime: 14,
      author: 'Shubham kumar',
      addTime: '29 Jan,2020',
    },
    {
      _id: 1,
      name: 'react',
      content: 'Start learning react development & build amazing web apps',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/tasky-ec13f.appspot.com/o/react.jpg?alt=media&token=4d945b80-9a6f-4b48-9d75-592db1ff1904',
      readTime: 7,
      author: 'Shubham kumar',
      addTime: '29 Jan,2020',
    },
    {
      _id: 2,
      name: 'python',
      content:
        'For all those geeks who believes in future teach like ML , AI , Blockchain  ',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/tasky-ec13f.appspot.com/o/python.jpg?alt=media&token=6c348cf3-8fe1-40f0-bbb8-ccebdf940f44',
      readTime: 10,
      author: 'Shubham kumar',
      addTime: '29 Jan,2020',
    },
    {
      _id: 3,
      name: 'html',
      content: 'Begin your web development journey by learning the foundation ',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/tasky-ec13f.appspot.com/o/html.jpg?alt=media&token=eb7288dd-c665-4dd4-8ab6-5fee3b5f0a6c',
      readTime: 6,
      author: 'Shubham kumar',
      addTime: '29 Jan,2020',
    },

    {
      _id: 4,
      name: 'java',
      content:
        'Join the  list of 3 billion people & get placed in your dream company ',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/tasky-ec13f.appspot.com/o/Java.jpg?alt=media&token=5e8ca844-e3fc-4a85-890d-0b7d6d56f8c1',
      readTime: 14,
      author: 'Shubham kumar',
      addTime: '29 Jan,2020',
    },
    {
      _id: 1,
      name: 'react',
      content: 'Start learning react development & build amazing web apps',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/tasky-ec13f.appspot.com/o/react.jpg?alt=media&token=4d945b80-9a6f-4b48-9d75-592db1ff1904',
      readTime: 7,
      author: 'Shubham kumar',
      addTime: '29 Jan,2020',
    },
    {
      _id: 2,
      name: 'python',
      content:
        'For all those geeks who believes in future teach like ML , AI , Blockchain  ',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/tasky-ec13f.appspot.com/o/python.jpg?alt=media&token=6c348cf3-8fe1-40f0-bbb8-ccebdf940f44',
      readTime: 10,
      author: 'Shubham kumar',
      addTime: '29 Jan,2020',
    },
    {
      _id: 3,
      name: 'html',
      content: 'Begin your web development journey by learning the foundation ',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/tasky-ec13f.appspot.com/o/html.jpg?alt=media&token=eb7288dd-c665-4dd4-8ab6-5fee3b5f0a6c',
      readTime: 6,
      author: 'Shubham kumar',
      addTime: '29 Jan,2020',
    },

    {
      _id: 4,
      name: 'java',
      content:
        'Join the  list of 3 billion people & get placed in your dream company ',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/tasky-ec13f.appspot.com/o/Java.jpg?alt=media&token=5e8ca844-e3fc-4a85-890d-0b7d6d56f8c1',
      readTime: 14,
      author: 'Shubham kumar',
      addTime: '29 Jan,2020',
    },
    {
      _id: 1,
      name: 'react',
      content: 'Start learning react development & build amazing web apps',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/tasky-ec13f.appspot.com/o/react.jpg?alt=media&token=4d945b80-9a6f-4b48-9d75-592db1ff1904',
      readTime: 7,
      author: 'Shubham kumar',
      addTime: '29 Jan,2020',
    },
    {
      _id: 2,
      name: 'python',
      content:
        'For all those geeks who believes in future teach like ML , AI , Blockchain  ',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/tasky-ec13f.appspot.com/o/python.jpg?alt=media&token=6c348cf3-8fe1-40f0-bbb8-ccebdf940f44',
      readTime: 10,
      author: 'Shubham kumar',
      addTime: '29 Jan,2020',
    },
    {
      _id: 3,
      name: 'html',
      content: 'Begin your web development journey by learning the foundation ',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/tasky-ec13f.appspot.com/o/html.jpg?alt=media&token=eb7288dd-c665-4dd4-8ab6-5fee3b5f0a6c',
      readTime: 6,
      author: 'Shubham kumar',
      addTime: '29 Jan,2020',
    },

    {
      _id: 4,
      name: 'java',
      content:
        'Join the  list of 3 billion people & get placed in your dream company ',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/tasky-ec13f.appspot.com/o/Java.jpg?alt=media&token=5e8ca844-e3fc-4a85-890d-0b7d6d56f8c1',
      readTime: 14,
      author: 'Shubham kumar',
      addTime: '29 Jan,2020',
    },
  ])
  return (
    <div className='mainbar'>
      <div className='search'></div>
      <div className='trending__text'>Popular playlist 🚀🚀</div>
      <div className='playlist__container'>
        <Row className=''>
          {playlist.map((song, index) => (
            <Col sm={6} md={6} lg={4} xl={4}>
              <Song key={index} song={song} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default Mainbar
/*

<Row>
        {playlist.map((song, index) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Song key={index} song={song} />
          </Col>
        ))}
      </Row>


*/
