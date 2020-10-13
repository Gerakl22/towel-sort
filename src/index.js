// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];

    if (typeof matrix === "undefined" || matrix === []) {
        return [];
    } else {
        matrix.forEach((array, index) => {
            index % 2 !== 0 ? result.push(array.reverse()) : result.push(array);
        });

        return(result.flat(1))
    }
};
