
import { Facebook, Twitter, Instagram, Mail, MessageSquare, PhoneCall, Check } from 'lucide-react'
import { Separator } from "@/components/ui/separator"
import { formatCurrencyInNaira } from '@/helpers/formatCurrency'

type ProfileCardProps = {
    profileImg: string
    name: string
    email: string
    phone: string
    walletBalance: string
    socialLinks: {
        facebook?: string
        twitter?: string
        instagram?: string
        email?: string
        sms?: string
        phone?: string
    }
}

export function ProfileCard({ profileImg, name, email, phone, walletBalance, socialLinks }: ProfileCardProps) {
    return (
        <div>
            <section className="flex flex-col items-center">
                <div className="flex justify-center items-center relative">
                    <div className='bg-green_1 text-white rounded-full -right-1 bottom-2 p-1 absolute'>
                        <Check size={12} />
                    </div>
                    <img
                        src={profileImg}
                        alt="Profile"
                        className="rounded-full border-4 border-white w-[80px] h-[80px] mobile-md:w-[60px] mobile-md:h-[60px] object-cover"
                    />
                </div>
                <header className="flex flex-col items-center mt-4">
                    <h1 className="text-white text-lg font-bold break-words">{name}</h1>
                    <h2 className="text-white text-[14px]">{email}</h2>
                    <p className="text-white text-[14px]">{phone}</p>
                </header>
            </section>
            <article className="mt-4">
                <Separator />
                <div className="flex items-center justify-between gap-x-4 mobile-md:gap-x-2 mt-2">
                    <p className="text-white text-[12px] font-semibold">Wallet balance</p>
                    <p className="text-white font-bold text-lg mobile-md:text-md">{formatCurrencyInNaira(walletBalance)}</p>
                </div>
                <Separator />
            </article>
            <div className="flex justify-between items-center text-white mt-4 gap-x-4">
                {socialLinks.facebook && (
                    <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <Facebook />
                    </a>
                )}
                {socialLinks.twitter && (
                    <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <Twitter />
                    </a>
                )}
                {socialLinks.instagram && (
                    <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <Instagram />
                    </a>
                )}
                {socialLinks.email && (
                    <a href={`mailto:${socialLinks.email}`} aria-label="Email">
                        <Mail />
                    </a>
                )}
                {socialLinks.sms && (
                    <a href={`sms:${socialLinks.sms}`} aria-label="Message">
                        <MessageSquare />
                    </a>
                )}
                {socialLinks.phone && (
                    <a href={`tel:${socialLinks.phone}`} aria-label="Phone Call">
                        <PhoneCall />
                    </a>
                )}
            </div>
        </div>
    )
}

