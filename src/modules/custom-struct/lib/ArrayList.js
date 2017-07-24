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
         * 冒泡排序 冒泡排序法是两两依次比较，并做交换，交换的次数多 O(n^2)
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

        /**
         * 选择排序 每次循环找出最值，循环结束后将最值调整到合适位置，交换的次数少。 O((n^2)/2 )
         * @return {number}
         */
        selectSort(){
            let count = 0;
            let indexMin;
            for (let i = 0; i < this.size()-1; i++) {
                indexMin = i ;
                for (let j = i+1; j < this.size() ; j++) {
                    if (this[_items][j]<this[_items][indexMin]) indexMin = j;
                    count++;
                }
                if (i != indexMin) this.swap(i, indexMin);
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
