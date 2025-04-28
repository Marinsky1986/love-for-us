function sendMessage() {
    var userMessage = document.getElementById("user-input").value;
    var chatBox = document.getElementById("chat-box");

    var newMessage = document.createElement("div");
    newMessage.classList.add("user-message");
    newMessage.textContent = userMessage;

    chatBox.appendChild(newMessage);

    document.getElementById("user-input").value = "";
}
