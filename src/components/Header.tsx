
import React from 'react';
import { HamburgerIcon, ProfileIcon } from './icons';

const NavItem: React.FC<{ active?: boolean, children: React.ReactNode }> = ({ active = false, children }) => (
    <button className={`relative px-5 py-2 text-sm rounded-full transition-colors duration-200 ${active ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'}`}>
        {children}
        {active && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-accent-yellow rounded-full"></div>}
    </button>
)

const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-10 p-4">
            <div className="container mx-auto flex items-center justify-between backdrop-blur-sm bg-gray-900/50 p-3 rounded-2xl border border-white/10 shadow-lg">
                <div className="flex items-center gap-4">
                    <HamburgerIcon />
                    <span className="font-bold text-xl tracking-wider text-white">OPINION.AI</span>
                </div>

                <nav className="hidden md:flex items-center bg-gray-800/60 p-1 rounded-full">
                    <NavItem active>Home</NavItem>
                    <NavItem>Explore</NavItem>
                    <NavItem>Notifications</NavItem>
                </nav>

                <div className="flex items-center gap-3">
                    <button className="bg-cyan-500/10 text-white text-sm px-5 py-2.5 rounded-full font-medium hidden sm:block hover:bg-cyan-500/20 transition-colors">
                        Uotoraims
                    </button>
                    <button className="bg-gray-800/60 p-2.5 rounded-full">
                        <ProfileIcon />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
