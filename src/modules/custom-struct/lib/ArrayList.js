/**
 * Created by wenshao on 2017/7/24.
 */
'use strict';
const ArrayList = (function () {
    const _items = Symbol("_items");
    class ArrayList {
        constructor() {
            this[_items] = [];
        }

        insert() {
            this[_items].push(...arguments);
        }

        swap(i, j) {
            let temp = this[_items][i];
            this[_items][i] = this[_items][j];
            this[_items][j] = temp;
        }

        /**
         * 冒泡排序  O(n^2)
         */
        bubbleSort() {
            let count = 0;
            /*for (let i = 0; i < this.size(); i++) {
             for (let j = i + 1; j < this.size(); j++) {
             if (this[_items][i] > this[_items][j]) this.swap(i,j);
             count++;
             }
             }*/
            for (let i = 0; i < this.size(); i++) {
                for (let j = 0; j < this.size() - 1; j++) {
                    if (this[_items][j] > this[_items][j + 1]) this.swap(j, j + 1);
                    count++;
                }
            }
            return count;
        }

        /**
         * 冒泡排序 优化  O((n^2)/2 )
         */
        modifiedBubbleSort() {
            let count = 0;
            /*for (let i = 0; i < this.size(); i++) {
                for (let j = i + 1; j < this.size(); j++) {
                    if (this[_items][i] > this[_items][j]) this.swap(i, j);
                    count++;
                }
                console.log(this[_items])
            }*/
            for (let i = 0; i < this.size(); i++) {
                for (let j = 0; j < this.size() - i - 1; j++) {
                    if (this[_items][j] > this[_items][j + 1]) this.swap(j, j + 1);
                    count++;
                }
            }
            return count;
        }

        size() {
            return this[_items].length;
        }

        toString() {
            return this[_items].join()
        }
    }
    return ArrayList;
})();
module.exports = ArrayList;
