public class JavaRobot {

    int paletEntrada = 4;
    int paletSalida = 0;

    // Estas dos varibales seran para saber que piezas estan mecanizadas y cuales no
    int entradaMecanizado = 0;
    int salidaMecanizado = 6;
    // Esta variable sirve para saber la cantidad de piezas que hay en el centro de mecanizado
    int generalMecanizado = 6;
        
    public static void main(String[] args) {

        ciclo();
    
    }

    public ciclo() {
        
        recogerPiezasEnEntrada();

        dejarPiezasSalida();
    
        sacarPiezasDeMecanizado();

        dejarPiezasEnMecanizado();

        // Esto es el ciclo del robot
        // El ciclo se seguira repitiendo hasta que las piezas mecanizadas sean movidas y se hayan puesto las 6 piezas

        while(salidaMecanizado != 0 && entradaMecanizado != 6){

            switch (generalMecanizado) {

                case 0:

                    // En este caso, significa que ya hemos sacado todas las piezas de mecanizado y hay que colocar nuevas

                    // Primero validamos si hay piezas en la cinta de entrada
                    
                    paletEntrada();

                    break;
                
                case 2:

                    // Validamos si las 2 piezas son mecanizadas o no

                    if(entradaMecanizado == 2){

                        paletEntrada();

                    } else {

                        paletSalida();

                    }

                    break;
    
                case 4:

                    // En este caso hay 3 posibilidades
                    // Que sean 4 sin mecanizar, 4 mecanizadas o 2 y 2

                    if(entradaMecanizado == 4){



                    } elseif (salidaMecanizado == 4){



                    } else {



                    }
    
                    break;
    
                case 6:
    
                    break;
            }

        }

    }

    public paletEntrada(){

        if(paletEntrada == 0){
                        
            // Llamar a cinta para que traiga un nuevo palet de piezas

            // Esperamos a que llegue

            recogerPiezasEnEntrada();

            dejarPiezasEnMecanizado();
        
        }

    }

    public paletSalida(){

        if(paletSalida == 4){

            // Llamar a cinta de salida para que mueva el palet y traiga uno vacio

            // Esperamos a que llegue

            sacarPiezasDeMecanizado();
        
            dejarPiezasSalida();

        }
    }

    public recogerPiezasEnEntrada(){

        // Esperamos a que se coloque el robot en posicion

        // Espero permiso

        // El robot se mueve para coger las piezas

        // Cierra la pinza1

        // El robot se mueve un poco para no colisionar

        // Gira la cabeza 180 grados

        // Se coloca el robot en posicion para coger la siguiente pieza

        // Cierra la pinza2

        // Esperamos a que el robot se mueva fuera de la cinta

        // Se le indica a la cinta que se han descargado las piezas

        paletEntrada = paletEntrada - 2; 

    }

    public dejarPiezasSalida(){

        // Esperamos que el robot se coloque en posicion

        // Esperamos permiso

        // Colocamos el robot para dejar las piezas

        // Se coloca la primera pieza

        // Se abre pinza1

        // El robot se mueve un poco para no colisionar

        // Gira la cabeza 180 grados

        // Se coloca la segunda pieza

        // Se abre pinza2

        // Esperamos a que el robot se mueva fuera de la cinta de salida

        // Indicamos a la cinta de salida que se han colocado las dos piezas

        paletSalida = paletSalida + 2;

    }

    public sacarPiezasDeMecanizado(){

        // Esperamos a que el robot se coloque en posicion

        // Esperamos permiso

        // El robot se mueve para coger la pieza

        // Cierra la pinza1

        // El robot se mueve un poco para no colisionar

        // La cabeza gira 180 grados

        // El robot se coloca para coger la siguiente pieza

        // Cierra la pinza2

        // Esperamos a que el robot se mueva fuera del centro de mecanizado

        // Se le indica al centro de mecanizado que se han descargado las piezas

        salidaMecanizado = salidaMecanizado - 2;

        generalMecanizado = generalMecanizado - 2;

    }

    public dejarPiezasEnMecanizado(){

        // Se valida si hay sitio en mecanizado para dejar las piezas
        // En este caso, si el valor de "generalMecanizado" es menor o igual a 4 prosigue
        // Si no, el ciclo esta mal planteado y se parar el ciclo por seguridad

        if (generalMecanizado <= 4) {
            
            // Esperamos a que el robot se posicione en posicion con las piezas

            // Esperamos permiso

            // El robot se mueve a posicion de colocar las piezas

            // Coloca la primera

            // Abre pinza1

            // Se mueve un poco para no colisionar

            // Gira la cabeza 180 grados

            // Se coloca para colocar la siguiente pieza

            // Coloca la pieza

            // Abre pinza2

            // Esperamos a que le robot se mueva del centro de mecanizado

            // Se le indica al centro de mecanizado de que se han colocado las piezas

            entradaMecanizado = entradaMecanizado + 2;

            generalMecanizado = generalMecanizado + 2;

        } else {
            STOP;
            // Error en la secuencia
            // Revisar estado del ciclo
        }

    }
    

}