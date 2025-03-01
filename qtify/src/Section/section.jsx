import { Grid2 } from "@mui/material";
import AlbumCard from "../AlbumCard/AlbumCard";
import styles from "./section.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

// Import Swiper styles
import "swiper/css";
import { useState } from "react";

function Section({ album,label }) {
  console.log("section", album);
  const [showAll, setShowAll] = useState(false);
  return (
    <div className={styles.section}>
      <div className={styles.sectionHeading}>
        <div style={{ fontSize: "20px", fontWeight: "600" }}>{label} Song</div>
        <div style={{ fontSize: "20px", fontWeight: "600", color: "#34C94B",cursor: 'pointer' }} onClick={()=> {setShowAll(!showAll)}}>
          {!showAll?'Show All': 'Collapse'}
        </div>
      </div>
      {!showAll ? (
        <Swiper
          spaceBetween={50}
          slidesPerView={6}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={true}
          modules={[Navigation]}
        >
          {album.map((album) => (
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
