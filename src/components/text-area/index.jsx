import * as React from 'react';
import { styled } from '@mui/system';
import { Input as BaseInput } from "@mui/base/Input";


const Index = () => {
    const CustomInput = styled(BaseInput)(({ theme }) => ({
        display: "flex",
        maxWidth: "100%",
    }));
    const TextareaElement = styled("textarea")(({ theme }) => ({
        width: "900px",
        fontFamily: "'IBM Plex Sans', sans-serif",
        fontSize: "16px",
        fontWeight: 400,
        height: "400px",
        padding: "12px",
        borderRadius: "4px",
        outline: "none",
        border: "1px solid #ccc",
        boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
        // backgroundColor: "gra" ,
        // color: "white"
    }));
    return (
        <div>
            <CustomInput
                slots={{ textarea: TextareaElement }}
                aria-label="Demo input"
                multiline
                placeholder="Type something…"
                onChange={(e) => setCode(e.target.value)}
            />
        </div>
    )
}

export default Index
