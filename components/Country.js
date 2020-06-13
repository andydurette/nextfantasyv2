import PropTypes from "prop-types";

const Country = (props) => {
	return(
		<React.Fragment>
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
						<h1>{props.historyHeading}</h1>
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
						<h1>{props.cultureHeading}</h1>
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
						<h1>{props.leaderHeading}</h1>
						<p>{props.leaderText}</p>
					</div>
				</div>
			</div>


		</React.Fragment>
	);
};

Country.propTypes = {
	historyImage: PropTypes.string,
	historyHeading: PropTypes.string,
	historyText: PropTypes.string,
	cultureImage: PropTypes.string,
	cultureHeading: PropTypes.string,
	cultureText: PropTypes.string,
	leaderImage: PropTypes.string,
	leaderHeading: PropTypes.string,
	leaderText: PropTypes.string
};

export default Country;