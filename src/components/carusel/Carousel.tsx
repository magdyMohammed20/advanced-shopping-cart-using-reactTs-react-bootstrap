import Carousel from "react-bootstrap/Carousel";
import "./style.css";
export default function Carosel() {
  return (
    <div>
      <section className="slider" style={{ height: "calc(100vh - 56px)" }}>
        <Carousel style={{ height: "100%" }} fade>
          <Carousel.Item className="slide" style={{ height: "100%" }}>
            <img
              style={{ height: "100%", objectFit: "cover" }} // Set the height here
              className="d-block w-100"
              src={
                "https://media.gettyimages.com/id/1197494143/photo/men-eating-vegan-creamy-roasted-pumpkin-soup.jpg?s=1024x1024&w=gi&k=20&c=jtCvJMbl6pxfoWHagpxYHr4bTVheECtlGqDToZM89NA="
              }
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item className="slide" style={{ height: "100%" }}>
            <img
              style={{ height: "100%", objectFit: "cover" }} // Set the height here
              className="d-block w-100"
              src={
                "https://media.gettyimages.com/id/1156100363/photo/raspberry-coulis.jpg?s=1024x1024&w=gi&k=20&c=fjIoKSkKuJdmnK-wfaCF8MpeeJO48tnMwfbTr9vGZ-A="
              }
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item className="slide" style={{ height: "100%" }}>
            <img
              style={{ height: "100%", objectFit: "cover" }} // Set the height here
              className="d-block w-100"
              src={
                "https://media.gettyimages.com/id/1352855347/photo/italian-seafood-pasta.jpg?s=1024x1024&w=gi&k=20&c=cgLuTHlyrp53VXYxOC_5NtvmSdnThXnY6tjMoGchzzc="
              }
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </section>
    </div>
  );
}
