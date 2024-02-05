// Select the database to use.
use('newSigmaCourse');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([
    {
        "name": "JavaScript",
        "Instructor": "Faizan",
        "Price": 40000
    },
    {
        "name": "Python",
        "Instructor": "Amanda",
        "Price": 35000
    },
    {
        "name": "Java",
        "Instructor": "Carlos",
        "Price": 45000
    },
    {
        "name": "HTML/CSS",
        "Instructor": "Sophie",
        "Price": 30000
    },
    {
        "name": "React",
        "Instructor": "Daniel",
        "Price": 50000
    },
    {
        "name": "Node.js",
        "Instructor": "Grace",
        "Price": 42000
    },
    {
        "name": "Angular",
        "Instructor": "Robert",
        "Price": 47000
    },
    {
        "name": "C#",
        "Instructor": "Olivia",
        "Price": 48000
    },
    {
        "name": "Vue.js",
        "Instructor": "Liam",
        "Price": 38000
    },
    {
        "name": "PHP",
        "Instructor": "Zoe",
        "Price": 36000
    },
    {
        "name": "Ruby",
        "Instructor": "Ethan",
        "Price": 41000
    },
    {
        "name": "Swift",
        "Instructor": "Mia",
        "Price": 49000
    },
    {
        "name": "SQL",
        "Instructor": "Lucas",
        "Price": 33000
    },
    {
        "name": "Machine Learning",
        "Instructor": "Emma",
        "Price": 55000
    },
    {
        "name": "Data Science",
        "Instructor": "Jackson",
        "Price": 52000
    },
    {
        "name": "Blockchain",
        "Instructor": "Ava",
        "Price": 58000
    },
    {
        "name": "Cybersecurity",
        "Instructor": "Logan",
        "Price": 53000
    },
    {
        "name": "UI/UX Design",
        "Instructor": "Lily",
        "Price": 40000
    },
    {
        "name": "DevOps",
        "Instructor": "Noah",
        "Price": 46000
    },
    {
        "name": "Cloud Computing",
        "Instructor": "Isabella",
        "Price": 51000
    }
]
);


// Print a message to the output window.
console.log(`Data insertion complete`);

