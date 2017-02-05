(function () {
    'use strict';

    var collection = ['a','b','c','d','e','f'],
        itemsPerPage = 4,
        helper = new PaginationHelper(collection, itemsPerPage),
        strArray = [
            'var helper = new PaginationHelper([\'' + collection.join('\',\'') + '\'], ' + itemsPerPage + ');',
            'helper.pageCount() => ' + helper.pageCount() + '; // should === 2',
            'helper.itemCount() => ' + helper.itemCount() + '; // should === 6',
            'helper.pageItemCount(0) => ' + helper.pageItemCount(0) + '; // should === 4',
            'helper.pageItemCount(1) => ' + helper.pageItemCount(1) + '; // should === 2',
            'helper.pageItemCount(2) => ' + helper.pageItemCount(2) + '; // should === -1',
            'helper.pageIndex(5) => ' + helper.pageIndex(5) + '; // should === 1',
            'helper.pageIndex(2) => ' + helper.pageIndex(2) + '; // should === 0',
            'helper.pageIndex(10) => ' + helper.pageIndex(10) + '; // should === -1',
            'helper.pageIndex(-10) => ' + helper.pageIndex(-10) + '; // should === -1'
        ],
        mainBlock = document.querySelector('.main'),
        newLine;

        for (var i = 0, arrLen = strArray.length; i < arrLen; i++) {
            newLine = document.createElement('p');
            newLine.innerHTML = strArray[i];
            mainBlock.appendChild(newLine);
        }
})();