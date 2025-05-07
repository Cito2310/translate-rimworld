interface props {
    type: "title" | "base" | "type"
    label: string
    className?: string
}

export const TitleTranslate = ({ type, label, className }: props) => {
    switch (type) {
        case "title": return <h1 className={`text-[1.8em] font-semibold mt-4 ${className}`}>{label}</h1>

        case "type": return <h3 className={`text-[1.3em] font-semibold mt-4 ${className}`}>{label}</h3>
        
        case "base": return <h4 className={`text-[1.1em] font-semibold mt-2 ${className}`}>{label}</h4>
    }
}