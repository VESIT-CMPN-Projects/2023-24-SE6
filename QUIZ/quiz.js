const allQuestions = [
    {
        question: "What percentage of India's land area is covered by forests?",
        options: ["20%", "25%", "30%", "35%"],
        answer: "25%"
    },
    {
        question: "Which Indian state has the highest forest cover?",
        options: ["Madhya Pradesh", "Arunachal Pradesh", "Maharashtra", "Kerala"],
        answer: "Madhya Pradesh"
    },
    {
        question: "Which animal is most affected by deforestation in India?",
        options: ["Tiger", "Elephant", "Lion", "Leopard"],
        answer: "Tiger"
    },
    {
        question: "What is the main cause of deforestation in India?",
        options: ["Agriculture", "Urbanization", "Logging", "Mining"],
        answer: "Agriculture"
    },
    {
        question: "Which region in India has witnessed significant deforestation due to coal mining?",
        options: ["Eastern Ghats", "Western Ghats", "Eastern Himalayas", "Western Himalayas"],
        answer: "Eastern Ghats"
    },
    {
        question: "How does deforestation impact India's biodiversity?",
        options: ["Increases it", "Decreases it", "No impact", "Leads to extinction"],
        answer: "Decreases it"
    },
    {
        question: "Which Indian state has the highest rate of deforestation?",
        options: ["Uttar Pradesh", "Andhra Pradesh", "Rajasthan", "Assam"],
        answer: "Uttar Pradesh"
    },
    {
        question: "Which government body is responsible for overseeing forest conservation in India?",
        options: ["MoEFCC", "ISRO", "DRDO", "NITI Aayog"],
        answer: "MoEFCC"
    },
    {
        question: "What is the significance of India's National Forest Policy?",
        options: ["Promotes industrial logging", "Encourages afforestation", "Allows unrestricted land clearing", "No impact"],
        answer: "Encourages afforestation"
    },
    {
        question: "How does deforestation contribute to climate change in India?",
        options: ["Reduces rainfall", "Increases floods", "Decreases temperature", "Increases greenhouse gases"],
        answer: "Increases greenhouse gases"
    },
    {
        question: "Which tree species is commonly targeted in illegal logging activities in India?",
        options: ["Neem", "Banyan", "Teak", "Mango"],
        answer: "Teak"
    },
    {
        question: "What measures are being taken to promote afforestation in India?",
        options: ["Promoting urbanization", "Encouraging deforestation", "Planting trees", "Building roads"],
        answer: "Planting trees"
    },
    {
        question: "How does deforestation impact the livelihoods of rural communities in India?",
        options: ["Increases job opportunities", "Decreases agricultural productivity", "Has no impact", "Promotes economic growth"],
        answer: "Decreases agricultural productivity"
    },
    {
        question: "What role do mangrove forests play in coastal protection in India?",
        options: ["Increase erosion", "Decrease soil fertility", "Act as natural barriers", "Have no impact"],
        answer: "Act as natural barriers"
    },
    {
        question: "What are the economic implications of deforestation in India?",
        options: ["Promotes tourism", "Boosts GDP", "Leads to loss of biodiversity", "Generates employment"],
        answer: "Leads to loss of biodiversity"
    },
    {
        question: "How does urbanization contribute to deforestation in India?",
        options: ["Increases forest cover", "Leads to industrialization", "Promotes wildlife conservation", "Clears forests for construction"],
        answer: "Clears forests for construction"
    },
    {
        question: "Which state in India is known for its Sundarbans mangrove forest?",
        options: ["West Bengal", "Karnataka", "Gujarat", "Odisha"],
        answer: "West Bengal"
    },
    {
        question: "What steps can India take to reduce carbon emissions from deforestation?",
        options: ["Promote deforestation", "Implement afforestation projects", "Increase industrial activities", "Ignore environmental policies"],
        answer: "Implement afforestation projects"
    },
    {
        question: "How does deforestation contribute to air pollution in Indian cities?",
        options: ["Decreases air pollution", "Increases particulate matter", "Has no impact", "Improves air quality"],
        answer: "Increases particulate matter"
    },
    {
        question: "Which wildlife reserves in India are most threatened by deforestation?",
        options: ["Jim Corbett National Park", "Keoladeo National Park", "Kaziranga National Park", "Sundarbans National Park"],
        answer: "Sundarbans National Park"
    },
    {
        question: "How does deforestation affect the monsoon patterns in India?",
        options: ["Stabilizes monsoon", "Increases rainfall", "Decreases rainfall", "No impact on monsoon"],
        answer: "Decreases rainfall"
    },
    {
        question: "What initiatives are being undertaken to promote sustainable forestry practices in India?",
        options: ["Encourage clearcutting", "Support monoculture", "Promote sustainable logging", "Ignore forest conservation"],
        answer: "Promote sustainable logging"
    },
    {
        question: "How does climate change affect the distribution of forests in India?",
        options: ["Increases forest cover", "Promotes deforestation", "Shifts forest boundaries", "No impact"],
        answer: "Shifts forest boundaries"
    },
    {
        question: "What are the long-term consequences of deforestation for India's agriculture?",
        options: ["Boosts agricultural productivity", "Leads to soil erosion", "Promotes soil fertility", "No impact on agriculture"],
        answer: "Leads to soil erosion"
    },
    {
        question: "What is the impact of deforestation on the spread of infectious diseases in India?",
        options: ["Decreases disease transmission", "Increases vulnerability", "Has no impact", "Improves public health"],
        answer: "Increases vulnerability"
    },
    {
        question: "What role can technology play in monitoring and combating deforestation in India?",
        options: ["Promotes illegal logging", "Aids in satellite monitoring", "Has no impact", "Decreases forest cover"],
        answer: "Aids in satellite monitoring"
    },
    {
        question: "Which international agreements has India signed to combat deforestation and climate change?",
        options: ["Kyoto Protocol", "Montreal Protocol", "Paris Agreement", "Rio Declaration"],
        answer: "Paris Agreement"
    },
    {
        question: "What is the name of the international treaty aimed at reducing greenhouse gas emissions to combat global warming?",
        options: ["Kyoto Protocol", "Montreal Protocol", "Paris Agreement", "Rio Declaration"],
        answer: "Paris Agreement"
    }
];

