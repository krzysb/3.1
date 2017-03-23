(function () {

    var positionOutput = document.querySelector("#positionOutput");
    var supportOutput = document.querySelector("#supportOutput");
    var findPosition = document.querySelector("#findPosition");
    var latitude;
    var longitude;
    if (!navigator.geolocation) {

        supportOutput.innerHTML = "Twoja przeglądarka nie wspiera usługi geolokalizacji"
        supportOutput.classList.add("alert-daneger");

    } else {
        supportOutput.innerHTML = "Twoja przeglądarka wspiera usługi geolokalizacji"
        supportOutput.classList.add("alert-success");
    }

    function geoSuccess(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        positionOutput.innerHTML = "<a href=http://bing.com/maps/default.aspx?cp=" + latitude + "~" + longitude + ">Przejdz do mapy</a>";
    }

    function error() {
        positionOutput.innerHTML = "Brak pozwolenia na określenie lokalizacji";
    }
    findPosition.onclick = function () {
        positionOutput.innerHTML = "Czekaj..."
        navigator.geolocation.getCurrentPosition(geoSuccess, error);



    }


})();