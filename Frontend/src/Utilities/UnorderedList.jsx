import { Link } from "react-router-dom";

export default function UnorderedList({
  className,
  to1,
  to2,
  to3,
  list1,
  list2,
  list3,
}) {
  return (
    <ul className={className}>
      <li
        className={`${className} font-geist font-medium text-[#94A3B8]   cursor-pointer`}
      >
        <Link to={to1}>{list1}</Link>
      </li>
      <li
        className={`${className} font-geist font-medium text-[#94A3B8] whitespace-nowrap  cursor-pointer`}
      >
        <Link to={to2}>{list2}</Link>
      </li>
      <li
        className={`${className} font-geist font-medium text-[#94A3B8]   cursor-pointer`}
      >
        <Link to={to3}>{list3}</Link>
      </li>
    </ul>
  );
}
