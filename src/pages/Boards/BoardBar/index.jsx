import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
const index = () => {
  const ChipStyle={
    color:'white',
    bgcolor:'transparent', border:'none',
    borderRadius:'4px', paddingX:'5px',
    '& .MuiSvgIcon-root':{
      color:'white'
    },
    '&:hover':{
      bgcolor:'primary.50'
    }
  }
  return (
    <Box px={2} sx={{ height:(theme) => theme.trello.boardBarHeight, display:'flex', alignItems:'center', width:'100%', gap:2, justifyContent:'space-between', overflow:'auto', borderBottom:'0.5px solid white', borderTop:'1px solid #00bfa5', bgcolor:(theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2') }}>
      <Box sx={{ display:'flex', alignItems:'center', gap: 2 }} >
        <Chip icon={<DashboardIcon />} label="TrieuKhanhLinh" clickable sx={ChipStyle} />
        <Chip icon={<VpnLockIcon />} label="Lock" clickable sx={ChipStyle} />
        <Chip icon={<AddToDriveIcon />} label="Add to google" clickable sx={ChipStyle}/>
        <Chip icon={<BoltIcon />} label="Bolt" clickable sx={ChipStyle}/>
        <Chip icon={<FilterListIcon />} label="Filter" clickable sx={ChipStyle}/>
      </Box>
      <Box sx={{ display:'flex', alignItems:'center', gap: 2 }} >
        <Button variant="outlined" sx={{ color:'white', borderColor:'white', '&:hover':{ borderColor:'white' } }} startIcon={<PersonAddIcon/>}>Invite</Button>
        <AvatarGroup max={3} sx={{ gap:'10px', '& .MuiAvatar-root':{
          width: 34, height: 34, fontSize:16, border:'none', color:'white', cursor:'pointer', '&:first-of-type':{ bgcolor:'#a4b0be' }
        } }} >
          <Tooltip title='TrieuLinh'>
            <Avatar alt=" Sharp" src="https://avatars.githubusercontent.com/u/107738933?v=4" />
          </Tooltip>
          <Tooltip title='Trieu Linh'>
            <Avatar alt=" Sharp" src="https://avatars.githubusercontent.com/u/107738933?v=4" />
          </Tooltip>
          <Tooltip title='Trieu Linh'>
            <Avatar alt=" Sharp" src="https://avatars.githubusercontent.com/u/107738933?v=4" />
          </Tooltip>
          <Tooltip title='Trieu Linh'>
            <Avatar alt=" Sharp" src="https://avatars.githubusercontent.com/u/107738933?v=4" />
          </Tooltip>
          <Tooltip title='Trieu Linh'>
            <Avatar alt=" Sharp" src="https://avatars.githubusercontent.com/u/107738933?v=4" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default index
