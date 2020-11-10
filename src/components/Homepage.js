import home1 from '../statics/home1.png';
import home2 from '../statics/home2.png';
import home3 from '../statics/home3.png';

const Homepage = () => {
  return (
    <div className="homepage">
      <section className="hero">
        <div className="left">
          <h1>Come to our store we have...whatever</h1>
          <p>
            BAba di boupi BAba di boupi BAba di boupi BAba
            di boupi BAba di boupi BAba di boupi BAba di
            boupi BAba di boupi{' '}
          </p>
        </div>
        <div className="right">
          <img src={home1}></img>
        </div>
      </section>
      <section className="littleGuy">
        <div className="left">
          <img src={home2}></img>
        </div>
        <div className="right">
          <h1>Come to our store we have...whatever</h1>
          <p>
            BAba di boupi BAba di boupi BAba di boupi BAba
            di boupi BAba di boupi BAba di boupi BAba di
            boupi BAba di boupi.
          </p>
        </div>
      </section>
      <section className="deer">
        <div className="left">
          <h1>Come to our store we have...whatever</h1>
          <p>
            BAba di boupi BAba di boupi BAba di boupi BAba
            di boupi BAba di boupi BAba di boupi BAba di
            boupi BAba di boupi.
          </p>
        </div>
        <div className="right">
          <img src={home3}></img>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
