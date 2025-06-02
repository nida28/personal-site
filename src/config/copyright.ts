// Copyright configuration with protection mechanisms
const createProtectedConfig = () => {
    const currentYear = new Date().getFullYear();
    const config = {
        author: "Nidaa Fatimah Mungloo",
        year: String(currentYear),
        notice: `© ${currentYear} Nidaa Fatimah Mungloo — Licensed under MIT`,
    } as const;

    // Make the config immutable
    Object.freeze(config);

    // Create a proxy to prevent modifications and intercept access
    return new Proxy(config, {
        get(target, prop) {
            // Log attempts to access the copyright info
            console.log(`Copyright notice accessed: ${String(prop)}`);
            return target[prop as keyof typeof target];
        },
        set() {
            console.warn("Attempt to modify copyright notice prevented");
            return false;
        },
        deleteProperty() {
            console.warn("Attempt to delete copyright notice prevented");
            return false;
        }
    });
};

// Export an immutable instance
export const copyright = createProtectedConfig();

// Verify copyright notice is present
if (!document.querySelector('footer')?.textContent?.includes(copyright.notice)) {
    console.warn('Copyright notice must be displayed in the footer');
}

// Export a function to validate copyright presence
export const validateCopyright = () => {
    const footerText = document.querySelector('footer')?.textContent || '';
    const contactText = document.querySelector('#contact')?.textContent || '';

    if (!footerText.includes(copyright.notice) && !contactText.includes(copyright.notice)) {
        console.error('Required copyright notice is missing from both footer and contact sections');
        // You could potentially take more drastic action here if desired
    }
};

// Run validation when the DOM is ready
if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', validateCopyright);
    // Also check periodically
    setInterval(validateCopyright, 5000);
} 