let level = 1;
let currentQuestion = 0;

const questions = [
    {
        level: 1,
        questions: [
            { text: "2 + 3 = ?", answer: 5, image: "image1.png" },
            { text: "4 + 1 = ?", answer: 5, image: "image2.png" },
            { text: "3 + 3 = ?", answer: 6, image: "image3.png" },
            { text: "5 + 0 = ?", answer: 5, image: "image4.png" },
            { text: "2 + 2 = ?", answer: 4, image: "image5.png" }
        ]
    },
    {
        level: 2,
        questions: [
            { text: "3 + 7 = ?", answer: 10, image: "image6.png" },
            { text: "4 + 5 = ?", answer: 9, image: "image7.png" },
            { text: "6 + 1 = ?", answer: 7, image: "image8.png" },
            { text: "8 + 2 = ?", answer: 10, image: "image9.png" },
            { text: "7 + 3 = ?", answer: 10, image: "image10.png" }
        ]
    }
];

function loadQuestion() {
    const questionData = questions[level - 1].questions[currentQuestion];
    document.getElementById("question-text").innerText = questionData.text;
    document.getElementById("question-image").src = questionData.image;
    document.getElementById("answer").value = '';
}

function submitAnswer() {
    const userAnswer = parseInt(document.getElementById("answer").value);
    const correctAnswer = questions[level - 1].questions[currentQuestion].answer;

    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").innerText = "Benar!";
        currentQuestion++;

        if (currentQuestion < questions[level - 1].questions.length) {
            loadQuestion();
        } else {
            document.getElementById("feedback").innerText = "Semua soal di level ini benar!";
            document.getElementById("next-level-btn").style.display = "block";
        }
    } else {
        document.getElementById("feedback").innerText = "Jawaban salah, coba lagi!";
    }
}

function nextLevel() {
    level++;
    currentQuestion = 0;
    if (level <= questions.length) {
        document.getElementById("level-title").innerText = "Level " + level;
        document.getElementById("next-level-btn").style.display = "none";
        document.getElementById("feedback").innerText = '';
        loadQuestion();
    } else {
        document.getElementById("game").innerHTML = "<h2>Selamat! Kamu telah menyelesaikan semua level!</h2>";
    }
}

window.onload = loadQuestion;
