import * as React from 'react';
import TextField from '@mui/material/TextField';
function Search({ handleSearch }) {
    return (<TextField id="standard-basic"
        label="Search"
        name='search'
        variant="standard" onChange={handleSearch} />)
}
export default Search

