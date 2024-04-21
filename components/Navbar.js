import React, { useEffect } from "react";
import Link from "next/link";
import Nextfantasyicon from "../public/content/svg/nextfantasy-large.svg";
import Image from "next/image";

const Navbar = () => {
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target.classList.contains("nav-link")) {
        window.document.getElementById("drop").checked = false;
        window.document.getElementById("drop-1").checked = false;
      }
    });
  }, []);

  return (
    <React.Fragment>
      <nav>
        <div id="logo">
          <Link href="/">
            <span className="nav-link">
              <Image src={Nextfantasyicon} alt="next fantasy" height="40" />
            </span>
          </Link>
        </div>

        <label htmlFor="drop" className="toggle">
          Menu
        </label>
        <input type="checkbox" id="drop" />
        <ul className="menu">
          <li>
            <Link href="/">
              <span className="nav-link">Home</span>
            </Link>
          </li>

          <li className="countries">
            <label htmlFor="drop-1" className="toggle countries-mobile">
              Countries +
            </label>
            <span className="desktop-countries" href="#">
              Countries
            </span>
            <input type="checkbox" id="drop-1" />
            <ul>
              <li>
                <Link as="/countries/aposia" href="/countries/[country]">
                  <span className="nav-link">Aposia</span>
                </Link>
              </li>
              <li>
                <Link as="/countries/dragard" href="/countries/[country]">
                  <span className="nav-link">Dragard</span>
                </Link>
              </li>
              <li>
                <Link as="/countries/hablo" href="/countries/[country]">
                  <span className="nav-link">Hablo</span>
                </Link>
              </li>
              <li>
                <Link as="/countries/inharice" href="/countries/[country]">
                  <span className="nav-link">Inharice</span>
                </Link>
              </li>
              <li>
                <Link as="/countries/krogsland" href="/countries/[country]">
                  <span className="nav-link">Krog&apos;s Land</span>
                </Link>
              </li>
              <li>
                <Link as="/countries/orf" href="/countries/[country]">
                  <span className="nav-link">Orf</span>
                </Link>
              </li>
              <li>
                <Link as="/countries/ourirus" href="/countries/[country]">
                  <span className="nav-link">Ourirus</span>
                </Link>
              </li>
              <li>
                <Link as="/countries/sledge" href="/countries/[country]">
                  <span className="nav-link">Sledge</span>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/map">
              <span className="nav-link">Map</span>
            </Link>
          </li>
          {/* <li>
            <Link href="/battlegrid">
              <span className="nav-link">Battlegrid</span>
            </Link>
          </li> */}

          {/* <li>

									
									<label htmlFor="drop-2" className="toggle">Web Design +</label>
									<span href="#">Web Design</span>
									<input type="checkbox" id="drop-2"/>
									<ul>
											<li><span href="#">Resources</span></li>
											<li><span href="#">Links</span></li>
											<li>
												
												
											<label htmlFor="drop-3" className="toggle">Tutorials +</label>
											<span href="#">Tutorials</span>         
											<input type="checkbox" id="drop-3"/>

											<ul>
													<li><span href="#">HTML/CSS</span></li>
													<li><span href="#">jQuery</span></li>
													<li><span href="#">Other</span></li>
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
