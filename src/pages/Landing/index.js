import React from 'react';

import { FaCheck, FaGifts, FaEnvelopeOpen } from 'react-icons/fa';
import Navbar from './components/Navbar';

import wedding from '~/assets/images/svg/wedding.svg';
import checking from '~/assets/images/svg/checking.svg';
import gifts from '~/assets/images/svg/gifts.svg';
import todo from '~/assets/images/svg/todo.svg';
import data from '~/assets/images/svg/data.svg';

import './styles.css';

function Landing() {
  return (
    <div className="l-container">
      <Navbar />

      <div className="l-intro">
        <div className="l-content">
          <div className="l-details">
            <h3 className="text-focus-in">
              Bem vindo ao <strong>Casamentos.com</strong>
            </h3>

            <p className="text-focus-in">
              Aqui temos tudo que você precisa para organização, controle e
              muito mais funcionalidades que irão te ajudar nesse momento tão
              especial.
            </p>
          </div>
          <div className="l-image text-focus-in">
            <img src={wedding} alt="wedding" />
          </div>
        </div>
      </div>

      <div className="l-about">
        <div className="l-section">
          <div className="l-img">
            <img src={checking} alt="check" />
          </div>
          <div>
            <span>
              <FaCheck size={22} /> Check List
            </span>

            <p>
              Você pode criar seu check-list com todos os afazeres, compromissos
              e pendências. Tudo isso para facilitar na organização de seu
              casamento.
            </p>
          </div>

          <div>
            <span>
              <FaGifts size={22} /> Lista de Presentes
            </span>

            <p>
              Disponibilizamos vários produtos que poderão ser adicionados na
              sua lista de presentes. E o dinheiro arrecadado poderá ser
              retirado da plataforma direto para sua conta bancária.
            </p>
          </div>

          <div className="l-img">
            <img src={gifts} alt="gifts" />
          </div>

          <div className="l-img">
            <img src={todo} alt="check" />
          </div>
          <div>
            <span>
              <FaEnvelopeOpen size={22} /> Lista de Convidados
            </span>

            <p>
              Crie e acompanhe sua lista de convidados. Ao criar a lista os
              convidados poderão confirmar presença, assim é possível saber quem
              veremos no casamento.
            </p>
          </div>

          <div>
            <span>
              <FaEnvelopeOpen size={22} /> Lista de Fornecedores
            </span>

            <p>
              Disponibilizamos uma lista de fornecedores como: Cerimonial,
              Banda, Decoração, Vestido, Fotografia/Filmagem etc.. Tudo isso
              para ajudar a facilitar as escolhas e reduzindo custos e tempo.
            </p>
          </div>

          <div className="l-img">
            <img src={data} alt="data" />
          </div>
        </div>
      </div>

      <div className="l-feedback">
        <h3>Veja alguns feedbacks</h3>

        <section>
          <div>
            <img
              src="https://www.seekpng.com/png/full/514-5147412_default-avatar-icon.png"
              alt=""
            />

            <span>Fernanda Montenegro</span>

            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters
            </p>
          </div>
          <div>
            <img
              src="https://www.seekpng.com/png/full/514-5147412_default-avatar-icon.png"
              alt=""
            />

            <span>Fernanda Montenegro</span>

            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters
            </p>
          </div>
          <div>
            <img
              src="https://www.seekpng.com/png/full/514-5147412_default-avatar-icon.png"
              alt=""
            />

            <span>Fernanda Montenegro</span>

            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters
            </p>
          </div>
          <div>
            <img
              src="https://www.seekpng.com/png/full/514-5147412_default-avatar-icon.png"
              alt=""
            />

            <span>Fernanda Montenegro</span>

            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Landing;
