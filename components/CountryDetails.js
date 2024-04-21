import PropTypes from "prop-types";
import React from "react";
import Image from "next/image";

const CountryDetails = (props) => {
  return (
    <React.Fragment>
      <h1 data-testid="index-text">
        The history and culture of {props.countryName}
      </h1>
      <div className="item">
        <div className="image">
          <div>
            <Image
              src={`${props.historyImage}`}
              alt={`${props.alt}`}
              width="131"
              height="121"
            />
            <span>History</span>
          </div>
        </div>
        <div className="details">
          <div>
            <h2>{props.historyHeading}</h2>
            <p>{props.historyText}</p>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="image">
          <div>
            <Image
              src={`${props.cultureImage}`}
              alt={`${props.alt}`}
              width="131"
              height="121"
            />
            <span>Culture</span>
          </div>
        </div>
        <div className="details">
          <div>
            <h2>{props.cultureHeading}</h2>
            <p>{props.cultureText}</p>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="image">
          <div>
            <Image
              src={`${props.leaderImage}`}
              alt={`${props.alt}`}
              width="131"
              height="121"
            />
            <span>Leader</span>
          </div>
        </div>
        <div className="details">
          <div>
            <h2>{props.leaderHeading}</h2>
            <p>{props.leaderText}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

CountryDetails.propTypes = {
  countryName: PropTypes.any,
  historyImage: PropTypes.any,
  historyHeading: PropTypes.any,
  historyText: PropTypes.any,
  cultureImage: PropTypes.any,
  cultureHeading: PropTypes.any,
  cultureText: PropTypes.any,
  leaderImage: PropTypes.any,
  leaderHeading: PropTypes.any,
  leaderText: PropTypes.any,
};

export default CountryDetails;
