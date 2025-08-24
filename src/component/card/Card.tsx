type CardProps = {
  image: string;
  name: string;
};

function Card({ image, name }: CardProps) {
  return (
    <div className="card w-full bg-base-100 shadow-sm">
      <figure className="px-10 pt-10">
        <img src={image} alt={image} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions">
          <button className="btn btn-primary">Explore</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
