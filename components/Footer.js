import Link from "next/link";

function Footer() {

	let year = new Date().getFullYear();

	return(
		<React.Fragment>
			<footer>
				<p id="copyright">Copyright © Andy Durette {year}</p>
				<p id="accreditation"><Link href="/"><a>Accreditation</a></Link></p>
			</footer>
		</React.Fragment>
	);
}

export default Footer;