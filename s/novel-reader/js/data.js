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
    },
    "coffee_shop_conundrum": {
        id: "coffee_shop_conundrum",
        title: "The Coffee Shop Conundrum",
        author: "Elise Woods",
        tags: ["romance", "cozy", "modern", "witty"],
        file: "coffee_shop_conundrum.json"
    },
    "whispers_of_the_ocean": {
        id: "whispers_of_the_ocean",
        title: "Whispers of the Ocean",
        author: "Silas Vance",
        tags: ["romance", "passionate", "tragic", "magic"],
        file: "whispers_of_the_ocean.json"
    },
    "brush_with_fate": {
        id: "brush_with_fate",
        title: "A Brush with Fate",
        author: "Clara Vance",
        tags: ["romance", "modern", "passionate", "witty"],
        file: "brush_with_fate.json"
    },
    "starlit_sonatina": {
        id: "starlit_sonatina",
        title: "The Starlit Sonatina",
        author: "Julian Keys",
        tags: ["romance", "passion", "classic", "modern"],
        file: "starlit_sonatina.json"
    },
    "midnight_museum": {
        id: "midnight_museum",
        title: "Midnight at the Museum",
        author: "Isla Reyes",
        tags: ["romance", "mystery", "dark", "thriller"],
        file: "midnight_museum.json"
    },
    "bakers_dozen": {
        id: "bakers_dozen",
        title: "The Baker's Dozen",
        author: "Fiona Hayes",
        tags: ["romance", "cozy", "witty", "family"],
        file: "bakers_dozen.json"
    },
    "prachis_green_dilemma": {
        id: "prachis_green_dilemma",
        title: "Prachi's Green Dilemma",
        author: "A Secret Admirer",
        tags: ["romance", "cozy", "witty", "modern"],
        file: "prachis_green_dilemma.json"
    },
    "wifi_in_the_himalayas": {
        id: "wifi_in_the_himalayas",
        title: "WiFi in the Himalayas",
        author: "A Secret Admirer",
        tags: ["romance", "cozy", "witty", "modern", "mystery"],
        file: "wifi_in_the_himalayas.json"
    }
};

export const questions = [
    {
        id: "q_setting",
        text: "How would you describe your ideal evening?",
        options: [
            { text: "Curled up by the fireplace with tea", tags: ["cozy", "classic", "family"] },
            { text: "A coffee shop coding session", tags: ["modern", "tech", "cozy"] },
            { text: "Exploring a museum at midnight", tags: ["mystery", "dark", "thriller"] }
        ]
    },
    {
        id: "q_protagonist",
        text: "What kind of protagonist draws you in?",
        options: [
            { text: "A brilliant but overworked creative", tags: ["tech", "modern", "witty"] },
            { text: "A fierce mortal defying a magical lord", tags: ["fantasy", "magic", "passionate"] },
            { text: "Innocent, impulsive, and hopelessly romantic", tags: ["passion", "passionate", "tragic"] }
        ]
    },
    {
        id: "q_conflict",
        text: "What obstacle would you face in your love story?",
        options: [
            { text: "Small town rivalries and career ambitions", tags: ["cozy", "modern", "family"] },
            { text: "A war between rival magical courts", tags: ["fantasy", "magic", "passionate"] },
            { text: "A grand heist and undercover secrets", tags: ["mystery", "dark", "thriller"] }
        ]
    },
    {
        id: "q_prank",
        text: "Most important question: Do you like me?",
        options: [
            { text: "A. Yes", tags: ["romance"] },
            { text: "B. !false", tags: ["romance"] },
            { text: "C. Yes, but I'm pretending to think about it", tags: ["romance"] },
            { text: "D. If option A is true, choose this", tags: ["romance"] },
            { text: "E. If option B is true, choose this", tags: ["romance"] },
            { text: "F. BJP", tags: ["romance"] }
        ]
    }
];
