import React, { Component } from "react";

export default class Creature extends Component {
    render() {
        return <li>
            <div className="image-container">
                <img
                    alt={this.props.bovid.url}
                    src={this.props.bovid.url} />
            </div>

            <div className="info-container">
                <h2>{this.props.bovid.title}</h2>
                <p className="creature-description">{this.props.bovid.description}</p>
                <p className="creature-keyword">{this.props.bovid.keyword}</p>
            </div>
        </li>
    }
}