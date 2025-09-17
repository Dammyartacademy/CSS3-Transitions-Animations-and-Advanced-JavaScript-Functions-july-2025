// Part 2: JavaScript Functions

// Global variable to demonstrate scope
let globalValue = 10;

// Function with parameters and return value
function multiplyNumbers(a, b) {
    // Local variables - these are only accessible within this function
    const result = a * b;
    return result;
}

// Function to demonstrate different operations
function performOperation(a, b, operation) {
    switch (operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return b !== 0 ? a / b : 'Error: Division by zero';
        default:
            return 'Invalid operation';
    }
}

// Function to calculate and display result
function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;

    // Using the multiplyNumbers function
    const multiplicationResult = multiplyNumbers(num1, num2);

    // Using the performOperation function for different operations
    const additionResult = performOperation(num1, num2, 'add');
    const subtractionResult = performOperation(num1, num2, 'subtract');
    const divisionResult = performOperation(num1, num2, 'divide');

    // Display results
    document.getElementById('result').innerHTML = `
        Multiplication: ${multiplicationResult}<br>
        Addition: ${additionResult}<br>
        Subtraction: ${subtractionResult}<br>
        Division: ${divisionResult}
    `;
}

// Function to demonstrate scope
function testScope() {
    // This is a local variable with the same name as a global variable
    let globalValue = 20; // This shadows the global variable

    const localValue = 5;

    // This function can access both global and local variables
    const result = globalValue + localValue;

    document.getElementById('scope-result').innerHTML = `
        Local globalValue: ${globalValue}<br>
        Actual globalValue: ${window.globalValue}<br>
        Local variable: ${localValue}<br>
        Sum: ${result}
    `;

    // Trying to access localValue here would cause an error
    // console.log(localValue); // This would work inside the function
}

// This would cause an error because localValue is not accessible outside the function
// console.log(localValue);

// Part 3: Combining CSS Animations with JavaScript

// Function to start animation
function startAnimation() {
    const box = document.getElementById('animated-box');
    box.classList.add('animate-box');
}

// Function to stop animation
function stopAnimation() {
    const box = document.getElementById('animated-box');
    box.classList.remove('animate-box');
}

// Function to toggle animation
function toggleAnimation() {
    const box = document.getElementById('animated-box');
    box.classList.toggle('animate-box');
}

// Function to flip card
function flipCard() {
    const card = document.getElementById('flip-card');
    card.classList.toggle('flipped');
}

// Modal functions
function openModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
}

// Close modal if clicked outside of content
window.addEventListener('click', function (event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
});

// Utility function to generate random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change background color of animated box
function changeBoxColor() {
    const box = document.getElementById('animated-box');
    box.style.backgroundColor = getRandomColor();
}

// Add event listener to change color when animation iteration completes
document.getElementById('animated-box').addEventListener('animationiteration', changeBoxColor);

// Initialize page with some interactive elements
document.addEventListener('DOMContentLoaded', function () {
    // Add click event to all buttons for a subtle effect
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mousedown', function () {
            this.style.transform = 'scale(0.95)';
        });
        button.addEventListener('mouseup', function () {
            this.style.transform = 'scale(1)';
        });
        button.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });
});