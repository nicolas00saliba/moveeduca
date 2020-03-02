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
  }
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
        name: 'ABONG',
        description: "A Associação Brasileira de Organizações Não Governamentais – Organizações em Defesa dos Direitos e Bens Comuns é uma plataforma de atuação nacional que congrega organizações que lutam contra todas as formas de discriminação, de desigualdades, pela construção de modos sustentáveis de vida e pela radicalização da democracia.",
        img: {
          src: require('../../assets/partners/abong.png'),
          alt: "quadro negro com a fórmula molecular da água (H2O)",
        },
        action1: {
          name: '',
          path: false
        },
        action2: {
          name: 'Saiba Mais',
          path: ''
        }
      },
      {
        name: 'Santos Inocentes',
        description: "Resgatar a vida das crianças em gestação que correm o risco de serem abortadas e dar apoio psicológico, espiritual e material às mulheres grávidas carentes e a seus filhos. Ir ao encontro da mãe ou família que esteja pensando em realizar um aborto - por terem sido vítimas de agressões, por questões financeiras, traumas afetivos, depressões etc. - e conscientizar a respeito da vida e do aborto. Dar apoio material (quando necessário), psicológico e espiritual.",
        img: {
          src: require('../../assets/partners/santos-inocente-logo.jpg'),
          alt: "professor e aluna",
        },
        action1: {
          name: '',
          path: ''
        },
        action2: {
          name: 'Saiba Mais',
          path: ''
        }
      },
      {
        name: 'GitHub',
        description: "GitHub é uma plataforma de hospedagem de código-fonte com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo. GitHub é amplamente utilizado por programadores para divulgação de seus trabalhos ou para que outros programadores contribuam com o projeto, além de promover fácil comunicação através de recursos que relatam problemas ou mesclam repositórios remotos (issues, pull request).",
        img: {
          src: require('../../assets/partners/github.png'),
          alt: "professor e aluna",
        },
        action1: {
          name: 'Contratar',
          path: ''
        },
        action2: {
          name: 'Saiba Mais',
          path: ''
        }
      },
      {
        name: 'ACIG',
        description: "Associação Comercial e Insdustrial do Guará defende como alguns de seus objetivos e finalidades o fortalecimento e representação da classe empresarial; assistir aos associados em seus interesses, valorizando seus produtos e serviços; promover do desenvolvimento econômico e social; ofertar oportunidades de qualificação profissional permanente, com elevação de escolaridade dos trabalhadores, associados e da comunidade, para ampliar a sua empregabilidade e renda",
        img: {
          src: require('../../assets/partners/acig.jpg'),
          alt: "ábaco",
        },
        action1: {
          name: 'Participar',
          path: ''
        },
        action2: {
          name: 'Saiba Mais',
          path: ''
        }
      },
      {
        name: 'Gama Cidadão',
        description: "No ar desde 2012, com o objetivo de privilegiar a informação comunitária e a regionalização da notícia. Foi fundado pelo jornalista Israel Carvalho e vem exercendo um importante papel de transmitir notícias verídicas e imparciais sobre a realidade da cidade e do DF.",
        img: {
          src: require('../../assets/partners/gamacidadao.jpg'),
          alt: "lupa apontando para livros",
        },
        action1: {
          name: 'Comprar',
          path: ''
        },
        action2: {
          name: 'Saiba Mais',
          path: ''
        }
      },
      {
        name: 'MLH',
        description: "O Major League Hacking (MLH) é uma empresa que opera uma liga para hackers de estudantes. A Move&Educa organiza hackatons para que estudantes possam compartilhar e aprender novas habilidades, além de colocá-las em prática em problemas reais do dia a dia.",
        img: {
          src: require('../../assets/partners/mlh.jpg'),
          alt: "peça de lego laranja em fundo azul claro",
        },
        action1: {
          name: 'Participar',
          path: ''
        },
        action2: {
          name: 'Saiba Mais',
          path: ''
        }
      },
      {
        name: 'IADES',
        description: "Instituto de Apoio e Defesa dos Estudantes do Brasil – IADES BRASIL é uma associação civil, de direito privado, sem fins lucrativos de caráter social e educativo. Uma entidade de representação estudantil que abrange os diversos níveis educacionais, veio inovar e facilitar a vida do estudante, focando em resultados de qualidade. E oferecer tranquilidade e acesso a tudo que o mercado oferece é o diferencial que vai te preparar para os desafios.",
        img: {
          src: require('../../assets/partners/aides.jpg'),
          alt: "ábaco",
        },
        action1: {
          name: 'Participar',
          path: ''
        },
        action2: {
          name: 'Saiba Mais',
          path: ''
        }
      },
      {
        name: 'Amigos do Concurso',
        description: "Proporcionar aulas gratuitas para concurso, presencial, no Distrito Federal e Entorno, mas também desencadear ações sociais em prol da comunidade. ",
        img: {
          src: require('../../assets/partners/amigos-do-concurso.jpg'),
          alt: "Diploma genérico",
        },
        action1: {
          name: 'Contratar',
          path: ''
        },
        action2: {
          name: 'Saiba Mais',
          path: ''
        }
      },
      {
        name: 'Brasil sem Drogas',
        description: "O Movimento Nacional da Cidadania pela Vida – BRASIL SEM DROGAS tem caráter suprapartidário e suprareligioso e vem debatendo a legalização da maconha sob o ponto de vista científico, social e humano. ",
        img: {
          src: require('../../assets/partners/brasil-sem-drogas-logo.png'),
          alt: "Diploma em rolo e chapéu de graduação",
        },
        action1: {
          name: 'Participar',
          path: ''
        },
        action2: {
          name: 'Saiba Mais',
          path: ''
        }
      }
    ]
  })
}
</script>