import Box from '@mui/material/Box'
const COLUMN_HEADER_HEIGHT='50px'
const COLUMN_FOOTER_HEIGHT='56px'
const BoardContent = () => {
  return (
    <Box sx={{ height:(theme) =>{theme.trello.boardContentHeight}, display:'flex', width:'100%', bgcolor:(theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2') }}>
      <Box sx={{ minWidth:'300px', maxWidth:'300px', bgcolor:(theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'), ml:2, borderRadius:'6px' }}>
        <Box sx={{ height: COLUMN_HEADER_HEIGHT, p:2, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          Header
        </Box>
        <Box sx={{ }}>List</Box>
        <Box sx={{ height: COLUMN_FOOTER_HEIGHT, p:2, display:'flex', alignItems:'center', justifyContent:'space-between' }}>Footer</Box>
      </Box>
    </Box>
  )
}

export default BoardContent
