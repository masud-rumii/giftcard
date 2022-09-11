import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

export default function MenuLogo(props) {
  const customise = useSelector((state) => state.customise);

  return (
    <div className="hp-header-logo hp-d-flex hp-align-items-center">
      <Link to="/" onClick={props.onClose} className="hp-position-relative hp-d-flex">
        {props.small ? (
          customise.theme == "light" ? (
            <img
              className="hp-logo"
              src="https://www.sochitel.com/newsite/wp-content/uploads/2022/03/Sochitel-Logo.svg"
              alt="logo"
            />
          ) : (
            <img
              className="hp-logo"
              src="https://www.sochitel.com/newsite/wp-content/uploads/2022/03/Sochitel-Logo.svg"
              alt="logo"
            />
          )
        ) : customise.direction == "rtl" ? (
          customise.theme == "light" ? (
            <img
              className="hp-logo"
              src="https://www.sochitel.com/newsite/wp-content/uploads/2022/03/Sochitel-Logo.svg"
              alt="logo"
            />
          ) : (
            <img
              className="hp-logo"
              src="https://www.sochitel.com/newsite/wp-content/uploads/2022/03/Sochitel-Logo.svg"
              alt="logo"
            />
          )
        ) : customise.theme == "light" ? (
          <img
            className="hp-logo"
            src="https://www.sochitel.com/newsite/wp-content/uploads/2022/03/Sochitel-Logo.svg"
            alt="logo"
          />
        ) : (
          <img
            className="hp-logo"
            src="https://www.sochitel.com/newsite/wp-content/uploads/2022/03/Sochitel-Logo.svg"
            alt="logo"
          />
        )}
      </Link>
    </div>
  );
}
