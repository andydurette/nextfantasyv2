import React, {useState, createContext} from "react";
import {kingdomData} from "../json/kingdomData.js";
import PropTypes from "prop-types";

export const AppContext = createContext();

export const AppProvider = props => {
	const [modalSwitch, setModalSwitch] = useState(false);
	const [kingdom, setKingdom] = useState(kingdomData);
	const [activeKingdom, setActiveKingdom] = useState(kingdomData.aposia);


	return(
		<AppContext.Provider value={{
			kingdoms: [kingdom, setKingdom], 
			activeKingdoms: [activeKingdom, setActiveKingdom], 
			modal: [modalSwitch, setModalSwitch], 
		}}>
			{props.children}
		</AppContext.Provider>
	);
};

AppProvider.propTypes = {
	children: PropTypes.any,
};
