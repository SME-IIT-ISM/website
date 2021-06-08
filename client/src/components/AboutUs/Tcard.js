import "./timeline.css";

const Tcard = (props) => {
  const day = props.day;
  const achievement = props.ach;
  const month = props.m;
  const title = props.title;
  const year = props.year;

  return (
    <div class="timeline">
      <div class="timeline__group">
        <span class="timeline__year time" aria-hidden="true">
          {year}
        </span>
        <div class="timeline__card card">
          <header class="card__header">
            <time class="time">
              <span class="time__day">{day}</span>
              <span class="time__month">{month}</span>
            </time>
            <h3 class="card__title r-title">{title}</h3>
          </header>
          <div class="card__content">
            <p>{achievement}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tcard;
