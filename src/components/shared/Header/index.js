import { Link } from "react-router-dom";

import Container from "../Container";

import "./style.scss";

const Header = () => {
  return (
    <header className="header py-4">
      <Container>
        <div className="flex justify-between items-center">
          <Link to={"/"}>
            <img
              className="icon"
              src="https://www.gitbook.com/cdn-cgi/image/width=40,height=40,fit=contain,dpr=2,format=auto/https%3A%2F%2F553834213-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-LHizcWWtVphqU90YAXO%252Favatar.png%3Fgeneration%3D1531944291782256%26alt%3Dmedia"
              alt="icon"
            />
          </Link>

          <ul className="pa-0 flex">
            <li className="mr-4">Browse</li>
            <li className="mr-4">Social</li>
            <li>Forum</li>
          </ul>

          <div className="flex">
            <button className="mr-4">Log In</button>
            <button className="signup">Sign Up</button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
