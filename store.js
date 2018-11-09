import * as React from 'react';

import csvReader from "./views/components/csvReader.js";

/**
 * If you want to share data between multiple root components, you'll need a
 * global store like Redux. This is similar to building a web app where you
 * want to synchronize data between a sidebar and a main view - just extended
 * into three dimensions.
 * To simplify this sample, we implement a trivial Redux-like store that will
 * ensure all of our elements are synchronized.
 */
const State = {
  elements: [],
  posts: "Whatever",
  current: -1,
};

const listeners = new Set();

function updateComponents() {
  for (const cb of listeners.values()) {
    cb();
  }
}

export function initialize() {
  let r = new csvReader();
  let properties = require("./views/components/elementProperties.json");
  var allElements = r.processData(properties);

  State.elements = allElements;
  updateComponents();
  //debugger;
}
//const POLY_PATH = 'https://poly.googleapis.com/v1/assets?';
//export function initialize(apiKey) {
//  // Fetch the top 5 posts from Google Poly
//  const options = {
//    curated: true,
//    format: 'GLTF2',
//    key: apiKey,
//    pageSize: 5,
//  };
//  const queryString = Object.keys(options)
//    .map(k => `${k}=${options[k]}`)
//    .join('&');
//  fetch(POLY_PATH + queryString)
//    .then(response => response.json())
//    .then(body => {
//      const entries = body.assets.map(asset => {
//        const objSource = asset.formats.filter(
//          format => format.formatType === 'GLTF2'
//        )[0];
//        return {
//          id: asset.name,
//          name: asset.displayName,
//          author: asset.authorName,
//          description: asset.description,
//          source: objSource,
//          preview: asset.thumbnail.url,
//        };
//      });
//
//      State.posts = entries;
//      updateComponents();
//    });
//}

export function setCurrent(value) {
  State.current = value;
  updateComponents();
}

export function connect(Component) {
  //debugger;
  return class Wrapper extends React.Component {
    state = {
      posts: State.posts,
      elements: State.elements,
      current: State.current,
    };

    _listener = () => {
      this.setState({
        posts: State.posts,
        elements: State.elements,
        current: State.current,
      });
    };

    componentDidMount() {
      listeners.add(this._listener);
    }

    componentWillUnmount() {
      listeners.delete(this._listener);
    }

    render() {
      return (
        <Component
          {...this.props}
          posts={this.state.posts}
          elements={this.state.elements}
          current={this.state.current}
        />
      );
    }
  };
}
