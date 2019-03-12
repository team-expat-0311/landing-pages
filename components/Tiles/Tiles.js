// class StyleLink {
//   constructor(styleElement){
//     this.styleElement = styleElement;
//     // this.style = document.querySelectorAll('.style');
//     // this.img = document.querySelectorAll('.image');
//     // this.content = document.querySelectorAll('.style a');

//     this.tabAll = styleElement.dataset.tab;
    

//     this.tabRandom = document.querySelectorAll(`.style[data-tab='${this.tabAll}']`);
//     console.log(this.tabRandom);   

//     this.tabRandom = Array.from(this.tabRandom).map(function(box) {
//       return new NewStyle(box)
//     })

//     this.styleElement.addEventListener('mouseover', () => this.hoverOffEffect())

//     this.styleElement.addEventListener('mouseout', () => this.hoverOnEffect())

//     // console.log(this.content);
    
//   } 

//   hoverOffEffect(){

//     const contentOff = document.querySelectorAll('.style');
//     contentOff.forEach(function(all){
//       all.style.visibility = 'hidden'  
//     });
//   }

//   hoverOnEffect(){
//     const contentOn = document.querySelectorAll('.style');
//     contentOn.forEach(function(all){
//       all.style.visibility = 'visible'  
//     });
//   }

// };

// class NewStyle {
//   constructor(boxStyle){
//     this.style = boxStyle;
//   }
//   hoverOffEffect(){

//     this.boxStyle.style.visibility = 'visible'
//   };

// }





// let styles = document.querySelectorAll('.tiles').forEach(function(style) {
//   return new StyleLink(style)});

  

