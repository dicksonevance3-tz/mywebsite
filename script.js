const text =
"Web Designer | Programmer | Networking Student";

let index = 0;

function type(){

    if(index < text.length){

        document.querySelector(".typing").innerHTML +=
        text.charAt(index);

        index++;

        setTimeout(type,100);
    }
}

type();