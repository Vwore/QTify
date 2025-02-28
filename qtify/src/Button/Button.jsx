import React from 'react'
import { Button } from '@mui/material';
import styles from './Button.module.css'


function Buttons({children})
{
    return(
        <Button className={styles.button}>
            {children}
        </Button>
    )
}

export default Buttons;