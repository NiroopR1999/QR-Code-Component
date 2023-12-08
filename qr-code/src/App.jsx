import "./App.scss";
import qrcode from "./assets/images/image-qr-code.png";
function App() {
  return (
    <div className="qr-code-container">
      <div className="qr-code-wrapper">
        <img src={qrcode} className="qrcode-image"></img>
        <div>
          <span className="title">
            Improve your front-end skills by building projects
          </span>
          <p className="body">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
