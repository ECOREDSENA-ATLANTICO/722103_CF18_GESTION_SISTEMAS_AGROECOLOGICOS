<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Monitoreo de las poblaciones asociadas al cultivo
    
    p.mb-5 El monitoreo, permite instaurar cuando aparecen los problemas fitosanitarios y cómo evolucionan, convirtiéndose en una herramienta importante para el establecimiento de estrategias de manejo del cultivo, de tal modo que se repercuta poco en la calidad y rendimiento de este, además de generar un menor impacto al ambiente
    
    .row.bgr.mb-5(data-aos="zoom-in")
      .col-lg-3.m-lg-5
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/1.svg' alt='Imagen de apoyo')
          .tarjeta.cfc_1
            .p-4
              p.m-0 Un adecuado monitoreo conlleva al verdadero estado del cultivo a nivel de infección y/o infestación, estableciendo la densidad y distribución del patógeno; de ahí la importancia de indicar unas actividades de control para el manejo de plagas y enfermedades que permita vigilar la evolución y evitar repercusiones considerables en el cultivo.

    .row 
      .col-lg-3
        .cfc_border.pp.mb-5
          p.mb-0 Otro factor importante para presentar, es el umbral de plaga, el cual indica el período oportuno para implementar una acción preventiva, por lo que se constituye la densidad a la que se deben implementar las medidas de control, disminuyendo y hasta evitando el daño económico. Por lo cual la densidad de población de una plaga o enfermedad que cause disminución considerable del valor del cultivo, se conoce como daño económico.
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 1.
          span Estructura de monitoreo

        .tarjeta.figure.mb-5(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema1/3.svg', alt='La imagen muestra la estructura del monitoreo, dependiendo de su tiempo, ciclo de cultivo, periodicidad, y ciclo biológico.')
    
    .row.mb-3 
      .col-auto 
        img(src='@/assets/curso/temas/tema1/8.svg', alt='Imagen de apoyo')
      .col.align-content-end.mb-3
        h3.mb-0 Identificación de las poblaciones 

    p Para reconocer las poblaciones se hace necesario identificar las propiedas del suelo, una de ellas es el sustrato donde las plantas se desarrollan y representan el sistema radicular para absorber los minerales a través del agua (sabia bruta), además de brindar soporte a la planta, de esta manera podría ser un sustrato inorgánico, en él se desarrollan procesos biológicos, los cuales modifican sus características físico - químicas. 

    p Los organismos presentes en el suelo, son de gran importancia sobre todo en las áreas destinadas a la producción agrícola, ya que en algunos casos pueden tener influencia positiva o negativa para el cultivo. Cuando se habla de influencia positiva se puede asociar a organismos que contribuyen a mejorar las condiciones físicas y químicas del suelo, además de servir como control biológico frente a organismo nocivos para la planta. 


    p En cambio, frente a la influencia negativa, las plantas se pueden ver gravemente afectadas por organismos como:

    .row.mb-5
      .col-lg-4.mb-3(data-aos="fade-down")
        img(src='@/assets/curso/temas/tema1/4.jpg', alt='La imagen muestra la influencia negativa de los insectos en las plantas.')
        p.mb-0.cfc_2_bri.p-4 <b>Insectos</b> 
      .col-lg-4.mb-3(data-aos="fade-up")
        img(src='@/assets/curso/temas/tema1/5.jpg', alt='La imagen muestra la influencia negativa de los hongos, bacteria en las plantas.')
        p.mb-0.cfc_2_bri.p-4 <b>Fitopatógenos</b> (hongos, bacterias y nematodos) 
      .col-lg-4.mb-3(data-aos="fade-down")
        img(src='@/assets/curso/temas/tema1/6.jpg', alt='La imagen muestra la influencia negativa en la producción agrícola de los arvenses en las plantas.')
        p.mb-0.cfc_2_bri.p-4 <b>Arvenses</b> (plantas no deseadas). 
    
    .row.justify-content-center
      .col-lg-8
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/7.svg' alt='Imagen de apoyo')
          .tarjeta.bgr_1.align-content-center
            .p-2
              p.mb-0 Por lo cual es importante realizar monitoreos a través de muestreos, que permitan definir la presencia de estos organismos con el fin de establecer las medidas correctivas pertinentes.
    
    h4.bgr_2.p-3 Agentes patógenos

    .row.mb-5
      .col-lg-8.mb-3
        p Son los encargados de trasmitir las enfermedades a las plantas, dentro de ellos encontramos los hongos, bacterias, virus, nematodos, entre otros; los cuales son trasmitidos a través de vectores o insectos. Cuando el vector traspasa la superficie de la planta y accede a la savia, es ahí donde realiza la trasmisión del patógeno y en otras circunstancias el insecto segrega sustancias al interior de la planta, creando el ambiente propicio para el desarrollo del patógeno. Conozcan lo que representan: 
      .col-lg-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema1/9.svg' alt='Imagen de apoyo')
    
    .tarjeta.bgr_3.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-5.mb-4.mb-md-0
            h4 Hongos
            p Son organismo que requieren de  un huésped vivo para subsistir, como es el caso de la planta. Su estructura física consiste en la formación de una macha en la superficie de la planta u hojas, siendo fácilmente identificables. Existen diversos colores (blancos, negros y amarillos)  y se reproducen por esporas, lo cual lo hace fácilmente trasmisible de una planta a otra, por medio del viento.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema1/10.png', alt='Imagen de apoyo')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-5.mb-4.mb-md-0
            h4 Bacterias
            p Microorganismos unicelulares, los cuales se introducen en las plantas a través de laceraciones o aberturas en la superficie (ocasionadas por insectos al succionar savia). Requieren de un organismo huésped para sostenerse, cuando se activan ocasionan putrefacción en ciertas partes de la planta.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema1/11.png', alt='Imagen de apoyo')
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-4.mb-4.mb-md-0
            h4 Virus
            p Tienen un tamaño reducido y son trasmitidos por insectos y requieren de un huésped para subsistir, generando graves daños en el cultivo.
          .col-md-8
            figure
              img(src='@/assets/curso/temas/tema1/13.png', alt='Imagen de apoyo')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-5.mb-4.mb-md-0
            h4 Nematodos
            p Tienen  gran tamaño, son parecidos a gusanos microscópicos y se ubican en la raíces. Los daños adversos que ocasionan están relacionadas con la desnutrición, crecimiento, desarrollo y productividad, ya que estos patógenos impiden que la planta adquiera los nutrientes y proteínas del suelo, mediante las raíces.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema1/12.png', alt='Imagen de apoyo')

    h4.bgr_2.p-3.mb-5 Insectos beneficios

    .row.mb-5
      .col-lg-6.mb-3.order-2.order-lg-1
        p La presencia de los insectos en los cultivos es algo normal, pues es su entorno natural. En este caso, dichos organismos favorecen las condiciones de desarrollo y crecimiento de las plantas, pues son considerados depredadores de organismos patógenos. 

        p Utilizar insectos beneficios para el control de plagas, resulta muy útil, ya que además de generar ayuda económica (ahorro de plaguicidas e insecticidas), contribuye al cuidado del entorno y salud. Entre ellos se encuentran:
      .col-lg-6.mb-3.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema1/14.png', alt='Imagen de apoyo')
    
    .row.mb-5.justify-content-center
      .col-sm-6.col-xl-2.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/15.jpg')})`}")
            .tarjeta-flip__contenido.p-5.p-xl-4.align-content-center
              h4 Mariquitas
              p.mb-0 Pequeños insectos de color llamativo (rojo, amarillo y naranja), presentan puntos negros en sus alas. Son depredadores de naturales de algunos insectos (pulgones, ácaros, pulgas), actuando de esta manera como control biológico de plagas.
      .col-sm-6.col-xl-2.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/16.jpg')})`}")
            .tarjeta-flip__contenido.p-5.p-xl-4.align-content-center
              h4 Abejas
              p.mb-0 Encargadas de realizar proceso de polinización, a través del traslado del polen desde los estambres (órganos floral masculino) hasta los estigmas (órgano receptivo), haciendo posible la producción de frutos y semillas.
      .col-sm-6.col-xl-2.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/17.jpg')})`}")
            .tarjeta-flip__contenido.p-5.p-xl-4.align-content-center
              h4 Avispas
              p.mb-0 Son insectos utilizados para ejercer control sobre algunas plagas, debido a que consumen larvas de agentes patógenos.
      .col-sm-6.col-xl-2.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/18.jpg')})`}")
            .tarjeta-flip__contenido.p-5.p-xl-4.align-content-center
              h4 Mantis religiosa 
              p.mb-0 Es un depredador de plagas, que no discriminan entre insecto beneficios y agentes patógenos. Por ende debe ser monitoreada.
      .col-sm-6.col-xl-2.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/19.jpg')})`}")
            .tarjeta-flip__contenido.p-5.p-xl-4.align-content-center
              h4 Hormigas 
              p.mb-0 Importante depredador de insectos dañinos, tales como saltamontes y gusanos que atacan las hojas de la planta. 

    h4.bgr_2.p-3 Las plagas

    .row.mb-5
      .col-lg-4.mb-3
        p Cuando se habla de plaga en el cultivo se hace referencia a todo ser vivo que afecta la salud e integridad física de la planta, por lo cual una plaga no solo hace mención a los insectos patógenos, sino también a los roedores, aves, conejos, entre otros seres vivos, que se acercan al cultivo para alimentarse de sus frutos u otras partes de la planta. Esto puede generar grandes impactos sobre la productividad y sobre el rendimiento económico.
      .col-lg-8
        .row.bg_grad-01.p-4
          .col-lg-5.align-content-center
            p El termino plaga varia dependiendo del contexto de cada cultivo, condiciones climáticas y ubicación geográfica, pues una misma especie puede ser considera plaga en algún lugar pero en otro no.
          .col-lg-7
            figure
              img(src='@/assets/curso/temas/tema1/20.svg', alt='Imagen de apoyo') 
      
    .row.justify-content-center
      .col-lg-8
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/21.svg' alt='Imagen de apoyo')
          .tarjeta.bgr_1.align-content-center
            .p-2
              p.mb-0 Teniendo en cuenta lo anterior, a continuación, se mencionan algunas especies y otros animales que son considerados plagas en cultivos tradicionales, debido a la generación de enfermedades al ingerir la savia o por ingerir sus hojas y frutos:
    
    ImagenInfografica.color-primario.mb-5(data-aos="zoom-in")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema1/22.png', alt='Imagen de apoyo')

      .tarjeta.bgr_4.bg_no_01.p-4(x="13%" y="35%" numero="1")
        p.mb-0 <b>Orugas de mariposa,</b> atacan las plantas desde la parte exterior, debido a que las polillas suelen poner huevos en la superficie de la planta, y cuando la larva nace comienza a alimentarse de la superficie de la planta, posteriormente cuando se desarrolló empieza a ingerir las hojas.
      .tarjeta.bgr_4.bg_no_02.p-4(x="20%" y="70%" numero="2")
        p.mb-0 <b>Pulgones,</b> presentan color característicos verde, amarillo o negro, estos se alimentan de las partes internas de la planta, la temporada de sequía o los fertilizantes utilizados en el cultivo pueden proliferar su existencia.
      .tarjeta.bgr_4.bg_no_03.p-4(x="43%" y="45%" numero="3")
        p.mb-0 <b>Arañuela,</b> aparecen en el cultivo en grandes cantidades, se caracteriza por tejer una telaraña entre las hojas de la planta y succionar la savia, causando en algunas la muerte o trasmisión de enfermedades.
      .tarjeta.bgr_4.bg_no_04.p-4(x="70%" y="20%" numero="4")
        p.mb-0 <b>Mosca blanca,</b> succionan la savia enterrando el pico en la planta, suelen propagarse en ambientes húmedos, y son trasmisores de enfermedades como hongos que deterioran la apariencia de la planta y disminuyen su actividad fotosintética.
      .tarjeta.bgr_4.bg_no_05.p-4(x="80%" y="52%" numero="5")
        p.mb-0 <b>Escarabajos,</b> existe gran variedad de ellos, los cuales se alimentan de la savia, hojas y tallos de la planta.
    
    .row.mb-5
      .col-lg-5.align-content-end.order-2.order-lg-1(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/28.png', alt='Imagen de apoyo')
      .col-lg-7.order-1.order-lg-2.mb-3
        h4.bgr_2.p-3 Influencia de las arvenses en el desarrollo de los cultivos
        p.mb-0 Las arvenses son especies vegetales que llegan a invadir cultivos, por ende son consideradas malezas. Sin embargo, se debe monitorear los aspectos biológicos y ecológicos con el fin de ser consideradas como una problemática en el desarrollo de la producción, ambos aspectos logran diferencias por:

    .titulo-sexto.color-acento-contenido.mb-5
      h5 Figura 2.
      span Aspectos ecológicos y aspectos biológicos
    
    figure.mb-3
      img(src='@/assets/curso/temas/tema1/29.png', alt='La imagen muestra los aspectos ecológicos y aspectos biológicos de las  especies arvenses')

    div.p-4.bgr_5
      p.mb-0 Las especies arvenses compiten fuertemente con el cultivo por agua, luz, espacio y nutrientes, además de ser hospederas de plagas y enfermedades, presentando impacto negativo sobre el proceso productivo, lo que hace indispensable conocer la diversidad y su densidad poblacional dentro del sistema agrícola.

    separador 

    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1  Manejo de Plagas y Enfermedades (MIP)

    .row.mb-5
      .col-lg-6.mb-3
        p El Manejo Integrado de Plagas (MIP) es una estrategia que permite mantener el cultivo, de tal manera que el daño por enfermedades y plagas, se mantenga en niveles económicamente aceptable, además de reducir el riesgo a la salud y el beneficio del ambiente.
        p El MIP involucra varias medidas de control de enfermedades y plagas; sin embargo, la primera medida a implementar es la verificación de la sanidad del cultivo, pues es la que permite prevenir las enfermedades y plagas, por lo cual involucra preparación del cultivo, abonamiento, riego y drenaje, entre otros.
      .col-lg-6.align-content-center(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema1/30.png', alt='Imagen de apoyo')
        
    .row.mb-5 
      .col-auto 
        img(src='@/assets/curso/temas/tema1/8.svg', alt='Imagen de apoyo')
      .col.align-content-end.mb-3
        h3.mb-0 Monitoreo y control de plagas 
    
    figure
      img(src='@/assets/curso/temas/tema1/31.jpg', alt='La imagen muestra el monitoreo y control de plagas.')
    div.justify-content-center.d-flex.mb-5
      p.bgr_6.p-4 Existen muchos métodos para monitorear y controlar las plagas, entre los cuales encontramos:

    .row.mb-5
      .col-lg-5.mb-3
        h4.bgr_2.p-3 a.	Control químico  
        p El control químico es una medida de control, basada en el uso de productos químicos, teniendo en cuenta que estos generan efectos rápidos sobre el control y eliminación de las plagas y enfermedades. No obstante el uso de productos químicos puede generar efectos adversos sobre la salud de trabajadores y consumidores, además de impactos negativos sobre el ambiente.

        p En el caso del MIP, se busca disminuir la utilización de productos químicos; no obstante, al momento de implementar las medidas de control químico se deben utilizar aquellos que tengan menos toxicidad y más efectividad. Además, contar con todas las medidas de cuidado a la hora de implementación, tales como:
      .col-lg-7.bgr_7.tarjeta.p-5
        ul.lista-ul--color
          li 
            i.fas.fa-check.bgr_8
            | Normatividad de regulación y uso.
          li
            i.fas.fa-check.bgr_8
            | Instrucciones de uso.
          li
            i.fas.fa-check.bgr_8
            | Elementos de protección personal (guantes, mascarillas, gafas) tanto para la preparación como para la implementación (fumigación).
          li
            i.fas.fa-check.bgr_8
            | Fumigar a favor y no en contra del viento.
          li
            i.fas.fa-check.bgr_8
            | Lugar adecuado de almacenamiento de los productos químicos.
          li
            i.fas.fa-check.bgr_8
            | Higiene y asepsia después de la fumigación (lavarse manos y zonas expuestas).
          li
            i.fas.fa-check.bgr_8
            | Acudir al médico inmediatamente, si presenta síntomas de intoxicación.
      
    .row.mb-5
      .col-lg-5.mb-3(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/32.png', alt='Imagen de apoyo')
      .col-lg-7
        h4.bgr_2.p-3 b.	Control mecánico y eliminación manual 
        p Medida de control de plagas y enfermedades de fácil e inmediata efectividad, la cual es muy utilizada en la primera etapa de infestación, debido a que se percibe por observación y así mismo se puede eliminar. Una vez realizado el proceso de eliminación se debe realizar la disposición adecuada, ya sea por incineración o entierro, claro está fuera del cultivo.

        p De esta manera, en la siguiente secuencia se comparte de manera gráfica el proceso de eliminación manual de la parte infestada por plaga en el cultivo, donde se logra observar su paso a paso integrando el adecuado manejo de las plagas:

    .titulo-sexto.color-acento-contenido.mb-5
      h5 Figura 3.
      span Control mecánico y eliminación manual
    
    figure.mb-5
      img.mb-3(src='@/assets/curso/temas/tema1/33.png', alt='La imagen muestra el control mecánico y eliminación manual: Eliminar a mano la parte dañada por enfermedad. Eliminar a mano la parte infestada por pulgones. Eliminar a mano la oruga sobre la planta.')
      figcaption Nota. Guía de Manejo Integrado de Plagas (MIP) para técnicos y productores.

    .row.mb-5
      .col-lg-6.mb-3
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/34.svg' alt='Imagen de apoyo')
          .tarjeta.bgr_1.align-content-center
            .p-2
              p.mb-0 De igual manera, se describen los siguientes elementos: la temperatura, el agua, la barrera y la trampa:
        AcordionA(tipo="a" clase-tarjeta="tarjeta bgr_7")
          .row(titulo="Temperatura")
            .col-md-6.mb-4.mb-md-0.align-content-center
              p.mb-0 La temperatura tiene varios efectos sobre la vida de los organismos, por eso se debe tener en cuenta la época de establecimiento del cultivo, con el fin de evitar la temperatura optima de las enfermedades.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/36.png', alt='Imagen de apoyo')
          .row(titulo="Agua")
            .col-md-6.mb-4.mb-md-0.align-content-center
              p.mb-0 Este recurso hídrico es fundamental para el desarrollo del cultivo, por lo cual la cantidad inadecuada de agua puede generar debilidad del cultivo y aumentar la susceptibilidad a las enfermedades y en sentido contrario el exceso de agua puede generar daño en la raíz. Por ende, es importante diseñar un sistema adecuado de riego y drenaje dentro del cultivo, estableciendo las condiciones óptimas.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/37.png', alt='Imagen de apoyo')
          .row(titulo="Barrera")
            .col-md-6.mb-4.mb-md-0.align-content-center
              p.mb-0 Se pueden diseñar distintos tipos de barreras (madera, malla, plástico y vivas), con el fin de controlar las enfermedades y plagas, impidiendo así su dispersión.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/38.png', alt='Imagen de apoyo')
          .row(titulo="Trampa")
            .col-md-6.mb-4.mb-md-0.align-content-center
              p.mb-0 Existen diferentes tipos de trampas, las cuales son implementadas para monitorear la aparición de insectos plagas y en algunos casos medida de control ya que pueden atrapar insectos plagas y evitar la trasmisión de enfermedades.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/39.png', alt='Imagen de apoyo')        
      .col-lg-6.align-content-center
        figure.mb-5
          img.mb-3(src='@/assets/curso/temas/tema1/35.png', alt='Imagen de apoyo')

    .row.mb-5
      .col-lg-6.mb-3
        h4.bgr_2.p-3 c.	Control biológico
        p La vegetación natural se compone de una gran variedad de organismos, por lo cual la propagación de cierta especie, se puede controlar automáticamente implementado medidas que equilibren el ecosistema, teniendo en cuenta: 
      .col-lg-6.align-content-center
        figure.mb-5
          img.mb-3(src='@/assets/curso/temas/tema1/39.svg', alt='Imagen de apoyo')
    
    .row.mb-5
      .col-md-6.col-lg-3.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/40.svg' alt='Imagen de apoyo')
          .tarjeta.cfc_2.brp
            .p-4
              h2.text-center Predador
              p Se considera predador al animal que se come a otro, entre ellos encontramos: arañas, avispas, hormigas, mariquitas, entre otros; por ende, son utilizados como herramientas de control biológico.
      .col-md-6.col-lg-3.mb-5.mb-lg-0(data-aos="flip-down")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/41.svg' alt='Imagen de apoyo')
          .tarjeta.cfc_2.brp
            .p-4
              h2.text-center Parásitos
              p Se considera parasito al organismo que se hospeda dentro de otro cuerpo (endoparásito) o en la superficie (ectoparásito) de otro organismo y comen dentro del hospedero.
      .col-md-6.col-lg-3.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/42.svg' alt='Imagen de apoyo')
          .tarjeta.cfc_2.brp
            .p-4
              h2.text-center Entomopatogeno
              p Microbios que causan enfermedades a los insectos, por ejemplo, hongos, bacterias, virus.
      .col-md-6.col-lg-3.mb-5.mb-lg-0(data-aos="flip-down")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/43.svg' alt='Imagen de apoyo')
          .tarjeta.cfc_2.brp
            .p-4
              h2.text-center Competidor
              p Microbios que compiten con otros microbios e impiden su crecimiento.

    div.mb-5
      h4.bgr_2.p-3 d.	Control del cultivo

      p Para que se lleve a cabo el control en el cultivo, se tiene en cuenta las acciones que se ejecutan en función de ello, para lo que se tiene presente la rotación del cultivo, las plantas compañeras, la eliminación de las malezas y otras medidas como se describen a continuación: 

    .row.mb-5
      .col-lg-9
        TabsA.color-acento-botones.mb-5
          .tarjeta.color-acento-botones--borde.p-4(titulo="Rotación del cultivo")
            h4 Rotación del cultivo
            p Algunas enfermedades aparecen como consecuencia de la repetición del cultivo, en el mismo lugar por varios periodos, generando que el patógeno se acumule en el suelo, bajo las condiciones repetitivas del cultivo.
            p Los organismos patógenos normalmente no logran sobrevivir ante la ausencia de cultivos hospederos en tiempos prolongados de 1-2 años, es por ello que la rotación de cultivos es una alternativa para disminuir los patógenos o plagas, eliminando de esta manera el hospedero.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Plantas compañeras")
            h4 Plantas compañeras
            p Algunas especies vegetales tienen la capacidad de alejar insectos u organismos patógenos; por ende, es considerable establecer cultivos de estas características con plantas principales de tal modo que se logre reducir el riesgo de enfermedades o plagas.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Eliminación de malezas")
            h4 Eliminación de malezas
            p La eliminación de malezas puede destruir el hábitat y fuente infecciosa de virus. La fumigación con herbicidas no es la única manera de eliminar malezas, también se puede hacer limpieza manual. El hacer esta eliminación permite realizar arreglo del cultivo y el control de enfermedades y plagas.
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema1/44.png', alt='Imagen de apoyo')  
 
    .titulo-sexto.color-acento-contenido.mb-5
      h5 Tabla 1.
      span Ejemplo de plantas compañeras
    
    .tabla-a.mb-5
      table
        caption Nota. SENA 2022
        thead
          tr
            th(colspan="2") Planta compañera 
            th Cultivo
            th Efecto
        tbody
          tr.bgr_7
            td.p-0 
              img(src='@/assets/curso/temas/tema1/45.jpg', alt='Imagen de apoyo')
            td.text-center #[strong Orégano] 
            td.text-center Calabaza, pepino, melón
            td.text-center Se lleva bien con los cultivos de enredaderas.
          tr.bgr_9
            td.p-0 
              img(src='@/assets/curso/temas/tema1/46.jpg', alt='Imagen de apoyo')
            td.text-center #[strong Manzanilla] 
            td.text-center Cebolla, repollo, brócoli
            td.text-center Activar el crecimiento de los cultivos, además sirve como hospedero de insectos enemigos naturales
          tr.bgr_7
            td.p-0 
              img(src='@/assets/curso/temas/tema1/47.jpg', alt='Imagen de apoyo')
            td.text-center #[strong Ajo] 
            td.text-center Tomate y frutales
            td.text-center Mata los patógenos y aleja los insectos con su olor.
          tr.bgr_9
            td.p-0 
              img(src='@/assets/curso/temas/tema1/48.jpg', alt='Imagen de apoyo')
            td.text-center #[strong Cebolla] 
            td.text-center Tomate y lechuga
            td.text-center Controla patógenos con organismos simbióticos
          tr.bgr_7
            td.p-0 
              img(src='@/assets/curso/temas/tema1/49.jpg', alt='Imagen de apoyo')
            td.text-center #[strong Menta] 
            td.text-center Repollo y tomate
            td.text-center Aleja insectos y nematodos con su olor.
    
    .row.mb-5
      .col-lg-7.mb-3
        h4.bgr_2.p-3 e.	Pronóstico
        p El pronóstico es un elemento importante para el MIP, pues permite conocer la situación de las enfermedades y plagas antes de su aparición; por ende, es importante conocer la información meteorológica, etapa de crecimiento del cultivo en relación a la estación, monitoreo de la población de enfermedades y plagas, entre otras.

        p Con el fin de recolectar información sobre plagas y enfermedades se utilizan las trampas. El pronóstico contribuye a reducir la cantidad de productos químicos para controlar las plagas y enfermedades, 
 
      .col-lg-5.align-content-center
        figure.mb-5
          img.mb-3(src='@/assets/curso/temas/tema1/50.png', alt='Imagen de apoyo')

    div.mb-5
      h4.bgr_2.p-3 f.	Plaguicidas naturales
      p Entre los plaguicidas naturales se encuentran: 
  
    ImagenInfografica.color-primario.mb-5(data-aos="zoom-in")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema1/51.png', alt='Imagen de apoyo')

      .tarjeta.bgr_4.p-4(x="30%" y="23%" numero="+")
        p.mb-0 <b>Licor:</b> El alcohol sirve como desinfectante, debido a que puede inhibir el crecimiento de hongos y bacterias.
      .tarjeta.bgr_4.p-4(x="34%" y="73%" numero="+")
        p.mb-0 <b>Aceite:</b> El aceite se utiliza como plaguicida natural, ya que es capaz de matar insectos, atacando su tráquea., ej. Aceite agrícola.
      .tarjeta.bgr_4.p-4(x="66%" y="73%" numero="+")
        p.mb-0  <b>Vinagre:</b> La acidez puede generar el crecimiento y multiplicación de hongos y bacterias
      .tarjeta.bgr_4.p-4(x="75%" y="36%" numero="+")
        p.mb-0 <b>Ají y ajo:</b> El ajo cuenta con ajiin que es una sustancia con la capacidad de matar bacterias, por ende se suele utilizar el ajo en solución como un fungicida. 
    
    div.mb-5
      h4.bgr_2.p-3 g.	Otras medidas
      p Dentro de otros aspectos que se pueden mencionar como medidas para el manejo de plagas son: 
    .row.mb-5.pst
      .col-md-6.bgr_5.p-5
          .row
            .col-lg-6 
              h4 Feromona
              p.mb-0 La mayoría de las orugas que comen hojas de cultivos son larvas de mariposas, las mariposas nocturnas hembra producen una sustancia que atrae a los machos. Por ende, al utilizar una feromona sintética los machos son atraídos y se pierde la oportunidad de copula con la hembra y así se disminuye la población de mariposas nocturna y a su vez las larvas dañinas para el cultivo.
            .col-lg-6.align-content-center
              figure
                img(src='@/assets/curso/temas/tema1/52.png', alt='Imagen de apoyo')
      .col-md-6.bgr_5.p-5
          .row
            .col-lg-6 
              h4 Vacuna y antibiótico
              p.mb-0 Las vacunas se preparan con la mutación de un virus que no tenga efecto patógeno y se inocula para que tenga anticuerpos al virus patógeno, mientras que los antibióticos son estreptomicinas o tetramicinas; no obstante esta medida se encuentra en análisis y por costos, se considera una alternativa a largo plazo.
            .col-lg-6.align-content-center
              figure
                img(src='@/assets/curso/temas/tema1/53.png', alt='Imagen de apoyo')

    separador 

    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Normatividad

    p.mb-5 Dentro de la normatividad en materia de control de plagas, Programa Integrado de Plagas MIP y limpieza y desinfección, encontramos:

    .titulo-sexto.color-acento-contenido.mb-5
      h5 Tabla 2.
      span Normatividad en materia de control de plagas
          
    .tabla-a.mb-5
      table
        caption Nota. SENA (2021). Adaptado de decretos y leyes normativas web 
        thead
          tr
            th.pst_1 Norma 
            th Ámbito de aplicación
        tbody
          tr.bgr_7
            td.text-center #[strong Decreto 1843 de 1991] 
            td.p-4 
              p.mb-0 Por el cual se reglamentan parcialmente los títulos III, V, VI,VII y XI de la Ley 9 de 1979 sobre uso y manejo de plaguicidas
              p.mb-0 Capítulo I. Disposiciones generales y definición.
              p Artículo 1: Del objeto del control y vigilancia epidemiológica: El control y vigilancia epidemiológica deberá efectuarse con el objeto de evitar que afecten la salud de la comunidad, la sanidad animal y vegetal o causen deterioro ambiental.
          tr.bgr_9
            td.text-center #[strong Resolución No. 395 de 2006] 
            td.p-4 Por la cual se fija el procedimiento transitorio para la ampliación de uso temporal de plaguicidas químicos de uso agrícola en cultivos de frutas exóticas, hierbas aromáticas y culinarias.
          tr.bgr_7
            td.text-center #[strong Decreto 380 del 2021] 
            td.p-4 Por el cual se regula el control de los riesgos para la salud y el medio ambiente en el marco de la erradicación de cultivos ilícitos mediante el método de aspersión aérea.
          tr.bgr_9
            td.text-center #[strong Resolución ICA 3593 del 09 de octubre de 2015, modificada por las resoluciones ICA 6630 de 2017, 29064 de 2018, 00032 de 2020 y 79193 de 2020.] 
            td.p-4 Establece el listado contiene las plagas actualmente reglamentadas en Colombia, las cuales se han definido siguiendo los lineamientos establecidos por la Convención Internacional de Protección Fitosanitaria (CIPF). Contiene las Plagas Cuarentenarias (PC) y las Plagas No Cuarentenarias Reglamentadas (PNCR) que requieren medidas fitosanitarias para la importación de productos agrícolas, para evitar la introducción de las PC y limitar las repercusiones económicas en el caso de las PNCR.
    
    .row.justify-content-center.bg_grad-02.position-relative.mb-5
      .col-md-3.col-lg-4.mb-3(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/54.svg', alt='Imagen de apoyo')
      .col-md-8.col-lg-6.align-content-center
        h4 Recuerde…
        p.mb-0 Lo mencionado en dicha normatividad son los aspectos más destacados, si desea entrar en el detalle de cada una o consultarla de manera completa, a través de  la web  puede hacerlo.
        img(src='@/assets/curso/temas/tema1/55.svg', alt='Imagen de apoyo').pst_2
        img(src='@/assets/curso/temas/tema1/56.svg', alt='Imagen de apoyo').pst_3

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
