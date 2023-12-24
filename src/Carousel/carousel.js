import { CarouselElement } from "./carouselElements";
import { imageList } from "./images";
// import { useState } from "react";

const Carousel = () => {
  // const [set,setSet] = useState([])
  const images = [
    "https://upload.wikimedia.org/wikipedia/commons/6/6d/Full_featured_double_rainbow_at_Savonlinna_1000px.jpg",

    "https://images.expothemes.com/thanos/images/thanos-windows-theme-3-hd.jpg",

    "http://2.bp.blogspot.com/-vEvhf8_kLes/Ty7d7-9SfcI/AAAAAAAAFAU/wHE9zBmxwfU/s1600/RainbowArch.jpg",

    "https://previews.123rf.com/images/silvae/silvae2002/silvae200200012/142549966-light-effects-thunderstorm-electrical-discharge-between-two-points-heat-lighting-electrical-energy-v.jpg",
  ];
  // let combine=images.concat(imageList)

  // const convertImageStrToObj = (imageArray) => {
  //   return  imageArray?.map(()=> (

  //     {imageUrl: imageList.imageUrl}
  //    )
  //    )}

  let data = imageList && imageList.length > 0 ? imageList : images;

  return (
    <CarouselElement slides={data}>
      {data.map((item, index) => {
        return <img alt="Carousel" src={item} key={index} />;
      })}
    </CarouselElement>
  );
};

export default Carousel;
