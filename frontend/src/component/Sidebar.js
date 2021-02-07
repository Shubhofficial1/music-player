import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { LinkContainer } from 'react-router-bootstrap'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <div className='profile'>
          <img
            src='https://firebasestorage.googleapis.com/v0/b/tasky-ec13f.appspot.com/o/boy.png?alt=media&token=da241160-6e40-4e70-a1b6-d6da099ca12a'
            alt=''
            className='profile__avatar'
          ></img>
        </div>
        <p className='text-center'>Shubham kumar</p>
      </div>
      <List disablePadding dense>
        <LinkContainer to='/' exact>
          <ListItem button>
            <ListItemText className='text-center '>
              <div className='text'>Home</div>
            </ListItemText>
          </ListItem>
        </LinkContainer>

        <LinkContainer to='/browse' exact>
          <ListItem button>
            <ListItemText className='text-center '>
              <div className='text'>Browse</div>
            </ListItemText>
          </ListItem>
        </LinkContainer>

        <LinkContainer to='/album' exact>
          <ListItem button>
            <ListItemText className='text-center '>
              <div className='text'>Album</div>
            </ListItemText>
          </ListItem>
        </LinkContainer>

        <LinkContainer to='/artist' exact>
          <ListItem button>
            <ListItemText className='text-center'>
              <div className='text'>Artist</div>
            </ListItemText>
          </ListItem>
        </LinkContainer>

        <LinkContainer to='/videos' exact>
          <ListItem button>
            <ListItemText className='text-center'>
              <div className='text'>Videos</div>
            </ListItemText>
          </ListItem>
        </LinkContainer>
      </List>
    </div>
  )
}

export default Sidebar

/*



import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined'
import NoteOutlinedIcon from '@material-ui/icons/NoteOutlined'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined'
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined'


<HomeOutlinedIcon fontSize='small' />
<AppsOutlinedIcon fontSize='small' />
 <NoteOutlinedIcon fontsize='small' />
 <PersonOutlineOutlinedIcon fontsize='small' />
  <VideocamOutlinedIcon fontsize='small' />

*/
