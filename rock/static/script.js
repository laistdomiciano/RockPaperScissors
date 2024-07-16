document.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('.choice');
    const resultDiv = document.getElementById('result');
    const scoreDiv = document.getElementById('score');

    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            const userChoice = choice.getAttribute('data-choice');
            fetch('/play', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ choice: userChoice }),
            })
            .then(response => response.json())
            .then(data => {
                const { user_choice, computer_choice, result, user_score, computer_score } = data;
                resultDiv.innerHTML = `You chose ${user_choice}, computer chose ${computer_choice}. You ${result}!`;
                scoreDiv.innerHTML = `${user_score}:${computer_score}`;

            });
        });
    });
});
