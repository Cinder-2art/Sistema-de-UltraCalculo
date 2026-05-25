# Sistema de Ultracalculo

Este proyecto consiste en una réplica interactiva basada en la interfaz del sistema operativo emulado **SmileOS 2.0** perteneciente al universo del videojuego *ULTRAKILL*. Desarrollado como entregable práctico para la asignatura de **Programación Web**,inspirado por completo en el ficticio sistema operativo; el sistema unifica un entorno modular donde se ejecutan subprogramas y algoritmos lógicos complejos manteniendo la reproducción de audio en tiempo real y persistente a través de la navegación.

---

## Datos de Control Académico
* **Asignatura:** Programación Web
* **Gestión:** 2026
* **Estudiante:** Nehemias Marcelo Mollinedo Villazante
* **Docente:** Brigida Carvajal

---

## 🗂️ Arquitectura y Estructura de Directorios
El proyecto implementa un orden jerárquico limpio segregando los módulos de procesamiento lógico en un directorio aislado (`ejercicios/`) para estandarizar el consumo de la hoja de estilos unificada:

```text
index.html               # Núcleo de la interfaz, control de música y viewport dinámico
css/
└── style.css            # Hoja de estilos globales (Layout emulado, tipografía, efectos )
ejercicios/
├── fibo.html            # Módulo 1: Cronograma de Ahorro Progresivo
├── primos.html          # Módulo 2: Encriptador de Credenciales (Cifrado ASCII)
├── combinado.html       # Módulo 3: Consola de Compresión de Paquetes de Red
└── creditos.html        # Módulo 4: Panel de Documentación Académica y Enlaces
font/
│   └── Bittypix Monospace.otf # Tipografía pixelada oficial del sistema operativo emulado
img/
│   └── HELLITSELF1 (2).png  # Logotipo original texturizado del software
│   └── SmileOS2.0  # Logotipo del software ficticio
sonido/
    └── Take Care (ULTRAKILL_ INFINITE HYPERDEATH.mp3 # Banda sonora en bucle de fondo
```
---

Especificaciones Técnicas y Módulos Desarrollados
1. Núcleo de Interfaz (index.html)
Actúa como la Workspace central del sistema. Implementa un reproductor global de audio con la API nativa de HTML5 <audio> controlado mediante interacción del usuario. Utiliza una arquitectura basada en <iframe> dinámico (target="os_viewport") que permite cargar y destruir los subprogramas adyacentes sin refrescar el DOM principal, asegurando una experiencia Single Page Application (SPA) pura sin cortes en el hilo musical.

2. Módulo de Ahorro Progresivo (ejercicios/fibo.html)
Algoritmo iterativo que proyecta el comportamiento de fondos netos mediante la Sucesión de Fibonacci en base al rango de meses parametrizados por el usuario. El renderizado visual calcula el ancho dinámico en porcentajes CSS fluidos reflejando barras de progreso proporcionales de manera orgánica sin librerías externas.

3. Encriptador de Credenciales de Seguridad (ejercicios/primos.html)
Módulo criptográfico asimétrico que ejecuta una función de validación de divisores numéricos en tiempo de ejecución para determinar si la entrada es un Número Primo. De verificarse la integridad del token, se genera una llave de traducción matemática que itera carácter por carácter sobre el string seguro del sistema (SMILE_CORE_ACCESS_GRANTED), alterando el valor binario posicional en la tabla ASCII para emitir una credencial codificada.

4. Consola de Compresión y Red (ejercicios/combinado.html)
Simulador lógico que modula paquetes de transmisión de datos asignando anchos de banda o peso (KB) regidos por Fibonacci. El script evalúa simultáneamente si el peso asignado de la etapa cumple con los requisitos lógicos de un número primo. Al ser verdadero, inyecta dinámicamente clases modificadoras en el CSS para renderizar un blindaje visual verde neón sobre los nodos de prioridad del sistema.

5. Documentación de Entregables (ejercicios/creditos.html)
Panel de distribución modularizado que divide de manera segmentada la información académica formal y despliega accesos independientes integrando transiciones y hovers interactivos estilo retro-gaming para interactuar con el ecosistema del proyecto.

Despliegue y Enlaces de Acceso
A través de los siguientes accesos directos se puede auditar tanto el código fuente estructurado como el comportamiento del software en producción:

Tecnologías Empleadas.
HTML5 Estructural: Semántica nativa, uso de contenedores jerárquicos e inyección asíncrona mediante iframes y enlaces segmentados.

CSS3 Vanilla: Variables en el :root, diseño responsivo basado en CSS Grid y Flexbox, importación local de fuentes tipográficas binarias .otf, renderizado nítido de imágenes pixeladas (image-rendering: pixelated) y animaciones neón de estado.

JavaScript ES6+ (Vanilla JS): Manipulación dinámica del DOM, captura de eventos de sumisión con prevención por defecto, algoritmos matemáticos modulares limpios procesados sin la utilización de arrays de almacenamiento secundario.
