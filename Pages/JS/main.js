let workouts = new Object({
    lowerBody: {
        legExtension: (20,15,12,10),
        legPress:(20)
    }
});

function nutrients (nutrients){
    return nutrients + 1;
}

let macros = new Object({   
    
});

let user = {
    name: 'Zack',
    age: 22,
};

console.log(user.age)

//Factory and Constructor Functions
//Used when an object has behavior, meaning it has one or more methods attached 

//Factory Function

function createCircle(radius) {
   return{
        radius,
        draw: function() {
            console.log(draw);
       }
    };
};

//Constructor Function

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
};

const another = new Circle(1);