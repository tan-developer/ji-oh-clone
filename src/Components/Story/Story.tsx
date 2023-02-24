import styles from "./Story.module.scss";

const Story: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__text}>
        <h1>
          Through my designs, I hope women believe in their own power, their
          freedom and that their confidence can carry their image, without
          caring about whether an impression is made.
        </h1>
        <p>
          JI OH is a New York City based luxury womenswear label founded in
          2014. In JI OH, opposites create heartfelt drama, punctuated by the
          trueness of Ji’s personal expression through design to make a delicate
          balance for today’s woman.
        </p>
        <p>
          Best known for androgynous, uniform dressing, Ji Oh designs for women
          who believe in comfort and versatility yet with ultimate
          sophistication. It is about making a seamless connection between their
          work, the lifestyle they’re advocating and the life that they lead.
          With the intention of freeing women from boundaries, JI OH
          reinterprets classics with a powerful understatement of balance and
          proportion.
        </p>

        <div className={styles.container__img}>
          <img
            src="https://jiohny.com/wp-content/uploads/2016/05/about-content-img-1.jpg"
            alt=""
          />
        </div>
        <p>
          Born and raised in South Korea, Ji attended Central Saint Martins in
          London and moved to New York City in 2005 where she continued her
          studies at Parsons Design School. Since the launch of her namesake
          label, Ji has quickly gained recognition with multiple sponsorship
          wins from the Korea Fashion Association, nominations as a FGI Rising
          Star Finalist from 2014-2016 and was named a Samsung Fashion Design
          Fund Finalist in 2016. Ji Oh is a{" "}
          <a
            href="https://cfda.com/news/meet-the-2016-cfdavogue-fashion-fund-finalists"
            target="_blank"
            rel="noreferrer"
          >
            2016 CFDA/Vogue Fashion Fund Finalist
          </a>{" "}
          and current{" "}
          <a
            href="http://cfda.com/programs/cfda-fashion-incubator"
            target="_blank"
            rel="noreferrer"
          >
            CFDA incubator 4.0
          </a>{" "}
          awardee.
        </p>
      </div>
      <div className={styles.container__image}>
        <img src="https://jiohny.com/wp-content/uploads/2016/05/about-718x1069.jpg" alt="" />
      </div>
    </div>
  );
};

export default Story;
