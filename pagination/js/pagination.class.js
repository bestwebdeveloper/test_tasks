/**
* @author   Vladimir Tsvetkov <best.web.developer@yandex.ru>
* @version  0.1
*/

(function (window) {
    'use strict';

    /**
     * Pagination class.
     *
     * @classDescription PaginationHelper
     * @param {Array} collection An array of items to paginate
     * @param {Number} itemsPerPage An amount of items on one page
     */
    function PaginationHelper(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }

    /**
    * @method pageCount
    * @return {Number} Returns the number of pages.
    */
    PaginationHelper.prototype.pageCount = function () {
        if (this.collection.length && this.itemsPerPage) {
            return Math.ceil(this.collection.length / this.itemsPerPage);
        } else {
            return -1;
        }
    }

    /**
    * @method itemCount
    * @return {Number} Returns the number of items within the collection.
    */
    PaginationHelper.prototype.itemCount = function () {
        if (Object.prototype.toString.call(this.collection) === '[object Array]') {
            return this.collection.length;
        } else {
            return -1;
        }
    }

    /**
    * @method pageItemCount
    * @param {Number} pageIndex Page index (zero based).
    * @return {Number} Returns the amount of items on the page.
    */
    PaginationHelper.prototype.pageItemCount = function (pageIndex) {
        var pageCount = this.pageCount(),
            itemCount = this.itemCount();

        if (pageIndex >= 0 && pageCount > 0 && pageIndex < pageCount) {
            if (pageIndex === (pageCount - 1)) {
                return itemCount % this.itemsPerPage || this.itemsPerPage;
            } else {
                return this.itemsPerPage;
            }
        } else {
            return -1;
        }
    }

    /**
    * @method pageIndex
    * @param {Number} itemIndex Item index in collection (zero based).
    * @return {Number} Returns page index that item belongs to.
    */
    PaginationHelper.prototype.pageIndex = function (itemIndex) {
        if (itemIndex >= 0 && itemIndex < this.itemCount() && this.itemsPerPage) {
            return Math.floor((itemIndex + 1) / this.itemsPerPage) - ((itemIndex + 1) % this.itemsPerPage === 0);
        } else {
            return -1;
        }
    }

    window.PaginationHelper = PaginationHelper;
})(window);