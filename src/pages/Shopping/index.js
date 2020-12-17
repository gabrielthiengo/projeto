import React from 'react';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Navbar from '~/components/Navbar';

import './styles.css';

function Shopping() {
  return (
    <div className="wrapper-container">
      <Navbar />

      <main>
        <section className="shopping-section">
          <h2 className="w3-animate-right">Suas Compras</h2>

          <hr />

          <div className="legend w3-animate-left">
            <div className="legend-content">
              <div className="legend-color" style={{ background: 'red' }} />
              <div className="legend-text">Pendente</div>
            </div>
            <div className="legend-content">
              <div className="legend-color" style={{ background: 'orange' }} />
              <div className="legend-text">Aceito</div>
            </div>
            <div className="legend-content">
              <div className="legend-color" style={{ background: 'blue' }} />
              <div className="legend-text">Em Tratamento</div>
            </div>
            <div className="legend-content">
              <div className="legend-color" style={{ background: 'green' }} />
              <div className="legend-text">Enviado</div>
            </div>
          </div>

          <div className="w3-animate-bottom">
            <Accordion>
              <AccordionSummary
                style={{ borderTop: '1px solid red' }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <div className="accordion-title">
                    <h4>Camisa do Cruzeiro</h4>
                    <div className="atualization">
                      <h5>Data da compra</h5>
                      <p>22/10/2020</p>
                    </div>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="accordion-content">
                    <div className="buy-detail">
                      <div>
                        <p>Quantidade: 2x</p>
                        <p>Valor: R$ 119.90</p>
                        <p>Total: R$ 239.80</p>
                        <br />
                        <button type="button" className="btn-cancel">
                          Cancelar Compra
                        </button>
                        <hr />
                        <div className="payments">
                          <p>Forma de pagamento:</p>
                          <p>3x de R$ 80.00</p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="user-detail">
                      <p style={{ fontSize: '1.2rem' }}>Endereço de entrega:</p>
                      <p>
                        Rua Caxambu, 205, Jardim Balneário, Contagem-MG CEP:
                        32.110-190
                      </p>
                    </div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion style={{ borderTop: '1px solid blue' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <div className="accordion-title">
                    <h4>Camisa do Flamengo</h4>
                    <div className="atualization">
                      <h5>Data da compra</h5>
                      <p>22/10/2020</p>
                    </div>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="accordion-content">
                    <div className="buy-detail">
                      <div>
                        <p>Quantidade: 2x</p>
                        <p>Valor: R$ 119.90</p>
                        <p>Total: R$ 239.80</p>
                        <br />
                        <button type="button" className="btn-cancel">
                          Cancelar Compra
                        </button>
                        <hr />
                        <div className="payments">
                          <p>Forma de pagamento:</p>
                          <p>3x de R$ 80.00</p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="user-detail">
                      <p style={{ fontSize: '1.2rem' }}>Endereço de entrega:</p>
                      <p>
                        Rua Caxambu, 205, Jardim Balneário, Contagem-MG CEP:
                        32.110-190
                      </p>
                    </div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion style={{ borderTop: '1px solid orange' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <div className="accordion-title">
                    <h4>Camisa do Coritiba</h4>
                    <div className="atualization">
                      <h5>Data da compra</h5>
                      <p>22/10/2020</p>
                    </div>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="accordion-content">
                    <div className="buy-detail">
                      <div>
                        <p>Quantidade: 2x</p>
                        <p>Valor: R$ 119.90</p>
                        <p>Total: R$ 239.80</p>
                        <br />
                        <button type="button" className="btn-cancel">
                          Cancelar Compra
                        </button>
                        <hr />
                        <div className="payments">
                          <p>Forma de pagamento:</p>
                          <p>3x de R$ 80.00</p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="user-detail">
                      <p style={{ fontSize: '1.2rem' }}>Endereço de entrega:</p>
                      <p>
                        Rua Caxambu, 205, Jardim Balneário, Contagem-MG CEP:
                        32.110-190
                      </p>
                    </div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Shopping;
