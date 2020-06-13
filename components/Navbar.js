import Link from "next/link";
import Nextfantasyicon from "../public/content/svg/nextfantasy.svg";

const Navbar2 = () => (

	<React.Fragment>
		<nav>
			<div id="logo"><Link href="/"><a className="nav-link"><img src={Nextfantasyicon} alt="" width="40" height="40" /></a></Link></div>

			<label htmlFor="drop" className="toggle">Menu</label>
			<input type="checkbox" id="drop" />
			<ul className="menu">
				<li><Link href="/"><a className="nav-link">Home</a></Link></li>
				<li><Link href="/about"><a className="nav-link">About</a></Link></li>
				<li><Link href="/map"><a className="nav-link">Map</a></Link></li>
				<li>
					{/* <!-- First Tier Drop Down --> */}
					<label htmlFor="drop-1" className="toggle">Countries +</label>
					<a href="#">Countries</a>
					<input type="checkbox" id="drop-1"/>
					<ul>
						<li><Link href="/countries/apoisa"><a>Apoisa</a></Link></li>
						<li><a>Dragard</a></li>
						<li><a>Hablo</a></li>
						<li><a>Inharice</a></li>
						<li><a>Krog&apos;s Land</a></li>
						<li><a>Orf</a></li>
						<li><a>Ourirus</a></li>
						<li><a>Sledge</a></li>
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

export default Navbar2;