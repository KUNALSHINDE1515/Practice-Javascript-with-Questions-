const box = document.querySelectorAll('.box')
const bgColor = document.querySelector('body')

box.forEach( (box) => {
    console.log(box);

    box.addEventListener('click',  (item) =>{ 
        console.log(item);
        console.log(item.target);
        if (item.target.id === "skyBlues" ) {
            bgColor.style.backgroundColor = item.target.id
        }
        if (item.target.id === "brown" ) {
            bgColor.style.backgroundColor = item.target.id
        }
        if (item.target.id === "gray" ) {
            bgColor.style.backgroundColor = item.target.id
        }
        if (item.target.id ===  "red" ) {
            bgColor.style.backgroundColor = item.target.id
        }
        if (item.target.id === "white" ) {
            bgColor.style.backgroundColor = item.target.id
        }
    } )
})