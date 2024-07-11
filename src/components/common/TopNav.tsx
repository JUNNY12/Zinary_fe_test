import Profile from "./Profile";
import UserIcon from "/assets/images/Ellipse 1.png"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import profileImg from "/assets/images/profileImg.png"
import { ProfileCard } from "./ProfileCard";
import { socialLinks } from "@/constants/constants";
import { Search } from "lucide-react";


export default function TopNav() {
    return (
        <div className='w-full bg-white p-3 mobile-md:p-2 mobile-md:mb-4 rounded-lg mb-8'>
            <div className="flex justify-between items-center">

                <div className="text-black_2">
                    <Search size={32} />
                </div>

                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div>
                            <Profile icon={UserIcon} name={"Sarah Shaibu"} role="Customer service" />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-orange_2 p-4 ">
                        <ProfileCard
                            profileImg={profileImg}
                            name="Sarah Shaibu"
                            email="ralph.phillips@example.com"
                            phone="09071924857"
                            socialLinks={socialLinks}
                            walletBalance="4000000"
                        />
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </div>
    );
}
