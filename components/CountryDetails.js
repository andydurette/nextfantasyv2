import PropTypes from "prop-types";

const CountryDetails = (props) => {
	return(
		<React.Fragment>
			<h1 data-testid="index-text">The history and culture of {props.countryName}</h1>
			<div className="item">
				<div className="image">
					<div>
						<img src={`../${props.historyImage}`} />
						<span>
            History
						</span>
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
						<img src={`../${props.cultureImage}`} />
						<span>
            Culture
						</span>
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
						<img src={`../${props.leaderImage}`} />
						<span>
            Leader
						</span>
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
	leaderText: PropTypes.any
};

export default CountryDetails;