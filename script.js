function submitText() {
    let message = document.getElementById("message").value;
    if (message !== "") {
        document.getElementById("lastMessage").innerHTML = message;
        document.getElementById('message').value = "";
    }
    else {
        document.getElementById("lastMessage").style.color = 'red';
        document.getElementById("lastMessage").innerHTML = `Message Invalid!`;
    }
}

function italic() {
    document.getElementById('lastMessage').style.fontStyle = "italic";
}

function color() {
    let c1 = (Math.floor(Math.random() * 251)).toString();
    let c2 = (Math.floor(Math.random() * 251)).toString();
    let c3 = (Math.floor(Math.random() * 251)).toString();
    document.getElementById('lastMessage').style.color = `rgb(${c1}, ${c2}, ${c3})`;
}

function bigger() {
    document.getElementById('lastMessage').style.fontSize = '30px';
}

function smaller() {
    document.getElementById("lastMessage").style.fontSize = '17px';
}

function initial() {
    document.getElementById('lastMessage').style.fontSize = '24px';
    document.getElementById('lastMessage').style.fontStyle = "normal";
    document.getElementById('lastMessage').style.color = `rgb(90, 120, 250)`;
}

function test() {
    let size = window.getComputedStyle(document.getElementById("lastMessage")).fontSize;
    let fontSize = parseInt(size);
    document.getElementById('lastMessage').style.fontSize = `${fontSize + 2}px`;
}