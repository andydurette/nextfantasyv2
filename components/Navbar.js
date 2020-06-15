import React, {useEffect} from "react";
import Link from "next/link";
import Nextfantasyicon from "../public/content/svg/nextfantasy-large.svg";


const Navbar = () => {

	useEffect(() => {
		window.addEventListener("click", (e) => {
			if ( e.target.classList.contains("nav-link")) {
				window.document.getElementById("drop").checked = false;
				window.document.getElementById("drop-1").checked = false;
			
			}
		});
  },[]);



	return(
		<React.Fragment>
			<nav>
				<div id="logo"><Link href="/"><a className="nav-link"><img src={Nextfantasyicon} alt=""  height="40" /></a></Link></div>

				<label htmlFor="drop" className="toggle">Menu</label>
				<input type="checkbox" id="drop" />
				<ul className="menu">
					<li><Link href="/"><a className="nav-link">Home</a></Link></li>
					<li><Link href="/map"><a className="nav-link">Map</a></Link></li>
					<li>	
						<label htmlFor="drop-1" className="toggle">Countries +</label>
						<a href="#">Countries</a>
						<input type="checkbox" id="drop-1"/>
						<ul>
							<li><Link as="/countries/aposia" href="/countries/[country]"><a className="nav-link" >Aposia</a></Link></li>
							<li><Link as="/countries/dragard" href="/countries/[country]"><a className="nav-link">Dragard</a></Link></li>
							<li><Link as="/countries/hablo" href="/countries/[country]"><a className="nav-link">Hablo</a></Link></li>
							<li><Link as="/countries/inharice" href="/countries/[country]"><a className="nav-link">Inharice</a></Link></li>
							<li><Link as="/countries/krogsland" href="/countries/[country]"><a className="nav-link">Krog&apos;s Land</a></Link></li>
							<li><Link as="/countries/orf" href="/countries/[country]"><a className="nav-link">Orf</a></Link></li>
							<li><Link as="/countries/ourirus" href="/countries/[country]"><a className="nav-link">Ourirus</a></Link></li>
							<li><Link as="/countries/sledge" href="/countries/[country]"><a className="nav-link">Sledge</a></Link></li>
						</ul>
					</li>
					<li><Link href="/battlegrid"><a className="nav-link">Battlegrid</a></Link></li>
									
					{/* <li>

									
									<label htmlFor="drop-2" className="toggle">Web Design +</label>
									<a href="#">Web Design</a>
									<input type="checkbox" id="drop-2"/>
									<ul>
											<li><a href="#">Resources</a></li>
											<li><a href="#">Links</a></li>
											<li>
												
												
											<label htmlFor="drop-3" className="toggle">Tutorials +</label>
											<a href="#">Tutorials</a>         
											<input type="checkbox" id="drop-3"/>

											<ul>
													<li><a href="#">HTML/CSS</a></li>
													<li><a href="#">jQuery</a></li>
													<li><a href="#">Other</a></li>
											</ul>
											</li>
									</ul>
									</li> */}
				</ul>
			</nav>
		</React.Fragment>

	);
};

export default Navbar;