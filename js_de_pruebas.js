class Figura {
  constructor(color){
      this.color = color;
  }
  saludar (){
      return `Hola! Soy una figura y mi color es ${this.color}`;
  }
}

const nuevaFigura = new Figura("Amarillo");

class Cuadrado extends Figura {
  constructor(color, alto, ancho) {
      super(color);
      this.alto = alto;
      this.ancho = ancho;
  }

  saludar () {
      return `Hola! Soy un cuadrado. Mi color es ${this.color} y mis medidas son ${this.alto*this.ancho}`
  }
}

const nuevoCuadrado = new Cuadrado("Negro", 8, 6);

console.log(nuevoCuadrado.saludar());
