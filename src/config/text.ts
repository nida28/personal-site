export const textConfig = {
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