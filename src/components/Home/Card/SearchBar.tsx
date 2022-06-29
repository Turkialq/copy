//** on submit/
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';
import { useState } from 'react';


const SearchBar = () => {
    const [name, setName] = useState('');

    const search = (e: any) => {
        console.log(e.target.value);

    }

    return (
        <div>
            <form onSubmit={search}>
                <TextField sx={{ width: 800 }} id="outlined-basic" label="First name" variant="outlined"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <Button type='submit' variant="contained">Contained</Button>
            </form>
        </div>
    )

}

export default SearchBar





