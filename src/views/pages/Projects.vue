<template>
  <div class="dashboard">
    <v-container
      fluid ma-0 pa-0 xs12 md12 
      class="d-flex flex-column flex-md-row flex-lg-row flex-xl-row"
    >
      <v-flex xs12 md9 lg9 class="">
        <CardAbout v-for="project in projects" :key="project.name" v-bind:project="project"></CardAbout>
      </v-flex>
      <v-flex xs12 md3 lg3 secondary class="scribble-background">
        <!-- <v-parallax
          dark
          :src="require('../../assets/scribbles/scribbles-scribbles-52.png')"
        > -->
          <Aside/>
        <!-- </v-parallax> -->
      </v-flex>
    </v-container>
  </div>
</template>

<style>
  .scribble-background {
    position: relative;
    overflow: hidden;
    /* transform: rotate(30deg); */
    background-image: url('../../assets/scribbles/scribbles-scribbles-88-white.png');
    /* background-image: url('../../assets/logo-branca.png'); */

    background-size: 100%;
    background-repeat: repeat-y;
    /* transition: all 0.7s ease; */
    /* animation: shake 4s linear 0 infinite normal none; */
  }
  /* @keyframes shake {
    0% {
      -webkit-transform: rotate(0deg)
    }
    25% {
      -webkit-transform: rotate(45deg)
    }
    50% {
      -webkit-transform: rotate(90deg)
    }
    75% {
      -webkit-transform: rotate(45deg)
    }
    100% {
      -webkit-transform: rotate(0deg)
    }
  } */
</style>

<script>
import CardAbout from '../../components/CardAbout';
import Aside from '../../components/Aside';

export default {
  components: {
    CardAbout,
    Aside
  },
  data: () => ({
    projects: [
      {
        name: 'Projeto Mover',
        description: "Projeto Mover, originalmente chamado de projeto interdisciplinar salve o ensino, é um projeto pensado para desenvolver habilidades socioemocionais em estudantes atendidos através de um grupo de estudos. A metodologia utilizada é a de aprendizagem baseada em projetos.",
        img: {
          src: require('../../assets/projects/mover/abacus.svg'),
          alt: "ábaco",
        },
        action1: {
          name: 'Participar',
          path: '/comingsoon'
        },
        action2: {
          name: 'Saiba Mais',
          path: '/comingsoon'
        }
      },
      {
        name: 'Aula Particular',
        description: "Aulas particulares ministradas por universitários com o apoio de um time pedagógico especializado e com experiência comprovada na secretária de educação e em instituições privadas. Cobrimos todos os conteúdos desde a alfabetização até assuntos preparatórios para o vestibular.",
        img: {
          src: require('../../assets/projects/private-classes/learning-student.svg'),
          alt: "professor e aluna",
        },
        action1: {
          name: 'Contratar',
          path: '/comingsoon'
        },
        action2: {
          name: 'Saiba Mais',
          path: '/products/private-classes'
        }
      },
      {
        name: 'Aulões Voluntários',
        description: "Buscando ajudar a comunidade promovemos aulões focados em resolução de exercícios de concursos e do ENEM (Examen Nacional do Ensino Médio). Esse é um projeto que realizamos em parceria com algumas instituições e pessoas físicas.",
        img: {
          src: require('../../assets/projects/volunteer-classes/blackboard-class2.svg'),
          alt: "quadro negro com a fórmula molecular da água (H2O)",
        },
        action1: {
          name: '',
          path: false
        },
        action2: {
          name: 'Saiba Mais',
          path: '/comingsoon'
        }
      },
      {
        name: 'Robótica',
        description: "Projeto foca no ensino de componentes eletrônicos, placas de prototipagem e noções básica de programação. No momento estamos usando o Arduino, plataforma de prototipagem eletrônica de código aberto, permitindo que os usuários criem objetos eletrônicos interativos. ",
        img: {
          src: require('../../assets/projects/robotic/robot1.svg'),
          alt: "professor e aluna",
        },
        action1: {
          name: 'Contratar',
          path: '/comingsoon'
        },
        action2: {
          name: 'Saiba Mais',
          path: '/comingsoon'
        }
      },
      {
        name: 'SICATROLI',
        description: "Sistema de Cadastramento e Troca de Livros é um software desenvolvido pela Move&Educa com foco em auxiliar instituições públicas, privadas e sem fins lucrativos com o gerenciamento de acervo. O sistema cadastra os livros e permiti o empréstimo e a troca de livros entre pessoas e instituições.",
        img: {
          src: require('../../assets/projects/sicatroli/library-book.svg'),
          alt: "lupa apontando para livros",
        },
        action1: {
          name: 'Comprar',
          path: '/comingsoon'
        },
        action2: {
          name: 'Saiba Mais',
          path: '/comingsoon'
        }
      },
      {
        name: 'MLH',
        description: "O Major League Hacking (MLH) é a liga oficial de hackathon para estudantes. A Move&Educa organiza hackatons para que estudantes possam compartilhar e aprender novas habilidades, além de colocá-las em prática em problemas reais do dia a dia. Venha participar de um dos nossos hackatons.",
        img: {
          src: require('../../assets/projects/programming-34.svg'),
          alt: "peça de lego laranja em fundo azul claro",
        },
        action1: {
          name: 'Participar',
          path: '/comingsoon'
        },
        action2: {
          name: 'Saiba Mais',
          path: '/comingsoon'
        }
      },
      {
        name: 'Assessoria e Treinamento',
        description: "Nossos associados oferecem assessoria para profissionais da educação e insitituições públicas, privadas e sem fins lucrativos que buscam novos projetos, modernização burocrática e pedagógica. Temos treinamentos em diferentes subtópicos de educação: Aprendizagem Baseada em Projetos, Problemas Globais do conhecimento como avaliar, tecnologia da informação e computação na educação etc.",
        img: {
          src: require('../../assets/projects/diploma-patent.svg'),
          alt: "Diploma genérico",
        },
        action1: {
          name: 'Contratar',
          path: '/comingsoon'
        },
        action2: {
          name: 'Saiba Mais',
          path: '/comingsoon'
        }
      },
      {
        name: 'Graduação ?',
        description: "Esse projeto foi pensado pelos universitários que são associados da Move&Educa. O principal objetivo é levar adolescentes para conhecer as diferentes universidades, os diversos campus e uma grande variedade de cursos para que eles possam, além de descobrir qual curso fazer, descobrir a instituição que se adequa melhor ao seu perfil.",
        img: {
          src: require('../../assets/projects/graduation.svg'),
          alt: "Diploma em rolo e chapéu de graduação",
        },
        action1: {
          name: 'Participar',
          path: '/comingsoon'
        },
        action2: {
          name: 'Saiba Mais',
          path: '/comingsoon'
        }
      }
    ]
  })
}
</script>