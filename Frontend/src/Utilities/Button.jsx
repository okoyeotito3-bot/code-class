import { Link } from "react-router-dom";

export default function Button({ text, icon, className, to,onClick }) {
  if (to) {
    return (
      <Link to={to} className={className} onClick={onClick}>
        {icon}
        {text}
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {icon}
      {text}
    </button>
  );
}
