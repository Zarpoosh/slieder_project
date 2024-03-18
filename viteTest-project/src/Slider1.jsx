import img1 from"./image/img1.jpg"
import img2 from"./image/img2.jpg"
import img3 from"./image/img3.jpg"
import img4 from"./image/img4.jpg"
import img5 from"./image/img5.jpg"
import img6 from"./image/img6.jpg"
import img7 from"./image/img7.jpg"
import img8 from"./image/img8.jpg"
import "./slider1.css";

function Slider1() {
  return (
    <>
      <div className="box">
        <span >
          <img src={img1} alt="" />
        </span>
        <span >
          <img src={img2} alt="" />
        </span>
        <span >
          <img src={img3} alt="" />
        </span>
        <span >
          <img src={img4} alt="" />
        </span>
        <span >
          <img src={img5} alt="" />
        </span>
        <span >
          <img src={img6} alt="" />
        </span>
        <span >
          <img src={img7} alt="" />
        </span>
        <span >
          <img src={img8} alt="" />
        </span>
      </div>
    </>
  );
}

export default Slider1;
