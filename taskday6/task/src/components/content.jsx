export default function Content() {
  return (
    <section className="content">
      <div className="content__text">
        <span className="content__tag">NEW PRODUCT</span>

        <h2 className="content__title">
          The Twist of <span>Healthy Yogurt</span>
        </h2>

        <p className="content__desc">
          This website template has been designed by
          freewebsitetemplates.com for you, for free.
          You can replace all this text with your own text.
        </p>
      </div>

      <div className="content__image">
        <img src= "/yogurt.jpg" alt="Healthy Yogurt" />
      </div>
    </section>
  );
}
