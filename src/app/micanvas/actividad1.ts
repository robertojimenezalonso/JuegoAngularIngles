
import {Panel} from '../milib/views/panels/panel';
import {EventsAdmin,EventsAdminListener} from '../milib/events/eventsadmin';
import {DataHolder} from '../milib/dataholder/dataholder';
import {Motor} from '../milib/engines/motor';
import {Imagen} from '../milib/views/imgs/imagen';
import {Button} from '../milib/views/buttons/button';
import {Window} from '../milib/views/windows/window';
import {Label} from '../milib/views/labels/label';

export class Actividad1 implements EventsAdminListener{

    private motor:Motor;
    private panelMenu:Imagen;
    private panelJuego:Panel;
    private imagenFondo:Imagen;
    private botonInicio:Button;
    private botonCargar:Button;
    private botonSalir:Button;
    private window1:Window;
    private respuesta1:Button;
    private respuesta2:Button;
    private respuesta3:Button;
    private respuesta4:Button;
    private lblPregunta:Label;
    private indicePreguntaSiguiente:number=0;
    private imgGanador:Imagen;
    private imgVidas:Imagen;
    private vidasJuego:number=3;
    private lblNumVidas:Label;
    private indicePreguntaAnterior:number=0;
    private preg = ["What is round and the people put it in their heads?", "What type of shoes wear the people when it rain to much in their", "What is round and the people put it in their heads?", "What is round and the people put it in their heads?"];
    private resp = [["Hats", "Socks", "Pants", "T-shirt"],["Blue shoes", "Boots", "Nothing", "Flip flops"],["Hats", "Socks", "Pants", "T-shirt"],["Hats", "Socks", "Pants", "T-shirt"]];
    private respCorrecta = ["Hats", "Boots", "Hats", "Hats"];
    

