export interface Project {
  slug: string;
  title: string;
  summary: string;
  image: string;
  status: "live" | "wip";
  demoUrl?: string;
  sourceUrl?: string;
  body: {
    intro: string;
    details: string;
    bullets: string[];
    note?: string;
  };
}

const projects: Project[] = [
  {
    slug: "bgb-bot",
    title: "BGB Bot",
    summary:
      "An AI-powered legal assistant that helps people understand German civil law in plain language.",
    image: `${import.meta.env.BASE_URL}58aa78a2-4988-4ff6-a51a-fdfeafa16e35.png`,
    status: "live",
    demoUrl: "https://bgb-bot-230904575198.europe-west1.run.app/",
    sourceUrl: "https://github.com/nida28/BGBPythonBot",
    body: {
      intro:
        "BGB Bot helps users understand everyday rights under the German Civil Code (BGB) with clear, source-grounded answers.",
      details:
        "It was built to make legal information easier to navigate, especially for immigrants and non-native speakers who need practical explanations in plain language.",
      bullets: [
        "Grounded in the German Civil Code (BGB)",
        "Answers legal questions in everyday language",
        "Supports document-aware context in the current version",
        "Live and publicly accessible",
      ],
    },
  },
  {
    slug: "thought-archive",
    title: "Thought Archive",
    summary:
      "A personal memory project turning two years of ChatGPT and Claude archives into a searchable RAG brain.",
    image: `${import.meta.env.BASE_URL}thoughts.png`,
    status: "wip",
    body: {
      intro:
        "Thought Archive is a personal memory project for revisiting and reusing ideas from my AI chat history.",
      details:
        "I am building it around two years of ChatGPT and Claude archives so important insights are easier to find, connect, and apply over time.",
      bullets: [
        "Two years of AI chat archives as source material",
        "Search and retrieval focused on clarity and relevance",
        "Designed for reflection, planning, and follow-through",
        "Still in active development",
      ],
      note: "Work in Progress",
    },
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | null {
  return projects.find((project) => project.slug === slug) ?? null;
}
