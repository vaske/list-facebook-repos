import React, { Component } from 'react';

export default class Loader extends Component {

    constructor(props) {
        super(props)

        this.renderLoader = this.renderLoader.bind(this);
    }

    renderLoader() {
        if (!this.props.loaded) {
            return (
                <div className="preloader">
                    loading...
                </div>
            )
        }
    }

    render() {
        const contentClass = !this.props.loaded ? 'is-loading' : ''

        return (
            <div className="column is-three-quarters preloader-container">
                { this.renderLoader() }
                <div className={`preloader-content ${contentClass}`}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
