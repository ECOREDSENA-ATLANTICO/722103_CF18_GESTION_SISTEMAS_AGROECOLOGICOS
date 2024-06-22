export default {
  global: {
    componenteFormativo:
      'Manejo y supervisión de prácticas culturales del agroecosistema',
    descripcionCurso:
      'En este componente formativo se abordan temas que le permitirán implementar prácticas de manejo cultural del agroecosistema, teniendo en cuenta tipos de población, plagas y enfermedades, para así establecer protocolo y procedimiento en el manejo, según la normatividad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Monitoreo de las poblaciones asociadas al cultivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Manejo de Plagas y Enfermedades (MIP)',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Normatividad',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Supervisión de las prácticas de manejo cultural',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Registro de la información y trazabilidad de las prácticas de manejo cultural ',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Protocolos, procedimientos y normatividad',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Alternativas de manejo cultural',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Buenas prácticas de convivencia',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Acciones de mejora',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Monitoreo de las poblaciones asociadas al cultivo',
      referencia:
        'Altieri, M. Á. & Nicholls, C. I. (2007). Biodiversidad y manejo de plagas en agroecosistemas. Icaria editorial. S.A, Barcelona.',
      tipo: 'Capítulo de libro',
      link:
        'https://books.google.com.co/books?id=nRjLGJhQ7ywC&printsec=frontcover&dq=manejo+cultural+del+agroecosistema&hl=es&sa=X&ved=2ahUKEwjsyLi0s6n4AhW7mYQIHcQIDq4Q6AF6BAgIEAI#v=onepage&q=manejo%20cultural%20del%20agroecosistema&f=false',
    },
    {
      tema: '3. Alternativas de manejo cultural',
      referencia:
        'Ministerio de Agricultura y desarrollo rural (2009). Mis buenas prácticas agrícolas. “Guía para agroempresarios”.',
      tipo: 'Guía',
      link:
        'https://www.ica.gov.co/areas/agricola/servicios/inocuidad-agricola/capacitacion/cartillabpa.aspx',
    },
  ],
  glosario: [
    {
      termino: 'Agroecosistema',
      significado:
        'cualquier tipo de ecosistema modificado y gestionado por los seres humanos con el objetivo de obtener alimentos.',
    },
    {
      termino: 'Enfermedad',
      significado:
        'una enfermedad en una planta producida por un agente patógeno (hongo, bacteria o virus) da lugar a una alteración que afecta a la síntesis y la utilización de los nutrientes, repercutiendo así en un cambio de apariencia de ésta y/o una menor producción y de menor calidad que si la planta estuviera sana.',
    },
    {
      termino: 'Insectos - Plaga',
      significado:
        'organismos que pueden causar daño al hombre o a sus bienes (por ejemplo, cosechas).',
    },
    {
      termino: 'Manejo Integrado de Plagas (MIP)',
      significado:
        'consiste en el empleo de todos los géneros de control susceptibles de aplicar en determinado cultivo, (cultural, biológico, químico, entre otros).',
    },
    {
      termino: 'Manejo cultural',
      significado:
        'estrategia mediante la cual se crea condiciones poco favorables para las plagas, de tal modo que se disminuya la reproducción y diseminación, por lo cual se buque que el crecimiento y desarrollo vigoroso del cultivo.',
    },
    {
      termino: 'Población',
      significado:
        'conjunto de seres vivos de la misma especie que habitan en un lugar determinado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Brechelt, A. (2004). El Manejo Ecológico de Plagas y Enfermedades. ',
      link:
        'https://www.academia.edu/39859054/El_Manejo_Ecol%C3%B3gico_de_Plagas_y_Enfermedades',
    },
    {
      referencia:
        'Ministerio de desarrollo agropecuario. Santiago Republica de panamá. (2010). Guía del Manejo Integrado de Plagas (MIP) para técnicos y productores.',
      link:
        'https://www.jica.go.jp/project/spanish/panama/2515031E0/data/pdf/1-57_01.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Tatiana Villamil',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel De Jesús Paredes Maestre',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Desarrollo Curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Diana Julieth Núñez Ortegón',
          cargo: 'Experta Temática',
          centro: 'Centro de Comercio y Servicio - Regional Tolima',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Diseñadora instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Centro de Diseño y Metrología - Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrector de estilo',
          centro: 'Centro de Diseño y Metrología - Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nelson Vera',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Alexander acosta',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Carmen Martínez',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Carlos Andrés Diaz',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Carmen Martínez',
          cargo: 'Diseño de contenidos digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Eulises Orduz',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Fabian Cuartas',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Gilberto Herrera',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Juan Carlos Cardona Acosta',
          cargo: 'Validación de recursos digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
