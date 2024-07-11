import { ChevronDown } from "lucide-react"

type Props = {
    name: string
    icon: string
    role?: string
}

export default function Profile({ name, icon, role }: Props) {
    return (
        <div className=" flex items-center gap-x-2">
            <div className=" mobile-md:hidden">
                <h3 className="text-black_2 text-lg">{name}</h3>
                <h5 className="text-[12px] text-orange_4">{role}</h5>
            </div>
            <div>
                <img src={icon} />
            </div>
            <div>
                <ChevronDown />
            </div>
        </div>
    )
}