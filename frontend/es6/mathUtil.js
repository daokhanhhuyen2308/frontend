export const PI = 3.14159;

export function getCircumference(radius){
    return 2 * PI * radius;
}

export function getArea(radius){
    return radius * radius * PI;
}

export function getVolume(radius){
    return (4/3) * PI * radius * radius * radius;
}


