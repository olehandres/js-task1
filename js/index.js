const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));

function diskr(a, b, c) {
    return ((b * b) - (4 * a * c));
}

function quadraticEq(a, b, c) {
    const D = diskr(a, b, c);
    if (D > 0) {
        const x1 = (-b + Math.sqrt(D)) / (2 * a);
        const x2 = (-b - Math.sqrt(D)) / (2 * a);
        alert('x1=' + x1 + 'x2 =' + x2);
    } else if (D == 0) {
        const x1 = (-b) / (2 * a);
        alert('x =' + x1);
    } else if (D < 0) {
        alert('No solution');
    }
}

alert (quadraticEq(a, b, c));










