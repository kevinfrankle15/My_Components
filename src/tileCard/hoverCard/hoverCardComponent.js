import React, { useState, useEffect } from "react";

const HoverCardComponent = ({ data, index }) => {
  let {
    userResponse = (response) => {
      console.log(response);
    },
    isAddedToCart = (res) => {
      console.log(res);
    },
    isLiked = (response) => {
      console.log(response);
    },
  } = data;
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [likeColor, setLikeColor] = useState(false);
  const [changeImg, setChangeImg] = useState(true);
  const [onhover, setOnHover] = useState(false);
  const [cartMsg, setCartMsg] = useState("Add To Cart");
  const [cartAdded, setCardAdded] = useState(false);
  const [feedbackResponse, setFeedbackResponse] = useState({
    feedbackRating: "",
    cardId: "",
  });
  const [likeResponse, setLikeResponse] = useState({
    isLiked: "",
    cardId: "",
  });
  const [addToCartResponse, setAddToCartResponse] = useState({
    isAddedToCart: "",
    cardId: "",
  });
  useEffect(() => {
    userResponse(feedbackResponse);
  }, [feedbackResponse]);
  useEffect(() => {
    isLiked(likeResponse);
  }, [likeColor]);
  useEffect(() => {
    setCartMsg(cartAdded ? "Added" : "Add To Cart");
    isAddedToCart(addToCartResponse);
  }, [cartAdded]);

  const selectedStars = (values, id) => {
    setCurrentValue(values);
    setFeedbackResponse({
      ...feedbackResponse,
      feedbackRating: values,
      cardId: id,
    });
  };

  const handleHover = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleLeave = () => {
    setHoverValue(undefined);
  };
  const hoverCardImg = (img) => {
    return (
      <>
        {img.map((images) => {
          return <img src={images} alt="loading" className="fullscreen" />;
        })}
      </>
    );
  };
  const icons = (icon, key) => {
    return (
      <>
        <div className="iconDiv">
          {icon.map((icons, idx) => {
            return (
              <i
                key={idx}
                className={icons}
                onClick={() => {
                  idx === 0 && setLikeColor(!likeColor);
                  setLikeResponse({
                    ...likeResponse,
                    isLiked: !likeColor,
                    cardId: key,
                  });
                }}
                id={`${likeColor && idx === 0 ? "liked" : ""}`}
              />
            );
          })}
        </div>
      </>
    );
  };

  const feedbackIcons = (icons, key) => {
    var star = Array(icons).fill(0);

    return (
      <>
        <div className="feedbackDiv">
          {star.map((_, index) => {
            return (
              <i
                className={`fa fa-star
                   feedback`}
                onClick={() => {
                  selectedStars(index + 1, key);
                }}
                onMouseOver={(e) => {
                  handleHover(index + 1);
                }}
                onMouseLeave={handleLeave}
                style={
                  (hoverValue || currentValue) > index
                    ? { color: "#FFBA5A" }
                    : { color: "#a9a9a9" }
                }
              />
            );
          })}
        </div>
      </>
    );
  };

  const addToCart = (cart, key) => {
    return (
      <>
        <div>
          <div
            className="addtocart"
            onMouseOver={() => {
              setOnHover(true);
            }}
            onMouseLeave={() => {
              setOnHover(false);
            }}
          >
            <i
              className={cart}
              onClick={() => {
                setCardAdded(!cartAdded);
                setAddToCartResponse({
                  ...addToCartResponse,
                  isAddedToCart: !cartAdded,
                  cardId: key,
                });
              }}
            />
          </div>
          <div className={onhover ? "addtocartHOver" : "displayNone"}>
            {cartMsg}
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="hoverCardWrapper">
        <div className="hoverCardContainer">
          <div
            className="hoverCard"
            style={data.inLineStyle}
            onMouseOver={() => {
              setChangeImg(false);
            }}
            onMouseLeave={() => {
              setChangeImg(true);
            }}
          >
            {data.image
              ? hoverCardImg(
                  changeImg ? data.image : data.imageAfterHover || []
                )
              : ""}
            <div className="overlay">
              <div className="overlaysContainer">
                <div style={{ width: "100%" }}>
                  <div className="hoverContentContainer">{data.content}</div>
                  <div>
                    {data.feedbackStarCount
                      ? feedbackIcons(data.feedbackStarCount, index)
                      : ""}
                  </div>
                  <div>
                    {data.link ? (
                      <a href={data.link} className="link" target="blank">
                        &#8599; open Link
                      </a>
                    ) : (
                      ""
                    )}
                  </div>
                  <div>
                    {data.addToCart ? addToCart(data.addToCart, index) : ""}
                  </div>
                </div>
                <div className="hoverIconContainer">
                  {data.icons ? icons(data.icons, index) : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HoverCardComponent;
