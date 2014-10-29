'use strict';

var merge = function (left, right, arr, member, direction) {
    var a = 0;

    while (left.length && right.length) {
        var atLeft = left[0];
        var atRight = right[0];
        var takeFromLeftArray, shifted, compareLeft, compareRight;

        //if named argument is a string, then consider that a member of the object to be sorted
        if (typeof member === 'string') {
            compareLeft = atLeft[member];
            compareRight = atRight[member];
        }
        else { //otherwise, we will assume this is not an array of objects so compare the elements themselves
            compareLeft = atLeft;
            compareRight = atRight;
        }

        if (compareLeft < compareRight) {
            takeFromLeftArray = true;
        }
        else {
            takeFromLeftArray = false;
        }

        //if descending, reverse this decision
        if (direction === 'desc') {
            shifted = takeFromLeftArray ? right.shift() : left.shift();
        }
        else { //'asc' doesn’t need to be specified, so this is the default behavior to sort smallest to biggest
            shifted = takeFromLeftArray ? left.shift() : right.shift();
        }
        arr[a++] = shifted;
    }

    while (left.length) {
        arr[a++] = left.shift();
    }
    while (right.length) {
        arr[a++] = right.shift();
    }

    return arr;
};

var mSort = function (arr, tmp, l, member, direction) {
    if (l === 1) {
        return;
    }

    var m = Math.floor(l / 2),
        tempLeft = tmp.slice(0, m),
        tempRight = tmp.slice(m);

    mSort(tempLeft, arr.slice(0, m), m, member, direction);
    mSort(tempRight, arr.slice(m), l - m, member, direction);

    return merge(tempLeft, tempRight, arr, member, direction);
};

module.exports = function (arr, member, direction) {
    return mSort(arr, arr.slice(), arr.length, member, direction);
};
