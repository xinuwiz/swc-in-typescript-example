// Decorador de Classe
function Autowired(): ClassDecorator {
    return function() {
        console.log("Autowired");
    };
}

// Decorador de Propriedade
function Bean(): PropertyDecorator {
    return function() {
        console.log("Bean");
    };
}

// Aplicando o decorador de classe e o decorador de propriedade
@Autowired()
class Example {

    @Bean()
    hello: string;

}
