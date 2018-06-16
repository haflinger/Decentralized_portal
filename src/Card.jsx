import React from "react";
import "./Card.css";

export default class Card extends React.Component {
  render() {
    const dweb = this.props.dweb;

    // "ens": "bitconnect.eth",
    // "description": "legit site with good future prospects",
    // "avatar": "http://i0.kym-cdn.com/entries/icons/original/000/025/224/bitconnect.jpg",
    // "category": "finance"

    let ens = dweb.ens || "?";
    let description = dweb.description || "Awesome decentralized website";
    let category = dweb.category || "general";
    let avatar = dweb.avatar || "default";

    return (
      <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item mb-4 card-max-width">
        <a href={"http://" + ens}>
          <div className="card h-100 card-clickable">
            <div className="p-1 hover-animation" data-text={description}>
              <div className="square-box">
                <div className="square-content">
                  <img className="square-img" src={avatar} alt="Card cap" />
                </div>
              </div>
            </div>
            <div className="card-body text-nowrap">
              <h5 className="card-title">{ens}</h5>
              <div className="d-flex justify-content-between">
                <span className="card-type">{category}</span>
                <span className={"card-tag active"}>LIVE</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}
