import React from 'react';
import { data } from './mockffxiv';
import '../style/Ffxiv.css';

const Ffxiv = () => {


  return (

    <div>

      <div className="base-fundo flex">

        <div className="base-top flex">
          <div className="banner flex">
            Mounties
          </div>
        </div>

        <div className="base-bot flex">

          <div className="colunas flex">
            <div className="linhas-das-colunas flex flex-column">

              botão search

              filtro

              <div className="caixa-resultados flex">
                <div className="caixa-mount flex"></div>
                <div className="caixa-mount flex"></div>
                <div className="caixa-mount flex"></div>
                <div className="caixa-mount flex"></div>
                <div className="caixa-mount flex"></div>
                <div className="caixa-mount flex"></div>
                <div className="caixa-mount flex"></div>
                <div className="caixa-mount flex"></div>
                <div className="caixa-mount flex"></div>
                <div className="caixa-mount flex"></div>
                <div className="caixa-mount flex"></div>
                <div className="caixa-mount flex"></div>

              </div>
            </div>


          </div>

          <div className="colunas flex">

            <div className="linhas-das-colunas flex flex-column">
              Nome
              <div className="imagem-principal"></div>

            </div>


            <div className="linhas-das-colunas flex">

              <div className="imagem-principal">descrição</div>

            </div>




          </div>


        </div>




      </div >

    </div >

  );

}

export default Ffxiv;
