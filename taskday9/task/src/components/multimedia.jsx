import "./Multimedia.css";

export default function Multimedia() {
  return (
    <div className="multimedia-container">

      {/* Ice Cream Cards */}
      <div className="media-card ice">
        <img src="/ice1.jpg" alt="Ice Cream" />
        <h2>Ice Cream Sundae</h2>
        <video controls>
          <source src="/ice1.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="media-card ice">
        <img src="/ice2.webp" alt="Ice Cream" />
        <h2>Ice Cream Sundae</h2>
        <video controls>
          <source src="/video2.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="media-card ice">
        <img src="/ice3.jpg" alt="Ice Cream" />
        <h2>Ice Cream Sundae</h2>
        <video controls>
          <source src="/video3.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="media-card ice">
        <img src="/ice4.jpg" alt="Ice Cream" />
        <h2>Ice Cream Sundae</h2>
        <video controls>
          <source src="/video4.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Pizza Cards */}
      <div className="media-card pizza">
        <img src="/pizza1.webp" alt="Pizza" />
        <h2> Pizza</h2>
        <video controls>
          <source src="/video4.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="media-card pizza">
        <img src="/pizza1.webp" alt="Pizza" />
        <h2> Pizza</h2>
        <video controls>
          <source src="/video4.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="media-card pizza">
        <img src="/pizza3.webp" alt="Pizza" />
        <h2>French </h2>
        <video controls>
          <source src="/video4.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="media-card pizza">
        <img src="/pizza4.webp" alt="Pizza" />
        <h2> Pizza</h2>
        <video controls>
          <source src="/video4.mp4" type="video/mp4" />
        </video>
      </div>

    </div>
  );
}
