import ModeSelect from '../ModeSelect'
import Box from '@mui/material/Box'
import AppsIcon from '@mui/icons-material/Apps'
import { ReactComponent as trello } from '~/assets/trello.svg'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Template from './Menus/Template'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Profiles from './Menus/Profiles'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
import Badge from '@mui/material/Badge'
const AppBar = () => {
  const [searchValue, setSearchValue] = useState('')
  return (
    <Box px={2} sx={{ height:(theme) => theme.trello.appBarHeight, display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', gap :2, overflowX:'auto', bgcolor:(theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0') }}>
      <Box sx={{ display:'flex', alignItems:'center', gap: 2 }} >
        <AppsIcon sx={{ color:'white' }} />
        <Box sx={{ display:'flex', alignItems:'center', gap: 0.5 }}>
          <SvgIcon component={trello} inheritViewBox fontSize='small' sx={{ color:'white' }}/>
          <Typography variant='span' sx={{ fontSize:'1.2em', color:'white' }} >Trello</Typography>
        </Box>
        <Box sx={{ display:{ xs:'none', md:'flex' }, gap:2 }}>
          <Workspaces />
          <Recent />
          <Starred />
          <Template />
          <Button variant="outlined" sx={{ color:'white', border:'none', '&:hover':{ border:'none' } }} startIcon={<LibraryAddIcon />}>Create</Button>
        </Box>

      </Box>
      <Box sx={{ display:'flex', alignItems:'center', gap:2 }} >
        <TextField
          id="outlined-search"
          label="Search..."
          type="text"
          size="small"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment:(
              <InputAdornment position="start">
                <SearchIcon sx={{ color:'white' }} />
              </InputAdornment>
            ),
            endAdornment:(
              <CloseIcon sx={{ color: searchValue ? 'white' : 'transparent', cursor:'pointer' }} fontSize='small' onClick={() => setSearchValue('')}/>
            ) }}
          sx={{ minWidth:120,
            maxWidth:170,
            '& label':{
              color:'white'
            },
            '& input':{
              color:'white'
            },
            '& label.Mui-focused':{
              color:'white'
            },
            '& .MuiOutlinedInput-root':{
              '& fieldSet': {
                borderColor: 'white'
              },
              '&:hover fieldSet': {
                borderColor: 'white'
              },
              '& .Mui-focused fieldSet': {
                borderColor: 'white'
              }
            }
          }}
        />
        <Tooltip title="Notifications" sx={{ color: 'action.active' }}>
          <Badge color="warning" variant="dot">
            <NotificationsIcon sx={{ cursor: 'pointer', color:'white' }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor:'pointer', color:'white' }} />
        </Tooltip>
        <ModeSelect />
        <Profiles />
      </Box>

    </Box>
  )
}

export default AppBar
