<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p Para el aporte dentro de las labores culturales según procedimientos técnicos y buenas prácticas agrícolas, se hace necesario manejar poblaciones asociadas según procedimiento técnico y tipo de cultivo, lo que permite supervisar el desarrollo de las prácticas de manejo cultural según criterio técnico; es así como se da paso a los contenidos que serán abordados en este componente formativo, a continuación, se explican los procedimientos en el siguiente video introductorio:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/8XcCF9PK7EU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
