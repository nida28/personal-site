import { Link } from 'react-router-dom';

interface MobileNavLinkProps {
    to: string;
    children: React.ReactNode;
    onClick: () => void;
}

const MobileNavLink = ({ to, children, onClick }: MobileNavLinkProps) => {
    return (
        <Link
            to={to}
            onClick={onClick}
            className="block w-full text-left px-6 py-4 text-gray-500 dark:text-white hover:text-gray-700 dark:hover:text-white text-xl font-light tracking-wide transition-all duration-300 rounded-xl hover:bg-gray-100/70 dark:hover:bg-white/10 hover:shadow-md dark:hover:shadow-white/5"
        >
            {children}
        </Link>
    );
};

export default MobileNavLink; 