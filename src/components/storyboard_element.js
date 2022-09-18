import React, { Component } from 'react';

export class StoryboardElement extends Component {
    render() {
        const markup = (
<div style={this.props.style}>
  {this.props.children}
</div>
        );

        return markup;
    }
}
