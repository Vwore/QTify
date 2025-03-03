import { Grid2 } from "@mui/material";
import AlbumCard from "../AlbumCard/AlbumCard";
import styles from "./section.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


// Import Swiper styles
import "swiper/css";
import { useEffect, useState } from "react";
import axios from "axios";

function Section({ album, label, isSong = false }) {
  const [filteredSong, setFilteredSong] = useState(isSong?album:null);
  const [showAll, setShowAll] = useState(false);
  const [value,setValue] = useState('all');
  const [genre,setGenre] = useState([]);

  function handleChange(e,value)
  {
    console.log(value);
    if(value==='all') setFilteredSong(album);
    else{
      const filterData= album.filter((song)=>(song.genre.key===value));
      console.log(filterData);
      setFilteredSong(filterData);
    }
    setValue(value);
  }

  async function fetchgenre() {
    try{
      const genreResponse = await axios.get('https://qtify-backend-labs.crio.do/genres');
      // console.log('genere',genreResponse);
      setGenre(genreResponse.data.data);
    }
    catch(e)
    {
      console.log(e.response)
    }
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  useEffect(()=>{
    if(isSong) setFilteredSong(album);
    fetchgenre();
  },[album]);
  return (
    <div className={styles.section}>
      <div className={styles.sectionHeading}>
        <div style={{ fontSize: "20px", fontWeight: "600" }}>{label} Song</div>
        {!isSong && (
          <div
            style={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#34C94B",
              cursor: "pointer",
            }}
            onClick={() => {
              setShowAll(!showAll);
            }}
          >
            {!showAll ? "Show All" : "Collapse"}
          </div>
        )}
      </div>
      
      {isSong?<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab className={styles.tab} label='All' value={'all'}  /> 
          {genre.map((value,index)=>(<Tab className={styles.tab} label={value.label} value={value.key} />))}
          
        </Tabs>:null}
      {!showAll ? (
        <Swiper
          spaceBetween={50}
          slidesPerView={6}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={true}
          modules={[Navigation]}
        >
          {isSong
            ? filteredSong.map((song) => (
                <SwiperSlide>
                  <AlbumCard album={song} />
                </SwiperSlide>
              ))
            : album.map((album) => (
                <SwiperSlide>
                  <AlbumCard album={album} />
                </SwiperSlide>
              ))}
        </Swiper>
      ) : (
        <Grid2 container spacing={5} marginX={"8px"}>
          {album.map((album) => (
            <Grid2 Item>
              <AlbumCard album={album} />
            </Grid2>
          ))}
        </Grid2>
      )}
    </div>
  );
}

export default Section;
