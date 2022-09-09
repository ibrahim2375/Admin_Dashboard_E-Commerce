import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Typography from '@mui/material/Typography';
//components
import Save from './Save'
//json data for products properties
import ProductProperties from '../../json/product_data.json'
export default function UpdateProduct({ handleChange, formData }) {
    const [message, setMessage] = useState('');
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}

            autoComplete="on"
        >
            <div className="inputs">
                <h4 style={{ color: message === 'updated' ? 'green' : 'red' }}> {message}</h4>
                {/* //name */}
                <TextField
                    label="Name"
                    type="text"
                    variant="standard"
                    style={{ width: '100%' }}
                    value={formData?.name}
                    name="name"
                    onChange={handleChange}
                />

                {/* category */}
                <>
                    <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        name='category'
                        value={formData?.category}
                        onChange={handleChange}
                        label="Category"
                        style={{ width: '100%' }}
                    >
                        <MenuItem disabled ><em>None</em> </MenuItem>
                        {ProductProperties.categories.map((category, i) => <MenuItem value={category} key={i}>{category}</MenuItem>)}
                    </Select>
                </>
                {/* brand */}
                <TextField
                    label="brand"
                    type="text"
                    variant="standard"
                    style={{ width: '100%' }}
                    value={formData?.brand}
                    name="brand"
                    onChange={handleChange}
                />

                <TextField
                    label="Price"
                    type="number"
                    variant="standard"
                    style={{ width: '100%' }}
                    value={formData?.price}
                    name="price"
                    onChange={handleChange}
                />
                {/* offers */}
                <TextField
                    label="Offers"
                    type="text"
                    variant="standard"
                    style={{ width: '100%' }}
                    value={formData?.offer}
                    name="offer"
                    onChange={handleChange}
                />
                {/* types */}
                <>
                    <InputLabel id="demo-simple-select-standard-label">Types</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={formData?.type}
                        name="type"
                        onChange={handleChange}
                        label="Types"
                        style={{ width: '100%' }}
                    >
                        <MenuItem value="none" disabled ><em>None</em> </MenuItem>
                        {ProductProperties.types.map((type) => <MenuItem value={type} key={type}>{type}</MenuItem>)}
                    </Select>
                </>
                {/* states */}
                <>
                    <InputLabel id="demo-simple-select-standard-label">States</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={formData?.state}
                        name="state"
                        onChange={handleChange}
                        label="States"
                        style={{ width: '100%' }}
                    >
                        <MenuItem value="none" disabled ><em>None</em> </MenuItem>
                        {ProductProperties.state.map((s) => <MenuItem value={s} key={s}>{s}</MenuItem>)}
                    </Select>
                </>
                {/* arrival time */}
                <TextField
                    label="arrival time"
                    type="text"
                    variant="standard"
                    style={{ width: '100%' }}
                    value={formData?.arrivalTime}
                    name="arrivalTime"
                    onChange={handleChange}
                />
                {/* location */}
                <TextField
                    label="location"
                    type="text"
                    variant="standard"
                    style={{ width: '100%' }}
                    value={formData?.location}
                    name="location"
                    onChange={handleChange}
                />
                {/* selling Port: */}
                <>
                    <InputLabel id="demo-simple-select-standard-label">Selling Port</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={formData?.sellingPort}
                        name="sellingPort"
                        onChange={handleChange}
                        label="Selling Port"
                        style={{ width: '100%' }}
                    >
                        <MenuItem value="none" disabled ><em>None</em> </MenuItem>
                        {ProductProperties.sellingPorts.map((p) => <MenuItem value={p} key={p}>{p}</MenuItem>)}
                    </Select>
                </>
                {/* description */}

                <TextareaAutosize
                    aria-label="minimum height"
                    minRows={5}
                    placeholder="description"
                    style={{ width: '100%' }}
                    value={formData?.description}
                    name="description"
                    onChange={handleChange}
                />
                <Save formData={formData} setMessage={setMessage} />
            </div>
        </Box>
    );
}








