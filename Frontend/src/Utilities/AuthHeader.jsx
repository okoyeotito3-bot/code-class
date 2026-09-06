export default function AuthHeader({AuthHeaderText, AuthHeaderSubText}) {
    return(
        <header className="flex flex-col gap-3 items-center">
            <img src="brand.png" alt="logo" />
            <h1 className="font-geist text-lg text-white font-extrabold">{AuthHeaderText}</h1>
            <p className="text-sm text-[#94A3B8] font-geist">{AuthHeaderSubText}</p>
        </header>
    )
}