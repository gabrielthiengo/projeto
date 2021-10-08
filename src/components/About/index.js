import React from 'react';

import './styles.css';

function About() {
  return (
    <div id="about" className="about-container">
      <div className="about-history">
        <div className="about-intro">
          <h2>Nossa História</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here, content here, making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for lorem ipsum will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
      <div className="about-personal">
        <div className="about-detail">
          <img
            src="https://scontent.fplu8-1.fna.fbcdn.net/v/t1.6435-9/47389797_2124743050879665_5167500592355999744_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGBlwTj6saG4DQyu4Bx1JUi3EiinTwOztTcSKKdPA7O1GfVEBm1lx8QkXm3veyTRykPS2yBYEu_XLETqBdqa72H&_nc_ohc=VGXeozZ2V2oAX9H_Z6P&_nc_ht=scontent.fplu8-1.fna&oh=e2fa6f2324865f2867e94af6d2d1725c&oe=6183FC31"
            alt=""
          />
          <h3>Gabriel Thiengo</h3>

          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo
          </p>
        </div>
        <div className="about-detail">
          <img
            src="https://scontent.fplu8-1.fna.fbcdn.net/v/t1.6435-9/40243151_1770979103021359_4418873563436548096_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_eui2=AeEkqdVxSDLGsUWcK5f0XMZVPpnlE2X1Ea8-meUTZfURr98US0IXDm6w3VNkFRz_z_nYCtlEB9osmGJbV64YH4CK&_nc_ohc=39a5eD8wK0wAX_di94A&_nc_ht=scontent.fplu8-1.fna&oh=b6f3acaa20ff4d09390c971de111e249&oe=61830433"
            alt=""
          />
          <h3>Mariana Braga</h3>

          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
