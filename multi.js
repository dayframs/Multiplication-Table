function multiply() {
    i = inp1.value;
    j = inp2.value;
    k = result.innerHTML;
    l = true;
    result.innerHTML = '';
    start = false;

    if (i && j) {
        start = true;
    } else { alert('Fill in your numbers') }
    

    if (start) {
        for (let i = 1; i <= inp1.value; i++) {
            result.innerHTML += "<th> <br>";
            for (let j = 1; j <= inp2.value; j++) {
                result.innerHTML += "<td>"
                    + i + 'x' + j + '=' + i * j + "</td>";
            } result.innerHTML += "</th>";
        }
    }
}

function reset() {
    inp1.value = '';
    inp2.value = '';
    result.innerText = '';
    start = false;
}

