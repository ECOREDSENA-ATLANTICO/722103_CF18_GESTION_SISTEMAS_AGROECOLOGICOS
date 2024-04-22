<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Es importante entender que las prácticas culturales, son técnicas de manejo agrícola con el fin de mejorar los objetivos de producción del cultivo, dentro de estas, se establecen estrategias de manejo integrado de plagas, lo que permite asegurar un desarrollo y crecimiento adecuado del cultivo, reducción de costos, y productos de calidad.

    p Además, de reconocer las prácticas culturales apropiadas para cada cultivo, las cuales van desde el saneamiento, manejo del cultivo hasta técnicas de exclusión, sin dejar de lado las actividades de monitoreo pues son las que permiten vigilar la evolución del cultivo y de los problemas que se presenten durante el desarrollo del mismo, asegurando el éxito y logro de los objetivos esperados en cuanto a productividad.

    p Todos los involucrados dentro del proceso agrícola, deben conocer claramente las labores a desarrollar y su importancia dentro del cultivo, con el fin de garantizar un buen manejo del proceso, con el fin de implementar las técnicas y estrategias adecuadas según la situación presentada.

    p.mb-5 Así pues, un resumen de lo visto en el presente componente, podrá ser visualizado en el siguiente mapa conceptual.


    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
