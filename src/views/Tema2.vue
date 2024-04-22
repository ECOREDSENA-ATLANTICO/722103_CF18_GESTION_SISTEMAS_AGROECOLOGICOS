<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Supervisión de las prácticas de manejo cultural
    
    figure
      img(src='@/assets/curso/temas/tema2/1.jpg', alt='Texto que describa la imagen')
    div.justify-content-center.d-flex.mb-5
      p.bgr_10.p-4 El proceso de supervisión de las buenas prácticas de manejo cultural del agroecosistema está basado en:
    
    .titulo-sexto.color-acento-contenido.mb-5
      h5 Tabla 3.
      span Prácticas de manejo cultural
    
    .tabla-a.mb-5
      table
        caption Nota. SENA 2022
        thead
          tr
            th Saneamiento 
            th.bgr_11 Manejo del cultivo
            th.bgr_12.text-white Exclusión
        tbody
          tr.bgr_7
            td 
              p Cuyo objetivo es eliminar los criaderos de plagas y enfermedades.
              p #[strong Involucra:] eliminación de plantas voluntarias, eliminación de rastrojos y residuos de cosecha, limpieza de rondas y alrededores, eliminación de plantas afectadas y hospederos, destrucción de fruta dañada y caída, manejo de plántulas.
            td  
              p El objetivo es crear condiciones poco favorables para las plagas, de tal modo que se disminuya la reproducción y diseminación, por lo cual se busque el crecimiento y desarrollo vigoroso del cultivo.
              p #[strong Involucra:] preparación del suelo, rotación de cultivos, aplicación de abonos verdes y cultivos de cobertura, fertilización y riego adecuados, cultivos asociados, cultivos trampa, barreras físicas, cobertura plástica del suelo, entre otros.
            td
              p El objetivo es evitar que la plaga entre en contacto con el cultivo.
              p #[strong Involucra:] invernaderos cerrados, invernaderos en malla, cubrir la fruta (bolsas).
    
    .row
      .col-lg-6.mb-3
        p Las prácticas culturales, son técnicas de manejo agrícola que aportan desde su desarrollo a mejorar los objetivos de producción del cultivo, dentro de estas, se establecen estrategias de manejo integrado de plagas, lo que permite asegurar un desarrollo y crecimiento adecuado del cultivo, reducción de costos y productos de calidad.

        p Cada cultivo requiere de unas prácticas culturales que van desde el saneamiento, manejo del cultivo hasta técnicas de exclusión, sin dejar de lado las actividades de monitoreo pues son las que permiten vigilar la evolución del cultivo y de los problemas que se presenten durante el desarrollo del mismo, de esto depende el éxito y logro de los objetivos esperando en cuanto a productividad.
      .col-lg-6.align-content-center 
        .cajon.color-acento-contenido.p-4
          .row
            .col-lg-6
              p.mb-0 El personal a cargo del cultivo debe conocer claramente las labores a desarrollar y su importancia dentro del proceso, con el fin de garantizar un buen manejo agronómico del cultivo, con el fin de implementar las técnicas y estrategias adecuadas según la situación presentada.
              img(src='@/assets/curso/temas/tema2/2.png', alt='Texto que describa la imagen').pst_4.d-none.d-lg-flex

    separador

    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1. Registro de la información y trazabilidad de las prácticas de manejo cultural
    

    .row.mb-5
      .col-lg-6
        figure.mb-3
          img(src='@/assets/curso/temas/tema2/3.png', alt='Texto que describa la imagen')
      .col-lg-6
        p Se entiende por trazabilidad aquellos procedimientos que permitan conocer todos los detalles de un producto, lo que implica que la trazabilidad establece insumos utilizados en un proceso productivo como la obtención la obtención de la cosecha de un cultivo.
        p.mb-5 La trazabilidad permite establecer rápidamente lotes de alguna cosecha que presente problemas de contaminación y de este modo implementar medidas necesarias para evitar mayores impactos.
        .cajon.color-secundario.p-4
          p Además, permite diseñar la documentación y registro de la información con el fin de realizar un control de las actividades desarrolladas; por ende, es importante contar con un registro de la evaluación de las características, recursos y demás información de la zona o predio donde se llevará a cabo el proceso, de esta manera se puede analizar el proceso :
    
    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="Documento sobre el material de siembra")
        .row
          .col-lg-4.align-content-center
            h4 Documento sobre el material de siembra
            p Procedimiento de sanidad y calidad del material de propagación, se genera certificado del material de siembra, registro del control de calidad en viveros y registro de siembra.
          .col-lg-8
            figure.mb-3
              img(src='@/assets/curso/temas/tema2/4.png', alt='Texto que describa la imagen')
      .tarjeta.color-acento-botones--borde.p-4(titulo="Análisis del agua y suelo")
        .row
          .col-lg-4.align-content-center
            h4 Análisis del agua y suelo
            p Análisis físico, químico y microbiológico.
          .col-lg-8
            figure.mb-3
              img(src='@/assets/curso/temas/tema2/5.png', alt='Texto que describa la imagen')
      .tarjeta.color-acento-botones--borde.p-4(titulo="Registro de mantenimiento y calibraciones equipos")
        .row
          .col-lg-4.align-content-center
            h4 Registro de mantenimiento y calibraciones equipos
            p Dicho registro se realiza a través de labranza, abonamiento, manejo de plagas y enfermedades.
          .col-lg-8
            figure.mb-3
              img(src='@/assets/curso/temas/tema2/6.png', alt='Texto que describa la imagen')
      .tarjeta.color-acento-botones--borde.p-4(titulo="Registro de aplicación de fertilizantes")
        .row
          .col-lg-4.align-content-center
            h4 Registro de aplicación de fertilizantes
            p Dicho registro se configura a partir del plan de fertilización, kardex de fertilizantes y fichas técnicas de los fertilizantes y abonos.
          .col-lg-8
            figure.mb-3
              img(src='@/assets/curso/temas/tema2/7.png', alt='Texto que describa la imagen')
      .tarjeta.color-acento-botones--borde.p-4(titulo="Registro sobre la preparación de abonos orgánicos")
        .row
          .col-lg-4.align-content-center
            h4 Registro sobre la preparación de abonos orgánicos
            p Dicho registro se desarrolla en caso de prepararse en la unidad productiva, por medio de la evaluación de riesgos y registros.
          .col-lg-8
            figure.mb-3
              img(src='@/assets/curso/temas/tema2/8.png', alt='Texto que describa la imagen')
      .tarjeta.color-acento-botones--borde.p-4(titulo="Plan de Manejo Integral de Plagas (MIP)")
        .row
          .col-lg-4.align-content-center
            h4 Plan de Manejo Integral de Plagas (MIP)
            p Para que el plan se ejecute a través del listado de plaguicidas permitidos y prohibidos en Colombia, hoja de seguridad de cada plaguicida y límite máximo de residuos según el Codex, además del procedimiento de manejo de plagas, kardex actualizado y registro de aplicación de plaguicidas.
          .col-lg-8
            figure.mb-3
              img(src='@/assets/curso/temas/tema2/9.png', alt='Texto que describa la imagen')
      
    p El registro de la información permite evaluar y verificar las actividades realizadas, con el fin de identificar los errores y de este modo corregirlos e implementar estrategias de mejora y en caso contrario, poder establecer las circunstancias de éxito y así mismo seguir implementado dichas estrategias, con el fin de lograr los resultados esperados en el agroecosistema.

    separador 

    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2. Protocolos, procedimientos y normatividad
    
    .row.mb-5
      .col-lg-5.order-2.order-lg-1
        p Dentro de las prácticas de manejo cultural se deben establecer los protocolos y procedimientos adecuados que contemplen la normatividad vigente que permita el adecuado desarrollo del proceso productivo. Por ello, es relevante reconocer lo que es el protocolo y lo que este permite: 
      .col-lg-7.order-1.order-lg-2.mb-3
        figure.mb-3
          img(src='@/assets/curso/temas/tema2/10.svg', alt='Texto que describa la imagen')
    
    .row.mb-5.justify-content-center
      .col-md-8.col-lg-12
        figure
          img(src='@/assets/curso/temas/tema2/11.svg', alt='Texto que describa la imagen').d-none.d-lg-flex
          img(src='@/assets/curso/temas/tema2/12.svg', alt='Texto que describa la imagen').d-flex.d-lg-none

    p.p-4.bgr_5 No se pude llevar establecer un cultivo sin tener un diseño establecido, ya que en este se involucran variables indispensables para su desarrollo, por  lo cual contar con el paso a paso y procedimiento adecuado permite garantizar la obtención de los resultados esperados.
       

</template>

<script>
export default {
  name: 'Tema2',
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
