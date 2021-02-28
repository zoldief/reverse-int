module.exports = function reverse(n) {
    if (arguments.length === 0 || typeof n !== "number") {
        return 0
    } else {
        let arr = `${Math.abs(n)}`.split('');
        let result = [];

        for (let i = 0; i < arr.length; i++) {
            result.unshift(arr[i]);
        }

        return Number(result.join(''))
    }
}
