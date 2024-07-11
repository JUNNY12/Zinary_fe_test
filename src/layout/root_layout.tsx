import { Outlet } from 'react-router-dom';
import SideNavBar from '@/components/common/SideNavBar';
import TopNav from '@/components/common/TopNav';

export default function RootLayout() {
    return (
        <div className="flex w-full overflow-hidden">
            <SideNavBar />
            <div className="flex flex-col flex-1 overflow-hidden">

                <main className="flex-1 overflow-auto p-8 tablet:p-4">
                    <TopNav />
                    <Outlet />
                </main>
            </div>
        </div>
    );
}