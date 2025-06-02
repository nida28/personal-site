import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialButtonProps {
    href: string;
    label: string;
    icon: LucideIcon;
    size?: 'sm' | 'lg';
}

const SocialButton: React.FC<SocialButtonProps> = ({ href, label, icon: Icon, size = 'sm' }) => {
    const sizeClasses = {
        sm: {
            button: 'w-12 h-12',
            icon: 'w-6 h-6'
        },
        lg: {
            button: 'w-16 h-16',
            icon: 'w-7 h-7'
        }
    };

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`flex items-center justify-center ${sizeClasses[size].button} bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 dark:from-pink-600 dark:to-blue-600 dark:hover:from-pink-700 dark:hover:to-blue-700 text-white rounded-2xl font-medium transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl`}
        >
            <span className="relative z-10 flex items-center gap-2">
                <Icon className={sizeClasses[size].icon} />
            </span>
        </a>
    );
};

export default SocialButton; 