function getRandomQuestions(allQuestions, numQuestions) {
    const shuffledQuestions = allQuestions.sort(() => 0.5 - Math.random());
    return shuffledQuestions.slice(0, numQuestions);
}

let questions = getRandomQuestions(allQuestions, 5);
let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const resultContainer = document.getElementById('result-container');
const nextButton = document.getElementById('next-button');
const requizButton = document.getElementById('requiz-button');

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option');
        button.addEventListener('click', () => checkAnswer(option, currentQuestion.answer));
        optionsContainer.appendChild(button);
    });
}
function checkAnswer(selectedOption, correctAnswer) {
    const buttons = optionsContainer.querySelectorAll('.option');
    buttons.forEach(button => {
        if (button.textContent === correctAnswer) {
            button.classList.add('correct');
        } else if (button.textContent === selectedOption) {
            button.classList.add('wrong');
        }
        button.disabled = true;
    });

    if (selectedOption === correctAnswer) {
        score++;
    }
    nextButton.disabled = false;
}
function displayResult() {
    questionContainer.textContent = '';
    optionsContainer.innerHTML = '';
    resultContainer.textContent = `HURRAY!! You scored ${score} out of ${questions.length}`;
    nextButton.style.display = 'none';
    requizButton.style.display = 'block';
}
function requiz() {
    currentQuestionIndex = 0;
    score = 0;
    questions = getRandomQuestions(allQuestions, 5);
    displayQuestion();
    resultContainer.textContent = '';
    requizButton.style.display = 'none';
    nextButton.style.display = 'block';
}
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        nextButton.disabled = true;
    } else {
        displayResult();
    }
});
requizButton.addEventListener('click', requiz);
displayQuestion();