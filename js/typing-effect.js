// typing-effect.js

document.addEventListener('DOMContentLoaded', function () {
    const typedTextElement = document.getElementById('typed-text');
    const text = typedTextElement.innerText;
    typedTextElement.innerText = '';

    let index = 0;
    const speed = 100; // Typing speed in ms

    function type() {
        if (index < text.length) {
            typedTextElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
});

