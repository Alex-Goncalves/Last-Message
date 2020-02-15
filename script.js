function submitText() {
    let message = document.getElementById("message").value;
    if (message !== "") {
        document.getElementById('lastMessage').style.fontSize = '24px';
        document.getElementById('lastMessage').style.fontStyle = "normal";
        document.getElementById('lastMessage').style.color = `rgb(90, 120, 250)`;
        document.getElementById("lastMessage").innerHTML = message;
        document.getElementById('message').value = "";
    }
    else {
        document.getElementById("lastMessage").style.color = 'red';
        document.getElementById("lastMessage").innerHTML = `Invalid Message!`;
    }
}

function italic() {
    if (document.getElementById('lastMessage').innerHTML !== 'Invalid Message!') {
        document.getElementById('lastMessage').style.fontStyle = "italic";
    }
}

function bigger() {
    if (document.getElementById('lastMessage').innerHTML !== 'Invalid Message!') {
        let size = window.getComputedStyle(document.getElementById("lastMessage")).fontSize;
        let fontSize = parseInt(size);
        if (fontSize < 40) {
            document.getElementById('lastMessage').style.fontSize = `${fontSize + 2}px`;
        }
    }
}

function smaller() {
    if (document.getElementById('lastMessage').innerHTML !== 'Invalid Message!') {
        let size = window.getComputedStyle(document.getElementById("lastMessage")).fontSize;
        let fontSize = parseInt(size);
        if (fontSize > 12) {
            document.getElementById('lastMessage').style.fontSize = `${fontSize - 2}px`;
        }
    }
}

function color() {
    if (document.getElementById('lastMessage').innerHTML !== 'Invalid Message!') {
        let c1 = (Math.floor(Math.random() * 251)).toString();
        let c2 = (Math.floor(Math.random() * 251)).toString();
        let c3 = (Math.floor(Math.random() * 251)).toString();
        document.getElementById('lastMessage').style.color = `rgb(${c1}, ${c2}, ${c3})`;
    }
}


function initial() {
    if (document.getElementById('lastMessage').innerHTML !== 'Invalid Message!') {
        document.getElementById('lastMessage').style.fontSize = '24px';
        document.getElementById('lastMessage').style.fontStyle = "normal";
        document.getElementById('lastMessage').style.color = `rgb(90, 120, 250)`;
    }
}

