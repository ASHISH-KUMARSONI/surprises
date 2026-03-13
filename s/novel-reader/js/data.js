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
    "the_algorithm_of_us": {
        id: "the_algorithm_of_us",
        title: "The Algorithm of Us",
        author: "Aria Blake",
        tags: ["romance", "modern", "tech", "cozy"],
        file: "the_algorithm_of_us.json"
    },
    "crown_of_thorns": {
        id: "crown_of_thorns",
        title: "A Crown of Thorns & Starlight",
        author: "E. L. Night",
        tags: ["romance", "fantasy", "magic", "passionate"],
        file: "crown_of_thorns.json"
    }
};

export const questions = [
    {
        id: "q_setting",
        text: "How would you describe your ideal evening?",
        options: [
            { text: "Curled up by the fireplace with tea", tags: ["cozy", "classic", "witty"] },
            { text: "A coffee shop coding session", tags: ["modern", "tech", "cozy"] },
            { text: "Exploring an enchanted winter forest", tags: ["fantasy", "magic", "passionate"] }
        ]
    },
    {
        id: "q_protagonist",
        text: "What kind of protagonist draws you in?",
        options: [
            { text: "A brilliant but overworked developer", tags: ["tech", "modern", "romance"] },
            { text: "A fierce mortal defying a magical lord", tags: ["fantasy", "magic", "passionate"] },
            { text: "Innocent, impulsive, and hopelessly romantic", tags: ["poetry", "passionate", "tragic"] }
        ]
    },
    {
        id: "q_conflict",
        text: "What obstacle would you face in your love story?",
        options: [
            { text: "Misunderstandings and career ambitions", tags: ["tech", "modern", "cozy"] },
            { text: "A war between rival magical courts", tags: ["fantasy", "magic", "passionate"] },
            { text: "Star-crossed fate and feuding families", tags: ["tragic", "passionate", "poetry"] }
        ]
    }
];
