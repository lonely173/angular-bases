import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string ='ironman';
  public age: number = 45;
  public cities: string[] =['Barcelona', 'Madrid', 'Lima'];

 get capitalizedName():string{ // los  get se venn como si fueran propiedades asi que no necesitan ()
  return  this.name.toUpperCase();
 }

 public getHeroDescription():string {  //metodo, si necesita ()
  // con el private sale error porque el html esta fuera de la clase
  // this.
  return `${this.name} - ${this.age}`;

 }

 changeHero():void {
  this.name = 'Spiderman'
}

changeAge():void {
  this.age = 25;
}

resetForm():void {
  this.name = 'ironman';
  this.age = 45;

  // document.querySelectorAll('h1')!.forEach( element => {
  //   // querySelectorAll afecta a todos los h1
  //   element.innerHTML = '<h1>Desde Angular</h1>';
  // });
}

}
