export default function Ipodui() {
  return (
    <>
      <div className="main">
        <div className="screen"></div>
        <div className="touchPad">
          <div className="outerCircular">
            <h3 id="upward-scroll">
              <b>MENU</b>
            </h3>
            <img
              id="forward-icon"
              src="https://t3.ftcdn.net/jpg/06/11/98/38/240_F_611983890_dg5f16BSawuh4Eu2kyN6CfgZ7Gx0BIFN.jpg"
              alt="no found"
            />
            <img
              id="backward-icon"
              src="https://t3.ftcdn.net/jpg/01/40/91/02/240_F_140910276_NhpJrqBwVUnxzuOoTPZITjG2YiEbBdGO.jpg"
              alt="not found"
            />

            <img
              id="start"
              src="https://image.shutterstock.com/image-vector/play-button-icon-260nw-232671499.jpg"
              alt="not found"
            />
            <img
              id="pause"
              src="https://image.shutterstock.com/image-vector/pause-icon-vector-illustration-flat-260nw-1616095273.jpg"
              alt="not found"
            />
            <div className="innerCircular"></div>
          </div>
        </div>
      </div>
    </>
  );
}
