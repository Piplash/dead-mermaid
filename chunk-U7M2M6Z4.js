import{a as M}from"./chunk-VFGU7XL2.js";import{$a as t,Ca as C,Da as P,Ga as s,Ta as _,Va as v,Xa as x,Y as m,Ya as y,Za as w,_a as b,ab as n,bb as l,cb as h,ea as d,eb as a,fa as g,fb as p,jb as r,lb as f}from"./chunk-2DZT2G73.js";function F(i,u){if(i&1){let e=h();t(0,"div",9)(1,"img",10),a("click",function(){let c=d(e).$implicit,O=p(2);return g(O.detalleImagen(c))}),n()()}if(i&2){let e=u.$implicit;s(),v("src","assets/portafolio/"+e.src,C)("alt",e.descripcion)}}function T(i,u){if(i&1&&(t(0,"div",7),w(1,F,2,2,"div",9,y),n()),i&2){let e=u.$implicit;s(),b(e)}}function k(i,u){if(i&1){let e=h();t(0,"div",11),a("click",function(){d(e);let c=p();return g(c.closeFullScreen())}),t(1,"div",12),l(2,"img",13),t(3,"button",14),a("click",function(){d(e);let c=p();return g(c.closeFullScreen())}),r(4,"X"),n()()()}if(i&2){let e=p();s(2),v("src","assets/portafolio/"+e.selectedImage,C)}}var E=(()=>{class i{constructor(){this.imagenes=[],this.imagenesPorPagina=16,this.filas=[],this.selectedImage=""}ngOnInit(){this.imagenes=this.obtenerPortafolio(),this.crearFilas()}obtenerPortafolio(){return[{src:"1.jpg",descripcion:"Descripci\xF3n 1"},{src:"2.jpg",descripcion:"Descripci\xF3n 2"},{src:"3.jpg",descripcion:"Descripci\xF3n 3"},{src:"4.jpg",descripcion:"Descripci\xF3n 4"},{src:"5.jpg",descripcion:"Descripci\xF3n 5"},{src:"6.jpg",descripcion:"Descripci\xF3n 6"},{src:"7.jpg",descripcion:"Descripci\xF3n 7"},{src:"8.jpg",descripcion:"Descripci\xF3n 8"},{src:"9.jpg",descripcion:"Descripci\xF3n 9"}]}crearFilas(){this.filas=[];for(let e=0;e<this.imagenes.length;e+=4)this.filas.push(this.imagenes.slice(e,e+4))}detalleImagen(e){this.selectedImage=e.src}closeFullScreen(){this.selectedImage=""}static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275cmp=m({type:i,selectors:[["app-fotos"]],standalone:!0,features:[f],decls:18,vars:1,consts:[[1,"content-container"],[1,"content"],[1,"row","row-titulo"],[1,"font-barlow"],[1,"font-oswald"],[1,"pintar","borders-black"],[1,"container"],[1,"row","row-img"],[1,"fullscreen-overlay"],[1,"col-sm-3"],[1,"img-fluid",3,"click","src","alt"],[1,"fullscreen-overlay",3,"click"],[1,"fullscreen-container"],["alt","fullscreenimg",1,"fullscreen-image",3,"src"],[1,"close-btn",3,"click"]],template:function(o,c){o&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"p",3),r(4,"DEAD MERMAID TATTOO"),n(),t(5,"h1",4),r(6," PORTAFOLIO - "),t(7,"small"),r(8,"BLACK WORK & "),t(9,"span",5),r(10,"COLOR"),n()()(),l(11,"br")(12,"hr")(13,"br"),n(),t(14,"div",6),w(15,T,3,0,"div",7,y),n()(),_(17,k,5,1,"div",8),n()),o&2&&(s(15),b(c.filas),s(2),x(17,c.selectedImage?17:-1))},styles:[".content-container[_ngcontent-%COMP%]{min-height:100vh;display:flex;flex-direction:column;justify-content:center}.content[_ngcontent-%COMP%]{color:#000;min-width:90vw;margin:0 auto;padding:20px}.row-titulo[_ngcontent-%COMP%]{margin-top:100px}.row-img[_ngcontent-%COMP%]{margin-bottom:15px}.img-fluid[_ngcontent-%COMP%]{width:100%;height:200px;object-fit:cover;opacity:.7;transition:opacity .5s ease;cursor:pointer}.img-fluid[_ngcontent-%COMP%]:hover{opacity:1;transition:opacity .5s ease}.fullscreen-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#000c;display:flex;justify-content:center;align-items:center;z-index:1000}.fullscreen-container[_ngcontent-%COMP%]{position:relative;max-width:80%;max-height:80%}.fullscreen-image[_ngcontent-%COMP%]{max-height:70vh;display:block}.close-btn[_ngcontent-%COMP%]{position:absolute;top:10px;right:10px;background-color:#fff;border:none;padding:5px 10px;cursor:pointer;font-size:18px;z-index:1100}@media (max-width: 800px){.fullscreen-image[_ngcontent-%COMP%]{max-width:80%;display:block;margin:0 auto}.close-btn[_ngcontent-%COMP%]{display:none}}"]})}}return i})();function j(i,u){if(i&1){let e=h();t(0,"div",12),a("click",function(){d(e);let c=p();return g(c.closeFullScreen())}),t(1,"div",13)(2,"div",14),l(3,"iframe",15),n()()()}}var S=(()=>{class i{constructor(){this.imagenes=[],this.imagenesPorPagina=16,this.filas=[],this.selectedImage=""}ngOnInit(){this.imagenes=this.obtenerPortafolio(),this.crearFilas()}obtenerPortafolio(){return[{src:"1.jpg",descripcion:"Descripci\xF3n 1"},{src:"2.jpg",descripcion:"Descripci\xF3n 2"},{src:"3.jpg",descripcion:"Descripci\xF3n 3"},{src:"4.jpg",descripcion:"Descripci\xF3n 4"},{src:"5.jpg",descripcion:"Descripci\xF3n 5"},{src:"6.jpg",descripcion:"Descripci\xF3n 6"},{src:"7.jpg",descripcion:"Descripci\xF3n 7"},{src:"8.jpg",descripcion:"Descripci\xF3n 8"},{src:"9.jpg",descripcion:"Descripci\xF3n 9"}]}crearFilas(){this.filas=[];for(let e=0;e<this.imagenes.length;e+=4)this.filas.push(this.imagenes.slice(e,e+4))}detalleImagen(e){console.log(e),this.selectedImage=e}closeFullScreen(){this.selectedImage=""}static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275cmp=m({type:i,selectors:[["app-video"]],standalone:!0,features:[f],decls:18,vars:1,consts:[[1,"content-container"],[1,"content"],[1,"row","row-titulo"],[1,"font-oswald"],[1,"pintar","borders-black"],[1,"container"],[1,"row"],[1,"col-md-12","gallery-item"],[1,"gallery-box","gallery-box-tall"],[1,"gallery-img"],["src","assets/portafolio/7.jpg","alt","Imagen 7",1,"img-fluid","mx-auto","d-block",3,"click"],[1,"fullscreen-overlay"],[1,"fullscreen-overlay",3,"click"],[1,"fullscreen-container"],[1,"iframe-container"],["src",P`https://www.youtube.com/embed/PUGPLQPTak8?si=6Y2C0x0x5hVeZzDZ&autoplay=1`,"title","YouTube video player","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share","referrerpolicy","strict-origin-when-cross-origin","allowfullscreen",""]],template:function(o,c){o&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),r(4," VIDEO - "),t(5,"small"),r(6,"DEAD "),t(7,"span",4),r(8,"MERMAID"),n(),r(9," TATTOO"),n()(),l(10,"hr"),n(),t(11,"div",5)(12,"div",6)(13,"div",7)(14,"div",8)(15,"div",9)(16,"img",10),a("click",function(){return c.detalleImagen("7.jpg")}),n()()()(),_(17,j,4,0,"div",11),n()()()()),o&2&&(s(17),x(17,c.selectedImage?17:-1))},styles:[".content-container[_ngcontent-%COMP%]{min-height:100vh;display:flex;flex-direction:column;justify-content:center}.content[_ngcontent-%COMP%]{color:#000;min-width:90vw;margin:0 auto;padding:20px}.row-img[_ngcontent-%COMP%]{margin-bottom:15px}.img-fluid[_ngcontent-%COMP%]{width:100%;height:30vh;object-fit:cover;opacity:.7;transition:opacity .5s ease;cursor:pointer}.img-fluid[_ngcontent-%COMP%]:hover{opacity:1;transition:opacity .5s ease}.gallery-box-tall[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{grid-row:span 2;height:calc(60vh + 15px);display:flex;align-items:center;justify-content:center}.fullscreen-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#000c;display:flex;justify-content:center;align-items:center;z-index:1000}.fullscreen-image[_ngcontent-%COMP%]{max-height:70vh;display:block}iframe[_ngcontent-%COMP%]{min-width:80vw;min-height:80vh}@media (max-width: 800px){.fullscreen-image[_ngcontent-%COMP%]{max-width:80%;display:block;margin:0 auto}.close-btn[_ngcontent-%COMP%]{display:none}.gallery-box-tall[_ngcontent-%COMP%]{grid-row:auto}.gallery-box-tall[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:200px!important}.img-fluid[_ngcontent-%COMP%]{margin-top:10px}}"]})}}return i})();var z=(()=>{class i{static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275cmp=m({type:i,selectors:[["app-portafolio"]],standalone:!0,features:[f],decls:23,vars:0,consts:[["inicio",""],["sobreMi",""],["portafolio",""],["id","inicio",1,"inicio"],[1,"landing-container"],[1,"content"],[1,"font-barlow"],[1,"font-oswald",2,"text-shadow","1px 1px 5px rgba(0, 0, 0, 0.7)"],[1,"font-oswald"],[1,"borders-white","pintar"],[1,"btn-custom","btn-1"],[1,"btn-text","font-barlow"],["id","sobre-mi"],["id","portafolio"]],template:function(o,c){o&1&&(t(0,"section",3,0)(2,"div",4),l(3,"app-preloader"),t(4,"div",5)(5,"p",6),r(6,"DEAD MERMAID TATTOO"),n(),t(7,"h1",7),r(8," ATR\xC9VETE A LLENAR TU PIEL "),l(9,"br"),n(),t(10,"h1",8)(11,"span",9),r(12,"DE COLOR "),n()(),l(13,"br"),t(14,"button",10)(15,"span",11),r(16,"QUI\xC9N SOY"),n()()()()(),t(17,"section",12,1),l(19,"app-fotos"),n(),t(20,"section",13,2),l(22,"app-video"),n())},dependencies:[E,S,M]})}}return i})();export{z as default};
