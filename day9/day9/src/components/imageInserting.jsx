
// import image from "./image/rose1.avif";
// import Audio from "./audio/audio2.mp3";
// import Video from "./image/video1.mp4";
// import "./image.css";
// export default function ImageInserting(){
//     return(
//         <>
//         <h1>Image Adding from the public Folder</h1>
//         <img src="rose1.jpeg" width="300px"></img>

//         <h2>image adding through es6 way</h2>
//         <img src={image} width="300px"></img>

//         <h2>Audio Adding from the public</h2>
//         <audio controls style={{ position: "relative", left: "20px" }}>
//         <source src="audio1.mp3" type="audio/mpeg" />
//         </audio>
        
//         <h4>Audio Inserting through ES6 way</h4>
//         <audio controls style={{ position: "relative", left: "4px" }}>
//         <source src={Audio} type="audio/mpeg" />
//         </audio>
        
//         <h2>Video including through public folder</h2>
//         <video controls width="300">
//         <source src="/video.mp4" type="video/mp4" />
//         </video>
        
//         <h4>Video inserting through ES6 way</h4>

//         <video
//         controls
//         width="300"
//         height="200"
//         style={{ position: "relative", left: "9px" }}
//         >
//         <source src={Video} type="video/mp4" />
//         </video>




//         </>
//     )
// }


import image from "./image/rose1.avif";
import Audio from "./audio/audio2.mp3";
import Video from "./image/video1.mp4";
import "./image.css";
import Data from "../components/jsonData/data.json";


export default function ImageInserting() {
  return (
    <>
      <h1>Image Adding from the public Folder</h1>
      <img src="/rose1.jpeg" className="media-img" />

      <h2>Image adding through ES6 way</h2>
      <img src={image} className="media-img" />

      <h2>Audio Adding from the public</h2>
      <audio controls className="media-audio">
        <source src="/audio1.mp3" type="audio/mpeg" />
      </audio>

      <h4>Audio Inserting through ES6 way</h4>
      <audio controls className="media-audio">
        <source src={Audio} type="audio/mpeg" />
      </audio>

      <h2>Video including through public folder</h2>
      <video controls className="media-video">
        <source src="/video.mp4" type="video/mp4" />
      </video>

      <h4>Video inserting through ES6 way</h4>
      <video controls className="media-video">
        <source src={Video} type="video/mp4" />
      </video>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
        {Data.map((data) => (
          <div
            key={data.id}
            style={{
              border: "2px solid blue",
              backgroundColor: "yellow",
              color: "black",
              textAlign: "center",
              padding: "10px",
              margin: "10px",
              width: "200px",
              height: "150px",
              borderRadius: "10px",
            }}
          >
            <p>{data.name}</p>
            <p>{data.email}</p>
            <p>{data.password}</p>
          </div>
        ))}
      </div>
    
    </>
  );

  
}

