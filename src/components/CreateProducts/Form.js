import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Typography from '@mui/material/Typography';
//components
import Save from './Save'
//json data for products properties
import ProductProperties from '../../json/product_data.json'
export default function FormPropsTextFields(props) {
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };
    const [errors, setErrors] = useState('');
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}

            autoComplete="on"
        >

            <div className="inputs">
                <Typography variant="h5" color='error'>{errors}</Typography>
                {/* //name */}
                <TextField
                    label="Name"
                    type="text"
                    variant="standard"
                    style={{ width: '100%' }}
                    value={props.formvalues?.name}
                    name="name"
                    onChange={props.handleFormData}
                />
                {/* img */}
                <TextField
                    type="file"
                    style={{ width: '100%' }}
                    name='img'
                    onChange={props.handleImg}
                />
                {/* category */}
                <>
                    <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        name='category'
                        value={props.formvalues?.category}
                        onChange={props.handleFormData}
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
                    value={props.formvalues?.brand}
                    name="brand"
                    onChange={props.handleFormData}
                />
                {/* colors */}
                {/* ////////////////////////////////////////////////////////// */}
                <>
                    <InputLabel id="demo-multiple-checkbox-label">Colors</InputLabel>
                    <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={props.colors}
                        onChange={props.handleColors}
                        name="colors"
                        input={<OutlinedInput label="Colors" />}
                        renderValue={(selected) => selected.join('-')}
                        MenuProps={MenuProps}
                        style={{ width: '100%' }}
                    >
                        <MenuItem value="none" disabled ><em>None</em> </MenuItem>
                        {ProductProperties.colors.map((color) => (
                            <MenuItem key={color} value={color}>
                                <Checkbox checked={props.colors.indexOf(color) > -1} />
                                <ListItemText primary={color} />
                            </MenuItem>
                        ))}
                    </Select>

                </>
                {/* /////////////////////////////////////////////////////// */}
                {/* Sizes */}
                {/* ////////////////////////////////////////////////////////// */}
                <>
                    <InputLabel id="demo-multiple-checkbox-label">Sizes</InputLabel>
                    <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={props.sizes}
                        onChange={props.handleSizes}
                        input={<OutlinedInput label="Sizes" />}
                        renderValue={(selected) => selected.join('-')}
                        MenuProps={MenuProps}
                        style={{ width: '100%' }}
                    >
                        <MenuItem value="none" disabled ><em>None</em> </MenuItem>
                        {ProductProperties.sizes.map((size) => (
                            <MenuItem key={size} value={size}>
                                <Checkbox checked={props.sizes.indexOf(size) > -1} />
                                <ListItemText primary={size} />
                            </MenuItem>
                        ))}
                    </Select>

                </>
                {/* /////////////////////////////////////////////////////// */}
                {/* price */}
                <TextField
                    label="Price"
                    type="number"
                    variant="standard"
                    style={{ width: '100%' }}
                    value={props.formvalues?.price}
                    name="price"
                    onChange={props.handleFormData}
                />
                {/* offers */}
                <TextField
                    label="Offers"
                    type="text"
                    variant="standard"
                    style={{ width: '100%' }}
                    value={props.formvalues?.offer}
                    name="offer"
                    onChange={props.handleFormData}
                />
                {/* types */}
                <>
                    <InputLabel id="demo-simple-select-standard-label">Types</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={props.formvalues?.type}
                        name="type"
                        onChange={props.handleFormData}
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
                        value={props.formvalues?.state}
                        name="state"
                        onChange={props.handleFormData}
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
                    value={props.formvalues?.arrivalTime}
                    name="arrivalTime"
                    onChange={props.handleFormData}
                />
                {/* location */}
                <TextField
                    label="location"
                    type="text"
                    variant="standard"
                    style={{ width: '100%' }}
                    value={props.formvalues?.location}
                    name="location"
                    onChange={props.handleFormData}
                />
                {/* selling Port: */}
                <>
                    <InputLabel id="demo-simple-select-standard-label">Selling Port</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={props.formvalues?.sellingPort}
                        name="sellingPort"
                        onChange={props.handleFormData}
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
                    value={props.formvalues?.description}
                    name="description"
                    onChange={props.handleFormData}
                />
                <Save formvalues={props.formvalues} setErrors={setErrors} />
            </div>
        </Box>
    );
}








