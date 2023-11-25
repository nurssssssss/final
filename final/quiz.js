document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        {
            question: "What is the importance of a balanced diet?",
            answers: [
                { text: "A. It helps in weight loss.", isCorrect: false },
                { text: "B. It provides essential nutrients for overall health.", isCorrect: true },
                { text: "C. It makes you sleep better.", isCorrect: false }
            ]
        },
        {
            question: "Why is staying hydrated important?",
            answers: [
                { text: "A. It helps in digestion.", isCorrect: false },
                { text: "B. It keeps the skin healthy.", isCorrect: false },
                { text: "C. It improves concentration.", isCorrect: true }
            ]
        },
        {
            question: "How much exercise is recommended per week?",
            answers: [
                { text: "A. 30 minutes of exercise per week.", isCorrect: false },
                { text: "B. 75 minutes of vigorous-intensity exercise per week.", isCorrect: true },
                { text: "C. No need for regular exercise.", isCorrect: false }
            ]
        },
        {
            question: "What is the recommended amount of sleep for adults?",
            answers: [
                { text: "A. 4 hours per night.", isCorrect: false },
                { text: "B. 8 hours per night.", isCorrect: true },
                { text: "C. 12 hours per night.", isCorrect: false }
            ]
        },
        {
            question: "Which of the following contributes to a healthy lifestyle?",
            answers: [
                { text: "A. Smoking.", isCorrect: false },
                { text: "B. Positive relationships.", isCorrect: true },
                { text: "C. Lack of physical activity.", isCorrect: false }
            ]
        },
        {
            question: "What is the recommended daily water intake?",
            answers: [
                { text: "A. 1 cup per day.", isCorrect: false },
                { text: "B. 8 glasses (64 ounces) per day.", isCorrect: true },
                { text: "C. 2 liters per day.", isCorrect: false }
            ]
        },
        {
            question: "Why is quality sleep important for health?",
            answers: [
                { text: "A. It doesn't affect health.", isCorrect: false },
                { text: "B. It supports overall well-being and immune function.", isCorrect: true },
                { text: "C. It only affects mental health.", isCorrect: false }
            ]
        }
    ];

    const quizQuestions = document.getElementById("quiz-questions");
    const quizResult = document.getElementById("quiz-result");

    questions.forEach((q, index) => {
        const isActive = index === 0 ? "active" : "";
        const questionHTML = `
            <div class="carousel-item ${isActive}">
                <div class="quiz-card">
                    <div class="quiz-card-body">
                        <h5 class="card-title">${q.question}</h5>
                        ${q.answers.map(answer => `<button class="btn answer-btn" data-question="${index}" data-answer="${answer.text}">${answer.text}</button>`).join("")}
                    </div>
                </div>
            </div>
        `;
        quizQuestions.innerHTML += questionHTML;
    });

    // Initialize carousel
    $("#quizCarousel").carousel();

    // Attach click event to answer buttons
    const answerButtons = document.querySelectorAll(".answer-btn");
    answerButtons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedQuestion = button.dataset.question;
            const selectedAnswer = button.dataset.answer;

            // Check if the selected answer is correct
            const isCorrect = questions[selectedQuestion].answers.find(answer => answer.text === selectedAnswer).isCorrect;

            // Apply class based on correctness
            button.classList.add(isCorrect ? "correct-answer" : "incorrect-answer");

            // Automatically move to the next question on answer click
            $("#quizCarousel").carousel("next");
        });
    });

    // Submit quiz button click event
    document.getElementById("submitQuiz").addEventListener("click", () => {
        // Add your logic to handle the submitted quiz
        console.log("Quiz Submitted");

        // Display the result or perform other actions
        quizResult.textContent = "Quiz Submitted!";
    });
});
