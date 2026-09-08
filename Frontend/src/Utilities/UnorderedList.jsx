import { Link } from "react-router-dom";

export default function UnorderedList({
  className,
  to1,
  to2,
  to3,
  list1,
  list2,
  list3,
  list1className,
  list2className,
  list3className
}) {
  return (
    <ul className={className}>
      <li
        className={`${list1className} font-['geist'] font-medium text-[#94A3B8]  cursor-pointer`}
      >
        <Link to={to1}>{list1}</Link>
      </li>
      <li
        className={`${list2className} font-['geist'] font-medium text-[#94A3B8] whitespace-nowrap  cursor-pointer`}
      >
        <Link to={to2}>{list2}</Link>
      </li>
      <li
        className={`${list3className} font-['geist'] font-medium text-[#94A3B8]   cursor-pointer`}
      >
        <Link to={to3}>{list3}</Link>
      </li>
    </ul>
  );
}
