function multiply() {
    i = inp1.value;
    j = inp2.value;
    k = result.innerText;
    l = true;
    result.innerText = '';
    start = false;

    if (i && j) {
        start = true;
    } else { alert('Fill in your numbers') }
    

        if (start) {
            for (let i = 1; i <= inp1.value; i++) {
                for (let j = 1; j <= inp2.value; j++) {
                    result.innerText +=
                        (i + '*' + j + '=' + (i * j));
                    console.log(i + '*' + j + '=' + (i * j));
                }
            }
        }
}
function reset() {
    inp1.value = '';
    inp2.value = '';
    result.innerText = '';
    start = false;
}