    constructor(vMotor:Motor){
        this.motor=vMotor;
        this.imagenFondo=new Imagen(this.motor,0,0,DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
        this.imagenFondo.setImg('./assets/backmain.jpg');
        this.motor.setRaiz(this.imagenFondo);
        this.crearEscenarioMenu();
        this.crearEscenarioJuego();
        EventsAdmin.instance.addListener(this);

        
        
    }


    /**
     * OJO!! AUNQUE EN ESTE EJEMPLO SE USE EL PANEL, ES OBLIGATORIO CREAR UN OBJETO WINDOW EN EL MILIB, Y AGREGARLE EL BOTON
     * DE SALIR EN LA ESQUINA COMO SALE EN EL LA PAGINA WEB. HABRA QUE QUITAR EL PANEL Y USAR WINDOW
     */
    private crearEscenarioMenu():void{
        let pmw=DataHolder.instance.nScreenWidth*0.3;
        let pmh=DataHolder.instance.nScreenHeight*0.45;
        let pmx=DataHolder.instance.nScreenWidth2-(pmw>>1);
        let pmy=DataHolder.instance.nScreenHeight2-(pmh>>1);
       
        this.panelMenu=new Imagen(this.motor,pmx,pmy,pmw,pmh);
        this.panelMenu.setImg('./assets/transparente.png');
        this.motor.addViewToParentView(this.imagenFondo,this.panelMenu);
        
        this.botonInicio = new Button(this.motor,this.panelMenu.w-this.panelMenu.w/1.34,this.panelMenu.h-this.panelMenu.h/1.3,this.panelMenu.w/2,this.panelMenu.h/8);
        this.botonInicio.setImagePath('./assets/btn.png');
        this.botonInicio.setTexto("New game");
        this.motor.addViewToParentView(this.panelMenu,this.botonInicio);
        this.botonInicio.setListener(this);
        
        this.botonCargar = new Button(this.motor,this.panelMenu.w-this.panelMenu.w/1.34,this.panelMenu.h-this.panelMenu.h/1.78,this.panelMenu.w/2,this.panelMenu.h/8);
        this.botonCargar.setImagePath('./assets/btn.png');
        this.botonCargar.setTexto("Charge");
        this.motor.addViewToParentView(this.panelMenu,this.botonCargar);
        this.botonCargar.setListener(this);
        
        this.botonSalir = new Button(this.motor,this.panelMenu.w-this.panelMenu.w/1.34,this.panelMenu.h-this.panelMenu.h/2.7,this.panelMenu.w/2,this.panelMenu.h/8);
        this.botonSalir.setImagePath('./assets/btn.png');
        this.botonSalir.setTexto("Out");
        this.motor.addViewToParentView(this.panelMenu,this.botonSalir);
        this.botonSalir.setListener(this);
    
    }

    private crearEscenarioJuego():void{

        let pmw=DataHolder.instance.nScreenWidth*0.3;
        let pmh=DataHolder.instance.nScreenHeight*0.45;
        let pmx=DataHolder.instance.nScreenWidth2-(pmw>>1);
        let pmy=DataHolder.instance.nScreenHeight2-(pmh>>1);
        this.window1=new Window(this.motor,0,0,DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
        this.motor.addViewToParentView(this.imagenFondo,this.window1);

        this.lblPregunta = new Label(this.motor,this.window1.w-this.window1.w/1.58,this.window1.h-this.window1.h/1.2,this.window1.w/5,this.window1.h/18);
        this.lblPregunta.setTexto("Pregunta");
        this.motor.addViewToParentView(this.window1,this.lblPregunta);
        this.lblPregunta.setFontColor('white');
   


        this.respuesta1 = new Button(this.motor,this.window1.w-this.window1.w/1.43,this.window1.h-this.window1.h/1.5,this.window1.w/7,this.window1.h/18);
        this.respuesta1.setImagePath('./assets/btn.png');
        this.respuesta1.setTexto(null);
        this.respuesta1.blVisible=true;
        this.motor.addViewToParentView(this.window1,this.respuesta1);
        this.respuesta1.setListener(this);
       
        this.respuesta2 = new Button(this.motor,this.window1.w-this.window1.w/1.93,this.window1.h-this.window1.h/1.5,this.window1.w/7,this.window1.h/18);
        this.respuesta2.setImagePath('./assets/btn.png');
        this.respuesta2.setTexto(null);
        this.respuesta2.blVisible=true;
        this.motor.addViewToParentView(this.window1,this.respuesta2);
        this.respuesta2.setListener(this);
        
        this.respuesta3 = new Button(this.motor,this.window1.w-this.window1.w/1.13,this.window1.h-this.window1.h/1.5,this.window1.w/7,this.window1.h/18);
        this.respuesta3.setImagePath('./assets/btn.png');
        this.respuesta3.setTexto(null);
        this.respuesta3.blVisible=true;
        this.motor.addViewToParentView(this.window1,this.respuesta3);
        this.respuesta3.setListener(this);
        

        this.respuesta4 = new Button(this.motor,this.window1.w-this.window1.w/2.93,this.window1.h-this.window1.h/1.5,this.window1.w/7,this.window1.h/18);
        this.respuesta4.setImagePath('./assets/btn.png');
        this.respuesta4.setTexto(null);
        this.respuesta4.blVisible=true;
        this.motor.addViewToParentView(this.window1,this.respuesta4);
        this.respuesta4.setListener(this);
       
        this.imgGanador = new Imagen(this.motor,pmx,pmy,pmw,pmh);
        this.imgGanador.setImg('./assets/enhorabuena.png');
        this.motor.addViewToParentView(this.window1,this.imgGanador);


        this.imgVidas = new Imagen(this.motor,pmx,pmy,pmw,pmh);
        this.imgVidas.setImg('./assets/vidas.jpg');
        this.motor.addViewToParentView(this.window1,this.imgVidas);
        this.lblNumVidas = new Label(this.motor, this.imgVidas.w-this.imgVidas.w/1.5,this.imgVidas.y,this.imgVidas.w/2,this.imgVidas.h/16);
        this.motor.addViewToParentView(this.imgVidas,this.lblNumVidas);
        
        this.window1.btnWindow.setListener(this);
        
        

   
    }


    private seteoImgGanador():void{
       
        var aux=this;
        
        this.motor.setViewVisibility(this.imgGanador.uid,true);
        this.bPreguntas(false);
        
        setTimeout(function() {
            aux.motor.setViewVisibility(aux.window1.uid,false);
            aux.motor.setViewVisibility(aux.panelMenu.uid,true);
            aux.indicePreguntaSiguiente=0;
            console.log("indice" + aux.indicePreguntaSiguiente);
          }, 3000);
          
        
    }


    private seteoImgPerdedor(numVidas:number):void{
        var aux=this;
     
       
        
    }


    private bPreguntas(blVisible:boolean):void{
   

    }

    private seteoTexto(num:number):void{
      
    
            
    }

    private continuarJuego(indicePreguntaAnterior:number){
        this.seteoTexto(indicePreguntaAnterior);
    } 


   


    buttonListenerOnClick?(btn:Button):void{
        if(btn==this.window1.btnWindow){
            this.motor.setViewVisibility(this.window1.uid,false);
            this.motor.setViewVisibility(this.panelMenu.uid,true);
        }


    
    }


    if(btn==this.botonCargar){
 
        
        }



      
    screenSizeChanged?(vWidth:number,vHeight:number):void{


        console.log("SE HA ACTUALIZADO EL TEMAÑO DE LA PANTALLA");

     
        

      
      }

    }