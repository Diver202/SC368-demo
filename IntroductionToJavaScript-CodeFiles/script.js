
function Fetch(){
    const data = fetch(
        'https://timeapi.io/api/time/current/zone?timeZone=Asia%2FKolkata'
    ).then((response) => {
        response.json().then((data) => {
            document.getElementById("time").innerText = data.hour + ":" + data.minute + ":" + data.seconds;
        });
    });
}

const couroutine = setInterval(Fetch, 1000);

