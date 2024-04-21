
class MathUtil{
    static PI = 3.14519;

    static getDimeter(radius) {
        return radius * 2;

    }

    static getCircumference(radius) {
        return 2 * this.PI * radius;
    }

}

console.log(MathUtil.PI);
console.log(MathUtil.getDimeter(10));
console.log(MathUtil.getCircumference(10));