import Link from "next/link";
import React from "react";

function Footer() {
  let year = new Date().getFullYear();

  return (
    <React.Fragment>
      <footer>
        <p id="copyright">Copyright © Andy Durette {year}</p>
        <p id="accreditation">
          <Link href="/accreditation">Accreditation</Link>
        </p>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
