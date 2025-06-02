export const socialConfig = {
    linkedin: {
        url: 'https://www.linkedin.com/in/nidaa-mungloo/',
        label: 'LinkedIn Profile'
    },
    github: {
        url: 'https://github.com/nida28',
        label: 'GitHub Profile'
    },
    email: {
        address: 'nidaa.mungloo@gmail.com',
        label: 'Email Me'
    },
    bgbBot: {
        demo: {
            url: 'https://huggingface.co/spaces/nfm1708/BGBChatBot',
            label: 'BGB Bot Live Demo'
        },
        sourceCode: {
            url: 'https://github.com/nida28/BGBPythonBot',
            label: 'BGB Bot Source Code'
        }
    }
} as const;

// Type for the social config
export type SocialConfigType = typeof socialConfig;

// Helper function to get all social links
export const getSocialLinks = () => socialConfig;

// Helper function to get a specific social link
export const getSocialLink = (platform: keyof SocialConfigType) => socialConfig[platform];

// Helper function to get project links
export const getProjectLinks = (projectKey: keyof typeof socialConfig.bgbBot) =>
    socialConfig.bgbBot[projectKey]; 