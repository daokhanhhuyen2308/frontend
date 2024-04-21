class Rectangle{

    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){

        if(newWidth > 0){
            this._width = newWidth;
        }

        else{
           console.error("Invalid width");
        }
        
    }
    
    get width(){
        return this._width;
    }

    get height() {
        return this._height;
    }

    get area(){
        return this._width * this._height;
    }
}

//const rectangle = new Rectangle(100, 200);

rectangle.width = 200; 
rectangle.height = 200;
console.log(rectangle.width, rectangle.height);

