let width;
let height; 
let verticalSpeed;
let horizontalSpeed; 

const button = document.querySelector("#execution-button");

button.addEventListener('click', () => {
    width = parseInt(document.querySelector('#width').value);
    height = parseInt(document.querySelector('#height').value);
    horizontalSpeed = parseInt(document.querySelector('#horizontal').value);
    verticalSpeed = parseInt(document.querySelector('#vertical').value);
    document.querySelector("form").remove();

    let rectangle = document.createElement("div");
    rectangle.style.backgroundColor = "red";
     rectangle.style.width = width;
      rectangle.style.height = height;
       rectangle.style.position = "absolute";
       rectangle.style.left = 0;
       rectangle.style.top = 0;

       document.body.appendChild(rectangle);
       let verticalDirection = generateRandomSpeed();
       let horizontalSpeed = generateRandomSpeed();
       let horizontalPosition = 0;
       let verticalPosition = 0;
       
       setInterval(() => {
           horizontalPosition = horizontalPosition + horizontalDirection*horizontalSpeed;
           verticalPosition = verticalPosition + verticalDirection*verticalSpeed;
           rectangle.style.left = horizontalPosition;
           rectangle.style.top = verticalPosition;

           console.log(window.innerWidth-(horizontalWidth_, window.innerHeight-(verticalPosition+height)))
           if (window.innerWidth - (horizontalPosition) < 0 || horizontalPosition<=0) 
           {
               horizontalDirection =- horizontalDirection;  
           }
           if (window.innerHeight - (verticalPosition + height)<0 || verticalPosition <= 0)
           {
               verticalDirection -= verticalDirection;
           }   
        },200)
    });

    const generateRandomSpeed = () => {
        return (Math.random()>0.5?1:-1);
    }
