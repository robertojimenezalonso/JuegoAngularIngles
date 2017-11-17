
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

    

   
    }


    private seteoImgGanador():void{
       
   
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