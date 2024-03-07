import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeItem from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightness from '@mui/icons-material/SettingsBrightness'
import Box from '@mui/material/Box'
function ModeSelect() {

  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    // setAge(event.target.value);
    const selectedMode=event.target.value
    setMode(selectedMode)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-dark-light-mode" sx={{ color:'white', '&.Mui-focused':{ color:'white' } }}>Mode</InputLabel>
      <Select
        labelId="label-dark-light-mode"
        id="demo-select-small"
        value={mode}
        label="Mode"
        onChange={handleChange}
        sx={{ color:'white',
          '&.MuiOutlinedInput-notchedOutline':{ borderColor:'white' },
          '&:hover .MuiOutlinedInput-notchedOutline':{ borderColor:'white' },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline':{ borderColor:'white' },
          '.MuiSvgIcon-root':{ color:'white' }
        }}
      >
        <MenuItem value='light' >
          <div style={{ display:'flex', alignItems:'center', gap:'8px' }}>
            <LightModeItem fontSize='small' />Light
          </div>
        </MenuItem>
        <MenuItem value='dark'>
          <Box sx={{ display:'flex', alignItems:'center', gap:1 }}>
            <DarkModeOutlinedIcon fontSize='small'/>Dark
          </Box>
        </MenuItem>
        <MenuItem value='system'>
          <Box sx={{ display:'flex', alignItems:'center', gap:1 }}>
            <SettingsBrightness fontSize='small'/>System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}


export default ModeSelect
