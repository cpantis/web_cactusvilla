export default function PageIntro({ eyebrow, title, text }) {
  return (
    <section className="page-intro shell">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h1>{title}</h1>
      {text ? <p className="page-intro-text">{text}</p> : null}
    </section>
  );
}
