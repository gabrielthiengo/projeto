import React, { useEffect, useState } from 'react';
import PropTypes, { number } from 'prop-types';

import Loader from 'react-loader-spinner';
import { toast } from 'react-toastify';
import Rating from '@material-ui/core/Rating';
import Container from '~/components/Container';
import InputBlock from '~/components/InputBlock';
import Steps from '~/components/Steps';
import { MusicStyles } from '~/models/Music';

import { User, verifyPersonal, verifyAddress } from '~/models/User';
import api from '~/services/api';
import viaCep from '~/services/viaCep';

import './styles.css';

function Register({ previous, finishForm }) {
  const [step, setStep] = useState(0);
  const [user, setUser] = useState(User);
  const [hasZipcode, setHasZipcode] = useState(false);
  const [loading, setLoading] = useState({ zipCode: false });
  const [countryList, setCountryList] = useState([]);
  const [musicList, setMusicList] = useState(MusicStyles);
  const [os, setOs] = useState('');

  useEffect(() => {
    api.get('paises').then(res => {
      setCountryList(res.data);
    });
  }, []);

  function searchAdress(zipCode) {
    if (zipCode.length === 8) {
      setLoading({ zipCode: true });

      viaCep
        .get(`/${zipCode}/json`)
        .then(res => {
          setUser({
            ...user,
            zipCode,
            address: res.data.logradouro,
            city: res.data.localidade,
          });

          setHasZipcode(true);
          setLoading({ zipCode: false });
        })
        .catch(() => {
          toast.error('Cep não encontrado');
          setHasZipcode(true);
          setLoading({ zipCode: false });
        });
    }
  }

  function handleSubmit(userIn) {
    const musics = musicList.filter(e => e.selected === true);

    userIn.os = os;
    userIn.musicStyle = musics;

    console.log(userIn);

    toast.success('Tudo Feito! Obrigado por participar.');

    finishForm();
  }

  return (
    <Container>
      <div className="register-content">
        <header>
          <h3>Preencha o formulário!</h3>
          <p>São 5 etapas para completar seu cadastro.</p>
        </header>

        <section>
          <Steps step={step} />

          <form onSubmit={handleSubmit}>
            <main>
              {step === 0 && (
                <div className="form tracking-in-expand">
                  <h3>Dados Pessoais</h3>
                  <br />
                  <br />
                  <InputBlock>
                    <input
                      type="text"
                      placeholder="Insira seu nome aqui"
                      value={user.name}
                      onChange={e => {
                        setUser({
                          ...user,
                          name: e.target.value,
                        });
                      }}
                    />
                  </InputBlock>
                  <br />
                  <InputBlock>
                    <input
                      type="text"
                      placeholder="Insira seu sobrenome aqui"
                      value={user.lastName}
                      onChange={e => {
                        setUser({
                          ...user,
                          lastName: e.target.value,
                        });
                      }}
                    />
                  </InputBlock>
                </div>
              )}

              {step === 1 && (
                <div className="form tracking-in-expand">
                  <h3>Endereço</h3>
                  <br />
                  <br />
                  <div className="zipcode-content">
                    <InputBlock>
                      <input
                        placeholder="Insira o cep"
                        type="text"
                        mask="99.999-999"
                        value={user.zipCode}
                        onChange={e => {
                          setUser({
                            ...user,
                            zipCode: e.target.value,
                          });

                          searchAdress(e.target.value);
                        }}
                      />
                    </InputBlock>
                    {loading.zipCode && (
                      <Loader
                        type="Oval"
                        color="#04d361"
                        height={20}
                        width={20}
                      />
                    )}
                  </div>
                  <br />
                  {hasZipcode && (
                    <>
                      <div className="grid-2f1f">
                        <InputBlock>
                          <input
                            type="text"
                            placeholder="Insira seu endereço aqui"
                            value={user.address}
                            onChange={e => {
                              setUser({
                                ...user,
                                address: e.target.value,
                              });
                            }}
                          />
                        </InputBlock>
                        <InputBlock>
                          <input
                            type="text"
                            placeholder="Insira o número"
                            value={user.number}
                            onChange={e => {
                              setUser({
                                ...user,
                                number: e.target.value,
                              });
                            }}
                          />
                        </InputBlock>
                      </div>
                      <br />
                      <div className="grid-1f1f">
                        <InputBlock>
                          <input
                            type="text"
                            placeholder="Insira sua cidade"
                            value={user.city}
                            onChange={e => {
                              setUser({
                                ...user,
                                city: e.target.value,
                              });
                            }}
                          />
                        </InputBlock>
                        <InputBlock>
                          <select
                            name="country"
                            value={user.country}
                            onChange={e => {
                              setUser({
                                ...user,
                                country: e.target.value,
                              });
                            }}
                          >
                            <option value="select">Selecione</option>
                            {countryList.map(country => {
                              return (
                                <option
                                  key={country.id.M49}
                                  value={country.nome.abreviado}
                                >
                                  {country.nome.abreviado}
                                </option>
                              );
                            })}
                          </select>
                        </InputBlock>
                      </div>
                    </>
                  )}
                </div>
              )}
              {step === 2 && (
                <div className="form tracking-in-expand">
                  <h3>Estilo Musical</h3>
                  <br />
                  <br />

                  <div className="list">
                    {musicList.map((music, index) => {
                      return (
                        <div key={music.type}>
                          <input
                            type="checkbox"
                            value={music.selected}
                            onChange={() => {
                              const itens = musicList;
                              itens[index].selected = true;

                              setMusicList(itens);
                            }}
                          />
                          <span>{music.type}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              {step === 3 && (
                <div className="form tracking-in-expand">
                  <h3>Qual seu sistema operacional?</h3>
                  <br />
                  <br />

                  <div className="list">
                    <div>
                      <input
                        type="radio"
                        name="os"
                        value="windows"
                        checked={os === 'windows'}
                        onChange={e => setOs(e.target.value)}
                      />
                      <span>Windows</span>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="os"
                        value="macOs"
                        checked={os === 'macOs'}
                        onChange={e => setOs(e.target.value)}
                      />
                      <span>MacOS</span>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="os"
                        value="linux"
                        checked={os === 'linux'}
                        onChange={e => setOs(e.target.value)}
                      />
                      <span>Linux</span>
                    </div>
                  </div>
                </div>
              )}
              {step === 4 && (
                <div className="form tracking-in-expand">
                  <h3>Gostaria de nos avaliar?</h3>
                  <br />
                  <br />

                  <div className="list">
                    <Rating
                      name="simple-controlled"
                      value={Number(user.rating)}
                      onChange={(event, newValue) => {
                        setUser({
                          ...user,
                          rating: newValue,
                        });
                      }}
                    />
                  </div>
                </div>
              )}
            </main>

            <footer>
              <button
                type="button"
                onClick={() => {
                  setStep(step - 1);
                  if (step === 0) {
                    previous();
                  }
                }}
              >
                Anterior
              </button>
              <div />
              <button
                className="btn-next"
                type="button"
                onClick={() => {
                  if (step === 0) {
                    const verify = verifyPersonal(user);

                    if (verify.error) {
                      toast.error(verify.message);
                    } else {
                      setStep(step + 1);
                    }
                  } else if (step === 1) {
                    const verify = verifyAddress(user);

                    if (verify.error) {
                      toast.error(verify.message);
                    } else {
                      setStep(step + 1);
                    }
                  } else if (step === 2) {
                    setStep(step + 1);
                  } else if (step === 3) {
                    if (os === '') {
                      toast.error('Selecione um Sistema Operacional');
                    } else {
                      setStep(step + 1);
                    }
                  } else if (step === 4) {
                    handleSubmit(user);
                  }
                }}
              >
                {step !== 4 ? 'Próximo' : 'Finalizar'}
              </button>
            </footer>
          </form>
        </section>
      </div>
    </Container>
  );
}

export default Register;

Register.propTypes = {
  previous: PropTypes.oneOfType([PropTypes.func]).isRequired,
  finishForm: PropTypes.oneOfType([PropTypes.func]).isRequired,
};
