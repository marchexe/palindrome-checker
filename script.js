const input = document.getElementById("input");
const message = document.getElementById("message");

function reverseValue(str) {
    return str.split("").reverse().join("");
}

function getValue() {
    const value = input.value.trim();

    if (!value) {
        message.textContent = "enter a word";
        message.className = "error";
        return;
    }

    const normalizedValue = value.toLowerCase();
    const reversedValue = reverseValue(normalizedValue);

    if (normalizedValue === reversedValue) {
        message.textContent = `${value} is a palindrome`;
        message.className = "success"
    } else {
        message.textContent = `${value} is not a palindrome`;
        message.className = "default"
    }

    input.value = "";
}

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        getValue();
    }
});
