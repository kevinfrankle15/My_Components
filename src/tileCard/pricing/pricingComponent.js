import React, { useEffect, useState } from "react";
import { CarouselElement } from "../../Carousel/carouselElements";
import "./pricing.css";

const PricingCardComponent = ({ pricingCard }) => {
  const PricingCards = () => {
    return (
      <div className="pricingWrapper">
        <div className="pricingcontainer">
          <CarouselElement slides={pricingCard}>
            {pricingCard.map((values) => {
              return <SinglePricingCard cardData={values} />;
            })}
          </CarouselElement>
        </div>
      </div>
    );
  };

  const SinglePricingCard = ({ cardData }) => {
    const [fetchData, setFetchData] = useState({
      key: "",
      headerType: "",
      tag: "",
      type: "",
      acctualAmountString: "",
      discountedAmount: "",
      currency: "",
      offer: "",
    });
    const [getData, setGetData] = useState(false);

    let {
      customClassName,
      header,
      content,
      footer,
      getCardData = (data) => {
        console.log(data);
      },
    } = cardData;
    let { amount, logo, headerType, tag, amountType, key } = header;
    let { acctualAmount, discountedAmount, currency, offer } = amount;
    let { actionButtonName, actionButton, toBeDisabled } = footer;
    let getTag = tag.slice(0, 2);

    const amountToCurrency = (cur, amt) => {
      return amt.toLocaleString("en-IN", { style: "currency", currency: cur });
    };
    useEffect(() => {
      if (getData) {
        getCardData(fetchData);
      }
    }, [getData]);
    const contentType = (data) => {
      if (data.type === "array") {
        return data.element.map((contents, index) => {
          return (
            <div style={{ display: "flex" }}>
              <span style={{ fontWeight: "bold" }}>&#10003;</span>
              <div
                key={index}
                style={{ paddingBottom: "5px", marginLeft: "10px" }}
              >
                {contents}
              </div>
            </div>
          );
        });
      } else if (data.typr === "image") {
        return data.element.map((image, id) => {
          return <img key={id} src={image} alt="Loading" />;
        });
      } else if (data.type === "customContent") {
        return data.element;
      }
    };
    return (
      <div className={customClassName || "pricingCard"}>
        <div className="headerDiv">
          {/* {getTag.length > 0 ? ( */}
          <div className={`${getTag.length > 0 ? "" : "noTag"} tagDiv`}>
            <div className="tag">{getTag}</div>
          </div>
          {/* ) : null} */}
          <div className="logo_amount_div">
            {logo ? (
              <span className="logo">
                <img src={logo} className="image" alt="logoHere" />
              </span>
            ) : null}
            <div className={logo ? "" : "type_amount_wrapper"}>
              <div className="headerType">{headerType}</div>
              <hr className="hr" />
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div className="amount">
                  {amountToCurrency(currency, discountedAmount)}
                </div>
                <span className="type"> {amountType}</span>
              </div>
              <div className="accAmount">
                {amountToCurrency(currency, acctualAmount)}
              </div>
            </div>
          </div>
          {offer ? <div className="offer">{offer}</div> : null}
        </div>
        <div className="contentDiv">{contentType(content)}</div>
        <div>
          {actionButton || (
            <button
              className="button"
              disabled={toBeDisabled}
              onClick={() => {
                setFetchData({
                  ...fetchData,
                  key: key,
                  headerType: headerType,
                  tag: tag,
                  amountType: amountType,
                  acctualAmountString: acctualAmount,
                  discountedAmount: discountedAmount,
                  currency: currency,
                  offer: offer,
                });
                setGetData(true);
              }}
            >
              {actionButtonName}
            </button>
          )}
        </div>
      </div>
    );
  };
  return (
    <>
      <PricingCards />
    </>
  );
};

export default PricingCardComponent;
