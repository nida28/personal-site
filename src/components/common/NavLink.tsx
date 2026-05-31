import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { textConfig } from '../../config/text';

interface NavLinkProps {
    to: string;
    children: React.ReactNode;
}

const NavLink = ({ to, children }: NavLinkProps) => {
    const { theme } = useTheme();

    return (
        <Link
            to={to}
            className={`${textConfig.toolbar.base} ${textConfig.toolbar.size} ${textConfig.toolbar.color} relative px-8 py-4 hover:text-gray-700 dark:hover:text-white transition-all duration-300 rounded-xl hover:bg-gray-100/70 dark:hover:bg-white/10 group hover:shadow-lg dark:hover:shadow-white/5 border border-transparent hover:border-cyan-200/30 dark:hover:border-pink-400/30 hover:shadow-cyan-500/10 dark:hover:shadow-pink-500/20`}
            style={{
                boxShadow: 'none',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = theme === 'dark'
                    ? '0 0 20px rgba(236, 72, 153, 0.3), 0 0 40px rgba(236, 72, 153, 0.2), 0 0 60px rgba(236, 72, 153, 0.1)'
                    : '0 0 20px rgba(6, 182, 212, 0.3), 0 0 40px rgba(6, 182, 212, 0.2), 0 0 60px rgba(6, 182, 212, 0.1)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
            }}
        >
            {children}
        </Link>
    );
};

export default NavLink; 