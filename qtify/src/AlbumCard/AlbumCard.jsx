import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import background from '../asset/Bollywood_hits.png'
import { CardContent } from '@mui/material';
import Chip from '@mui/material/Chip';
import styles from './AlbumCard.module.css';
import { color } from '@mui/system';

function AlbumCard({album}){
    console.log(album);
    return(
        <div className={styles.card}>
            <Card style={{borderRadius: '10px'}}>
                <CardMedia image={album.image} style={{height: '200px', width: '100%'}}/>
                <CardContent style={{display:'flex',padding: '7px'}}>
                <Chip label={`${album.follows} Followers`} style={{color:'#ffffff',backgroundColor:'#000000'}} />
                </CardContent>
            </Card>
            <div style={{color:'white'}}>{album.title}</div>
        </div>
    )
}

export default AlbumCard;