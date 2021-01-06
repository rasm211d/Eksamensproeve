function getData() {
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "https://vejr.eu/api.php?location=Copenhagen&degree=C", true);
    xhttp.send();
}