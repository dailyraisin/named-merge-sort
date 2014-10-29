# Named Merge Sort

Merge sort an array of objects based on a property or sort an array of values.

Based on merge sort found on [rosetta code](http://rosettacode.org/wiki/Sorting_algorithms/Merge_sort#JavaScript).

    var mergeSort = require('named-merge-sort');

    var things = [
        '2013-01',
        '2014-12',
        '2010-10',
        '2011-02',
        '2010-05',
        '2010-07',
        '2011-11'
    ];
        
    things = mergeSort(things, 0);
    console.dir(things);
    
    things = mergeSort(things, 0, 'desc');
    console.dir(things);
    
    var things = [
        {name: 'Peter'},
        {name: 'Lenny'},
        {name: 'Scott'}
    ];
        
    things = mergeSort(things, 'name');
    console.dir(things);
    
    things = mergeSort(things, 'name', 'desc');
    console.dir(things);
