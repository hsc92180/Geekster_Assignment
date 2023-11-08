const inputArea = document.getElementById('inputArea');
inputArea.addEventListener("keyup", (e) => {
    const userInput = e.target.value;

    const maxLength = e.target.maxLength;

    const totalChars = userInput.length;
    const remainingChars = maxLength - totalChars;

    const totalCharsSpan = document.getElementById('totalChars');
    totalCharsSpan.innerText = totalChars;

    const remainingCharsSpan = document.getElementById('remainingChars');
    remainingCharsSpan.innerText = remainingChars;


    
});