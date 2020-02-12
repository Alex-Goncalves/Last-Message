function submitText() {
    let message = document.getElementById("message").value;
    document.getElementById("lastMessage").innerHTML = `Last Message: ${message}`;
}
