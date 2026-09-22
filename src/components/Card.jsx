function Card({ title, description }) {
  return (
    <article className="skill-card project-card">
      <div className="skill-icon">🚀</div>

      <h3>{title}</h3>

      <p>{description}</p>

      <button className="project-button">
        View Project
      </button>
    </article>
  );
}

export default Card;