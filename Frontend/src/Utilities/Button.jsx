export default function Button({text,icon,className}){
    return <button className={className}> {icon}{text}</button>
}