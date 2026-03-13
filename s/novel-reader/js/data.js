export const library = {
    "pride_and_prejudice": {
        id: "pride_and_prejudice",
        title: "Pride and Prejudice",
        author: "Jane Austen",
        tags: ["romance", "classic", "witty", "cozy"],
        file: "pride_and_prejudice.json"
    },
    "romeo_and_juliet": {
        id: "romeo_and_juliet",
        title: "Romeo & Juliet",
        author: "William Shakespeare",
        tags: ["romance", "tragic", "poetry", "passionate"],
        file: "romeo_and_juliet.json"
    },
    // Mock for expandability - we can add actual JSONs for these later if needed
    "little_women": {
        id: "little_women",
        title: "Little Women",
        author: "Louisa May Alcott",
        tags: ["cozy", "family", "classic"],
        file: "pride_and_prejudice.json"  // fallback to P&P json since we only have 2 real novels generated
    },
    "phantom_of_the_opera": {
        id: "phantom_of_the_opera",
        title: "The Phantom of the Opera",
        author: "Gaston Leroux",
        tags: ["mystery", "thriller", "dark", "passionate"],
        file: "romeo_and_juliet.json" // fallback
    }
};

export const questions = [
    {
        id: "q_setting",
        text: "How would you describe your ideal evening?",
        options: [
            { text: "Curled up by the fireplace with tea", tags: ["cozy", "classic", "witty"] },
            { text: "A moonlit walk by a balcony", tags: ["romance", "poetry", "passionate", "tragic"] },
            { text: "Exploring an old, mysterious theatre", tags: ["mystery", "thriller", "dark"] }
        ]
    },
    {
        id: "q_protagonist",
        text: "What kind of protagonist draws you in?",
        options: [
            { text: "Sharp-tongued, independent, and observant", tags: ["witty", "classic"] },
            { text: "Innocent, impulsive, and hopelessly romantic", tags: ["poetry", "passionate", "tragic"] },
            { text: "A supportive soul seeking their family's best", tags: ["cozy", "family"] }
        ]
    },
    {
        id: "q_conflict",
        text: "What obstacle would you face in your love story?",
        options: [
            { text: "Misunderstandings and societal pride", tags: ["classic", "witty", "romance"] },
            { text: "Star-crossed fate and feuding families", tags: ["tragic", "passionate", "poetry"] },
            { text: "A shadowed secret hidden in the past", tags: ["mystery", "thriller", "dark"] }
        ]
    }
];
