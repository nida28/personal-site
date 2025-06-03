export const textConfig = {
    // Spacing configuration for sections
    spacing: {
        section: {
            default: "py-32",
            home: {
                top: "pt-12",
                bottom: "pb-16",
                full: "pt-8 pb-16"
            }
        },
        title: {
            wrapper: "mb-20",
            home: "mb-8"
        }
    },

    // Main page title styling
    title: {
        base: "font-light tracking-tight",
        size: "text-5xl md:text-6xl",
        color: "text-blue-900 dark:text-white",
    },

    // Hero title (larger variant)
    heroTitle: {
        base: "font-light tracking-tight leading-[1.1]",
        size: "text-6xl sm:text-7xl md:text-8xl lg:text-9xl",
        color: "text-gray-700 dark:text-white",
    },

    // Hero title prefix ("Hi, I'm")
    heroTitlePrefix: {
        base: "font-light tracking-tight leading-[1.1]",
        size: "text-6xl sm:text-7xl md:text-8xl lg:text-9xl",
        color: "text-gray-400 dark:text-gray-300",
    },

    // Hero title name ("Nidaa")
    heroTitleName: {
        base: "font-medium tracking-tight leading-[1.1] bg-clip-text text-transparent",
        size: "text-6xl sm:text-7xl md:text-8xl lg:text-9xl",
        color: "bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 dark:from-pink-300 dark:via-pink-500 dark:to-fuchsia-700",
    },

    // Hero subtitle
    heroSubtitle: {
        base: "font-light leading-relaxed tracking-wide",
        size: "text-xl sm:text-2xl md:text-3xl",
        color: "text-blue-900 dark:text-gray-200",
    },

    // Subtitle styling
    subtitle: {
        base: "font-light leading-relaxed",
        size: "text-2xl",
        color: "text-black dark:text-gray-300",
    },

    // Regular paragraph text
    text: {
        base: "font-light leading-relaxed",
        size: "text-xl",
        color: "text-gray-700 dark:text-gray-200",
    },

    // Section title (h2) styling
    sectionTitle: {
        base: "font-light tracking-wide",
        size: "text-4xl",
        color: "text-blue-900 dark:text-white",
    },

    // Toolbar text styling
    toolbar: {
        base: "font-light tracking-wide",
        size: "text-[1.3rem]",
        color: "text-gray-700 dark:text-gray-200",
    },

    // Helper function to combine classes
    combine: (...classNames: (keyof typeof textConfig)[]) => {
        return classNames
            .map(className => {
                const styles = textConfig[className];
                return `${styles.base} ${styles.size} ${styles.color}`;
            })
            .join(' ');
    }
} as const; 