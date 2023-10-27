---
sidebar_position: 4
---

# Yol Haritası

## **Fase 1 - Fase Newton**

La tecnología blockchain exhibe la característica de aumentar los costos marginales. Por lo tanto, no es económicamente factible utilizar Layer1 para productos y servicios, ya que la blockchain se destaca en la emisión y liquidación de activos (consulte el artículo de referencia).

ArithFi se dedica a crear una nueva clase de activos en cadena. En la fase inicial del proyecto, proporcionaremos servicios de negociación utilizando servidores y utilizaremos la blockchain para la emisión y liquidación de activos. Este enfoque reduce la barrera de entrada para los usuarios iniciales, brindándoles una experiencia de usuario similar a la de los intercambios centralizados.

En la primera fase, ofrecemos principalmente servicios de futuros, y debido a las características del modelo SCP, podemos introducir eficazmente muchos Activos del Mundo Real (RWAs) a bajo costo, satisfaciendo una gama más amplia de necesidades de los usuarios y difundiendo la filosofía del proyecto a más usuarios.

## **Fase 2 - Fase Euler**

Una vez que los usuarios activos diarios superen los 1000, iniciaremos nuestro plan de Layer2. ArithFi construirá un Layer2 dedicado en Ethereum para mejorar la descentralización y la resistencia a la censura.

El Layer2 de ArithFi utilizará tecnología Layer2 que admite canales dedicados. Estos canales aseguran que las transacciones puedan confirmarse en bloques específicos, proporcionando certeza en cuanto al momento de liquidación de productos financieros en cadena. Los productos financieros en cadena existentes a menudo sufren de tiempos de liquidación inciertos, ya que las transacciones que deben confirmarse pueden retrasarse debido a la congestión o a ataques maliciosos. ArithFi tiene como objetivo abordar este problema con su solución interna de Layer2, posicionándola como una infraestructura crucial para la negociación de derivados en cadena.

## **Fase 3 - Fase Gauss**

Después de la construcción del Layer2 de ArithFi, crearemos M-Function basado en contratos inteligentes. M-Function es una combinación de biblioteca de funciones similar a la Máquina Virtual de Ethereum (EVM). Cada M-Function se configura dentro de un contrato inteligente, lo que permite a cualquiera construir varios productos financieros, como futuros, opciones y otros derivados, basados en M-Function y el flujo de información de oráculos.

M-Function hereda la esencia de Ethereum. EVM es esencialmente una combinación de código básico que se puede invocar pagando una cierta cantidad de gas. Los ingresos de cada producto en M-Function se pueden considerar como una combinación lineal de algunas funciones de ingresos básicas. Estas funciones de ingresos básicas se pueden obtener pagando un cierto costo, que es el valor descontado de este ingreso. La lógica subyacente de M-Function es la misma que la de EVM, lo que significa que todos los desarrollos de EVM se pueden implementar en M-Function.

Los productos financieros construidos en M-Function teóricamente tienen un suministro infinito, lo que satisface las necesidades de muchos usuarios de nicho y crea derivados financieros que son inexistentes o extremadamente escasos en el mercado.

Teniendo en cuenta las limitaciones de recursos de los contratos inteligentes, definiremos selectivamente algunos grupos de funciones básicas. En general, las funciones polinómicas, exponenciales, logarítmicas y la mayoría de las funciones de valor se utilizan con frecuencia en la realidad. Diseñaremos grupos de funciones básicas basados en estas funciones comúnmente utilizadas. Cada función básica corresponde a un costo estocástico, que debe pagarse al llamar a esa función. Al componer las combinaciones de funciones necesarias, se pueden generar contratos a través de interacciones simples, lo que permite la implementación continua de operaciones estocásticas para expresiones.

M-Function puede ampliar la biblioteca de funciones básicas de acuerdo con las necesidades del mundo en cadena, ampliando así el alcance de aplicación de ATF (Token ArithFi).
