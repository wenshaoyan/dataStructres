/**
 * Created by wenshao on 2017/8/7.
 * 实现Math函数库
 */
'use strict';
const CustomMath = (function () {
    class CustomMath {
        constructor() {

        }
        static floor(s){
            return s;
        }
        /**
         * 四舍五入
         * @param s
         * @return {*}  Number或者NaN
         */
        static round(s) {
            let n = s * 10;
            if (isNaN(n)) {
                return NaN;
            } else if (n == 0) {
                return 0;
            } else if (n > 0) {
                n += 5;
            } else {
                n -= 5;
            }
            console.log(new Date().getMilliseconds())
            return parseInt(n / 10);
        }



    }
    return CustomMath;
})();
module.exports = CustomMath;






