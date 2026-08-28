export default function UnorderedList({className,list1,list2,list3}){
    return (
       <ul className={className}>
         <li className={`${className} font-geist font-medium text-[#94A3B8]   cursor-pointer`}>{list1}</li>
         <li className={`${className} font-geist font-medium text-[#94A3B8] whitespace-nowrap  cursor-pointer`}>{list2}</li>
         <li className={`${className} font-geist font-medium text-[#94A3B8]   cursor-pointer`}>{list3}</li>
       </ul>
    )
   
       
   

}


