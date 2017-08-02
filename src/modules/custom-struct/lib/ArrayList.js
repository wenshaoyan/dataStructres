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
        selectSort() {
            let count = 0;
            let indexMin;
            for (let i = 0; i < this.size() - 1; i++) {
                indexMin = i;
                for (let j = i + 1; j < this.size(); j++) {
                    if (this[_items][j] < this[_items][indexMin]) indexMin = j;
                    count++;
                }
                if (i != indexMin) this.swap(i, indexMin);
            }

            return count;
        }

        /**
         * 插入排序 假定第一个已经排好序 接着就和第二项比较 第二项大的话不变 小的话就插入到第一项之前
         */
        insertionSort() {
            let i, j, temp, count = 0;
            for (i = 1; i < this.size(); i++) {
                j = i;
                temp = this[_items][i];
                while (j > 0 && this[_items][j - 1] > temp) {
                    this[_items][j] = this[_items][j - 1];
                    j--;
                    count++;
                }
                this[_items][j] = temp;
            }
            return count;
        }


        /**
         * 快速排序 将原始数组分割为只有一个元素的数组 然后将小数组合成大的数组
         */
        mergeSort() {
            this[_items] = this.mergeSortRec(this[_items]);
        }

        mergeSortRec(array) {
            const len = array.length;
            if (len == 1) {
                return array;
            }
            const mid = Math.floor(len / 2);
            const left = array.slice(0, mid);
            const right = array.slice(mid, len);
            return this.merge(this.mergeSortRec(left), this.mergeSortRec(right));

        }

        merge(left, right) {
            const result = [];
            let il = 0, ir = 0;
            while (il<left.length && ir<right.length){
                if (left[il]<right[ir]){
                    result.push(left[il++]);
                }else{
                    result.push(right[il++]);
                }
            }
            while (il<left.length){
                result.push(left[il++]);
            }
            while (ir<left.length){
                result.push(right[ir++]);
            }
            return result;
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
