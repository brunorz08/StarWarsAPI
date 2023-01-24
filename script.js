var urlapi = "https://swapi.dev/api/people/";
var nombre = document.getElementById("id");

var btn = document.getElementById("btn");




btn.addEventListener("click", () => {
    ajax({

        metodo: "GET",
        url: `${"https://swapi.dev/api/people/" + nombre.value}`,
        load: respuesta => {

        
            console.log(respuesta.name);
         
    
        }
    })


})





function ajax(config) {
    let xhr = new XMLHttpRequest;
    xhr.open(config.metodo, config.url)

    xhr.addEventListener("load", () => {
        if (xhr.status == 200) {
            config.load(JSON.parse(xhr.response))
        }
    })

    xhr.send(config.data);
}