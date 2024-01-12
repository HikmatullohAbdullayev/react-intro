import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <h1 className="title">Narxlar</h1>
        <div className="content">
          <ul className="list">
            <h2 className="subTitle">Pro</h2>
            <li className="list__item active">
              <p>1% / chegirma</p>
            </li>
            <li className="list__item">
              <p>Zoom uchrashuv</p>
            </li>
            <li className="list__item">
              <p>Yopiq guruhga kirish</p>
            </li>
          </ul>
          <ul className="list">
            <h2 className="subTitle">Premium</h2>
            <li className="list__item active">
              <p>50% / chegirma</p>
            </li>
            <li className="list__item">
              <p>Zoom uchrashuv</p>
            </li>
            <li className="list__item">
              <p>Yopiq guruhga kirish</p>
            </li>
            <li className="list__item">
              <p>24/7 yordam</p>
            </li>
          </ul>
          <ul className="list">
            <h2 className="subTitle">Platinum</h2>
            <li className="list__item active">
              <p>100% / chegirma</p>
            </li>
            <li className="list__item">
              <p>Zoom uchrashuv</p>
            </li>
            <li className="list__item">
              <p>Yopiq guruhga kirish</p>
            </li>
            <li className="list__item">
              <p>24/7 yordam</p>
            </li>
            <li className="list__item">
              <p>Serfetikat</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
