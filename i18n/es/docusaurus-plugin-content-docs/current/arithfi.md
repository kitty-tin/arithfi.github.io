---
sidebar_position: 1
---

# ArithFi

ArithFi es un exchange descentralizado de derivados que elimina a los creadores de mercado y a los LPs.

ArithFi se basa en el modelo SCP (Contraparte de contratos inteligentes) para todos los participantes.

El desarrollo de ArithFi se dividirá en tres fases (Hoja de ruta), y actualmente nos encontramos en la fase 1.

## Modelo SCP

ArithFi utiliza el modelo SCP (Contrato inteligente como contraparte), donde el contrato inteligente sirve como contraparte para todos los participantes en futuros, opciones y otras transacciones de derivados. Este enfoque garantiza la descentralización y la liquidez potencialmente infinita en la negociación de derivados, gracias a los mecanismos de emisión y quema de tokens de blockchain. En este proceso, todos los titulares de tokens $ATF asumen colectivamente tanto los riesgos como las recompensas. En contraste, los mercados financieros tradicionales dependen de los creadores de mercado para emparejar y ejecutar transacciones de derivados, con los creadores de mercado mitigando riesgos en el mercado secundario.

### Modelo SCP para Operaciones de Futuros

1. Los usuarios utilizan $ATF como garantía. Por ejemplo, si un usuario abre una posición larga de 10x BTC/USDT con una garantía de 1000 $ATF, el usuario debe enviar 1000 $ATF al contrato inteligente (considerado como quemado).
2. Precio suministrado por el oráculo:
Si el precio de BTC/USDT sube un 1%, el usuario obtiene una ganancia del 10%. Cuando el usuario cierre la posición, el contrato inteligente emitirá 1100 $ATF al usuario como liquidación.
Si el precio de BTC/USDT baja un 1%, el usuario sufre una pérdida del 10%. Cuando el usuario cierre la posición, el contrato inteligente emitirá 900 $ATF al usuario como liquidación.
    
![SCP Model for Futures Trading](https://nftstorage.link/ipfs/bafkreic5bpb45f44yc4gecebf6kz5ojkzmq2onkmybovfzwjaiauhxprna)

### **Modelo SCP para Operaciones de Opciones (Aún no lanzado)**

1. Los usuarios pueden utilizar $ATF para comprar opciones. Por ejemplo, si un usuario compra una Opción de Compra de BTC/USDT con un precio de ejercicio de 30,000 y una fecha de vencimiento el 31 de diciembre de 2024, con un precio de 2,000 $ATF, el usuario debe enviar 2,000 $ATF al contrato inteligente (considerado como quemado) como costo de compra de la opción.
2. Antes del vencimiento de la opción, si el valor de la opción calculado a través del modelo SCP en ese momento es de 3,000 $ATF, el usuario puede vender la "Opción de Compra de BTC/USDT con un precio de ejercicio de 30,000 y una fecha de vencimiento el 31 de diciembre de 2024" al contrato inteligente. El contrato inteligente emitirá 3,000 $ATF al usuario como liquidación.
3. En el vencimiento de la opción, si el precio de BTC/USDT es de 35,000 en ese momento, el valor de la opción para el usuario es de 5,000 $ATF. El usuario debe ejercer la opción, y el contrato inteligente emitirá 5,000 $ATF al usuario como liquidación. Si el precio de BTC/USDT es de 25,000 en el vencimiento de la opción, entonces el valor de la opción para el usuario es de 0 $ATF.

   
![Modelo SCP para Operaciones de Opciones](https://nftstorage.link/ipfs/bafkreiel3cxml5gonft5xkegnvq7e6nfu7resbepgbvb5wuxnakaqsnbn4)



### Características del Modelo SCP

El modelo SCP elimina los pasos de emparejamiento y aparejamiento en las transacciones de derivados financieros. Además, todos los activos basados en el modelo SCP teóricamente poseen liquidez infinita. En este modelo, la negociación de derivados financieros ya no depende de creadores de mercado o proveedores de liquidez (LPs). Es un modelo de equilibrio no de cobertura en el que todos los titulares de tokens comparten colectivamente los riesgos y las recompensas.
