const accordionData = [
    {
        question: "What is the key to happiness?",
        answer: "Happiness often comes from within. It is important to cultivate a positive mindset, practice gratitude, and build strong relationships."
    },
    {
        question: "How can I overcome failure?",
        answer: "Failure is a part of life and an opportunity to learn and grow. Embrace your mistakes, learn from them, and keep moving forward with resilience and determination."
    },
    {
        question: "What is the importance of self-discipline?",
        answer: "Self-discipline helps you stay focused on your goals, resist temptations, and make better decisions. It is a critical skill for achieving long-term success and personal growth."
    },
    {
        question: "How do I find my purpose in life?",
        answer: "Finding your purpose involves exploring your passions, values, and strengths. Reflect on what makes you feel fulfilled and how you can contribute to the world in a meaningful way."
    },
    {
        question: "What is the value of gratitude?",
        answer: "Gratitude helps you appreciate what you have, improves your mental well-being, and fosters a positive outlook on life. Regularly practicing gratitude can lead to greater overall happiness."
    },
    {
        question: "How can I maintain a work-life balance?",
        answer: "Achieving work-life balance requires setting boundaries, prioritizing self-care, and managing your time effectively. Make time for activities and people that bring you joy and fulfillment."
    }
];

let currIndex = null; 
const accordion = document.getElementById('accordion');
const handleAnsToggle=(answerElement,index) => {
    if (currIndex === index) {
        answerElement.style.display = 'none';
        currIndex = null;
    } else {
        if (currIndex !== null) {
            const currentOpenItem = accordion.children[currIndex];
            currentOpenItem.querySelector('.answer').style.display = 'none';
        }
        answerElement.style.display = 'block';
        currIndex = index;
    }
}

const loadAccordian = () => {

    accordionData.forEach(({ answer, question }, index) => {
        const accItem = document.createElement('div');
        accItem.classList.add('acc-item');
        accItem.innerHTML = `
            <p class="question">${question}</p>
            <p class="answer">${answer}</p>
        `;

        // Toggle answer visibility on question click
        accItem.querySelector('.question').addEventListener('click', ()=>{
            const answerElement = accItem.querySelector('.answer');
            handleAnsToggle(answerElement,index)
        });

        accordion.appendChild(accItem);
    });
}


document.addEventListener("DOMContentLoaded", loadAccordian);
