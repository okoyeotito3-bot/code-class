import { Link } from "react-router-dom";

export default function Button({ text, icon, className, to }) {
  if (to) {
    return (
      <Link to={to} className={className}>
        {icon}
        {text}
      </Link>
    );
  }

  return (
    <button className={className}>
      {icon}
      {text}
    </button>
  );
}
