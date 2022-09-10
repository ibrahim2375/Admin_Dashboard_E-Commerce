import { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
//components
import Save from './Save'
export default function UpdateUser({ handleChange, formData }) {
    const [message, setMessage] = useState('');
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div className="inputs">
                {
                    message === 'updated' && (
                        <Alert severity="success">
                            <AlertTitle>Success</AlertTitle>
                           Updateed successfully — <strong>check it out!</strong>
                        </Alert>
                    )
                }
               
                {/* //name */}
                <TextField
                    type="text"
                    variant="standard"
                    style={{ width: '100%' }}
                    name="name"
                    value={formData?.name}
                    onChange={handleChange}
                />

                {/* Email */}
                <TextField
                    label="Email"
                    type="email"
                    name="email"
                    variant="standard"
                    style={{ width: '100%' }}
                    value={formData?.email}
                    onChange={handleChange}
                />

                {/* Address */}
                <TextField
                    label="Address"
                    type="text"
                    name="address"
                    variant="standard"
                    style={{ width: '100%' }}
                    value={formData?.address}
                    onChange={handleChange}
                />
                {/* Number */}
                <TextField
                    label="Number"
                    type="text"
                    variant="standard"
                    name="number"
                    style={{ width: '100%' }}
                    value={formData?.number}
                    onChange={handleChange}
                />
                { }
                <>
                    <InputLabel id="demo-simple-select-standard-label">Ban</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={formData?.ban}
                        onChange={handleChange}
                        name='ban'
                        label="Types"
                        style={{ width: '100%' }}
                    >
                        <MenuItem value="Ban or Not">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={true}>Ban</MenuItem>
                        <MenuItem value={false}>No Ban</MenuItem>
                    </Select>
                </>

                <Save formData={formData} setMessage={setMessage} />
            </div>
        </Box>
    );
}








