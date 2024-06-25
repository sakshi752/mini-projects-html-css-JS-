let str = "";
let buttons = document.querySelectorAll('.button');
let input = document.querySelector('input');

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            str = eval(str);
        } else if (e.target.innerHTML === 'C') {
            str = "";
        } else if (e.target.innerHTML === 'del') {
            // console.log(e.target.innerHTML);
            str = str.substring(0, str.length - 1);
        } else {
            str = str + e.target.innerHTML;
        }
        input.value = str;
    });
});
