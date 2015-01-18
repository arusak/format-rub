function roubles(str) {
    var arr = [];

    if (typeof str === 'number') {
        str = '' + str;
    }

    for (var i = str.length - 1; i >= 0; i -= 1) {
        arr.unshift(str.charAt(i));
        if ((str.length - i) > 0 && (str.length - i) % 3 === 0) {
            arr.unshift('&thinsp;');
        }
    }
    return arr.join('') + ' &#8381;';
}
