<template>
  <v-container fluid ma-0 class="primary about-facig">
    <div class="d-flex flex-column about-title justify-center">
      <h1 class="d-flex"><strong>Sobre a 4ª Edição</strong></h1>
      <v-flex class="d-flex flex-row">
        <h4 class="align-self-center">da</h4>
        <v-img
          :src="require('../assets/facig-word.png')"
          height="70%"
          max-height="90%"
          max-width="70%"
          contain
          class=""
        ></v-img>
      </v-flex>
    </div>
    <div class="about-section">
      <div class="text-justify paragraph">
        VEM AÍ A 4ª Edição da Feira de Amostra, 
        Comércio e Indústria do Guará - FACIG 
      </div>
      <div class="text-justify paragraph">
        A expectativa é de que ultrapasse a 
        margem de 1988, com um público de mais de 50 mil pessoas. 
      </div>
      <div class="text-justify paragraph">
        Evento de maior público na história do Guará tem nova edição 
        após 30 anos. A 4ª Edição, acontecerá entre os dias 24 e 
        27 de outubro, ao lado do edifício Consei, entre as QEs 
        19 e 34, a partir das 11h. 
      </div>
      <div class="text-justify paragraph">
        O projeto da reedição foi apresentado pelo presidente 
        da Associação Comercial e Industrial do Guará (ACIG), 
        Deverson Lettieri, durante uma reunião com empresários 
        e representantes do governo.
      </div>
      <div class="text-justify paragraph">
        A Feira terá uma estrutura de quase 17 mil metros e conta 
        com o apoio de empresas de vários segmentos da cidade, Sebrae, 
        DER, GDF, Secretaria de Cultura e Administração Regional do 
        Guará. A festa também conta com apresentações culturais, 
        música, dança, artesanato e gastronomia!
      </div>
      <div class="text-justify paragraph">
        O foco do evento é a promoção do empreendedorismo 
        local, bem como o resgate da memória afetiva da cidade, 
        afinal, a FACIG é um evento já conhecido na cidade. 
      </div>
    </div>
  </v-container>
</template>
<style>
  .about-facig {
    padding: 40px 5%;
    color: #FFFFFF;
  }
  .about-title  {
    font-family: 'Geomanist webfont',Arial,sans-serif;
    font-size: 2vw;
    line-height: 2vw;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 960px) {
    .about-title {
      font-size: 4vw;
      line-height: 4vw;
    }
    .paragraph {
      font-size: 5vw;
      line-height: 7vw;
    }
  }
  .about-section {
    font-family: 'Geomanist webfont',Arial,sans-serif;
    font-size: 1.7vw;
    line-height: 3vw;
    font-weight: 300;
    text-align: left;
  }
  .paragraph {
    max-width: 650px;
    margin: 0 30px 20px 30px;
  }
</style>

<script>
export default {
  
}
</script>