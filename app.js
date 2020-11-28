let i = 0, text;
text = 'HELLO';
function type() {
    if(i <text.length) {
        document.getElementById('text').innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 150);
    }
}
type();