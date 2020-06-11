import Link from "next/link";

const Navbar = () => (
	<div>
		<header className="header">
			<h1 className="logo" ><Link href="/"><a className="nav-link" data-testid="nav-logo" >DnD</a></Link></h1>
			<ul className="main-nav">
				<li><Link href="/"><a className="nav-link">Home</a></Link></li>
				<li><Link href="/about"><a className="nav-link">About</a></Link></li>
				<li><Link href="/map"><a className="nav-link">Map</a></Link></li>
				<li><Link href="/battlegrid"><a className="nav-link">Battlegrid</a></Link></li>
			</ul>
		</header> 
	</div>
);

export default Navbar;