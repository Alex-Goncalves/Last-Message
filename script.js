function submitText() {
    let message = document.getElementById("message").value;
    if (message !== "") {
        document.getElementById('lastMessage').style.color = 'rgb(90, 120, 250)';
        document.getElementById("lastMessage").innerHTML = `Last Message: ${message}`;
        document.getElementById('message').innerHTML = 'NO';
    }
    else {
        document.getElementById("lastMessage").style.color = 'red';
        document.getElementById("lastMessage").innerHTML = `Message Invalid!`;
    }
}

function bold() {
    let message = document.getElementById("lastMessage");
    message.innerHTML = `<i>${message.value}</i>`;
}
