import React, { useEffect, useState } from "react";
import { CarouselElement } from "../../Carousel/carouselElements";
import "./carousel.css";

const CauroselComponent = ({ data, index }) => {
  let {
    LikedCarouselCard = (response) => {
      console.log(response);
    },
    carouselCard1AddedToCart = (response) => {
      console.log(response);
    },
  } = data;

  const [carouselMouseEnter, setCarouselMouseEnter] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [isAddedToCart, setIsAddToCart] = useState(false);
  const [cartMsg, setCartMsg] = useState("Add To Cart");
  const [likeCarouselCard, setLikeCarouselCard] = useState({
    cardId: "",
    LikedCarouselCard: "",
  });
  const [addCartCarousel, setAddCartCarousel] = useState({
    cardId: "",
    addCartCarouselCard: "",
  });
  useEffect(() => {
    setCartMsg(isAddedToCart ? "Added" : "Add To Cart");
    carouselCard1AddedToCart(addCartCarousel);
  }, [isAddedToCart]);
  useEffect(() => {
    LikedCarouselCard(likeCarouselCard);
  }, [isLiked]);
  const likeIcon = (icon, index) => {
    return (
      <i
        className={`${icon} ${isLiked ? "liked" : ""} carouselLikeIcon`}
        onClick={() => {
          setIsLiked(!isLiked);
          setLikeCarouselCard({
            ...likeCarouselCard,
            LikedCarouselCard: !isLiked,
            cardId: index,
          });
        }}
      />
    );
  };
  const carouselImages = (images, hoverState) => {
    return (
      <CarouselElement slides={images} hoverState={hoverState}>
        {images.map((item, index) => {
          return <img alt="Carousel" src={item} key={index} />;
        })}
      </CarouselElement>
    );
  };
  return (
    <>
      <div className="carouselCardWrapper">
        <div
          className="carouselCardDiv"
          onMouseEnter={() => setCarouselMouseEnter(true)}
          onMouseLeave={() => {
            setCarouselMouseEnter(false);
          }}
        >
          {data.likeIcon ? likeIcon(data.likeIcon, index) : ""}
          {data.images ? carouselImages(data.images, carouselMouseEnter) : null}
          {data.content}
          <span
            className={`${
              isAddedToCart ? "addCartCarouselTrue" : ""
            } carouselAddToCart`}
            onClick={() => {
              setIsAddToCart(!isAddedToCart);
              setAddCartCarousel({
                ...addCartCarousel,
                cardId: index,
                addCartCarouselCard: !isAddedToCart,
              });
            }}
          >
            {cartMsg}
          </span>
        </div>
      </div>
    </>
  );
};

export default CauroselComponent;
