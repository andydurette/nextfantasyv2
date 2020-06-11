import React, {useContext} from "react";
import { AppContext } from "../utils/AppContext";

const Modal = () => {

	// Call Context 
	const {modal, activeKingdoms} = useContext(AppContext);
	// Handle mobile class for operating menu
	let [modalSwitch, setModalSwitch] = modal;
	// eslint-disable-next-line
  let [activeKingdom, setActiveKingdom] = activeKingdoms; 


	// Navigation mobile menu controller upon clicking the hamburger menu
	const closeModal = (e) => {
		e.preventDefault();
		setModalSwitch( modalSwitch = false );
	};

	const modalImgStyle = {
		backgroundImage: `url('./${activeKingdom.thumbnail}')`,
	};

	return (
		<div id="popup" className={`popup ${(modalSwitch === false ? "" : "activeModal")}`}>
			<div className="popup-inner">
				<div className="popup__photo" style={modalImgStyle}>
					{/*<img src="https://images.unsplash.com/photo-1515224526905-51c7d77c7bb8?ixlib=rb-0.3.5&s=9980646201037d28700d826b1bd096c4&auto=format&fit=crop&w=700&q=80" alt="" />*/}
				</div>
				<div className="popup__text">
					<h1>{activeKingdom.name}</h1>
					<p>{activeKingdom.description}</p>
				</div>
				<button className="popup__close" onClick={(e) => closeModal(e) }>X</button>
			</div>
		</div>
	);
};

export default Modal;