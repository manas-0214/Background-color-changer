const button = document.querySelectorAll(".button");
const body = document.querySelector("body");
const text = document.querySelector('.text')

button.forEach(function(button){
    button.addEventListener('click', function(e){
        const col = e.target.id
        switch(col){
            case 'grey':
                body.style.backgroundColor = e.target.id;
                text.textContent = `you clicked on ${e.target.id}`;
                break;

            case 'white':
                body.style.backgroundColor = e.target.id;
                text.textContent = `you clicked on ${e.target.id}`;
                break;

            case 'blue':
                body.style.backgroundColor = e.target.id;
                text.textContent = `you clicked on ${e.target.id}`;
                break;
            
            case 'yellow':
                body.style.backgroundColor = e.target.id;
                text.textContent = `you clicked on ${e.target.id}`;
                break;

            case 'green':
                body.style.backgroundColor = e.target.id;
                text.textContent = `you clicked on ${e.target.id}`;
                break;

            default:
                console.log("you didn't click any color")
        }
    })
})


