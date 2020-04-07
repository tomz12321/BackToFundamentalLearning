import React, { Component } from 'react';

/**
 * vjsEpisodeList.js
 *
 * Here is where we register a Video JS Component and
 * mount the React component to it when the player is ready.
 */
import EpisodeList from './EpisodeList';
import ReactDOM from 'react-dom';
import videojs from 'video.js';

const vjsComponent = videojs.getComponent('Component');

class vjsEpisodeList extends vjsComponent {

  constructor(player, options) {
    super(player, options);

    /* Bind the current class context to the mount method */
    this.mount = this.mount.bind(this);

    /* When player is ready, call method to mount React component */
    player.ready(() => {
      this.mount();
    });
    
    /* Remove React root when component is destroyed */
    this.on("dispose", () => {
      ReactDOM.unmountComponentAtNode(this.el())
    });
  }

  /**
   * We will render out the React EpisodeList component into the DOM element
   * generated automatically by the VideoJS createEl() method.
   *
   * We fetch that generated element using `this.el()`, a method provided by the
   * vjsComponent class that this class is extending.
   */
  mount() {

    const videoJsOptions = {
        autoplay: false,
        controls: true,
        sources: [{
          src: 'https://tom-test-1234.s3-ap-southeast-1.amazonaws.com/BigBuckBunny.mp4',//'/path/to/video.mp4',
          type: 'video/mp4'
        }]
      }
      
    ReactDOM.render(
        <React.Fragment>
            {<EpisodeList vjsComponent={this} 
                body= { 
                  ""
                 }
            />}
        </React.Fragment>
    , this.el() );
  }
}

/**
 * Make sure to register the vjsComponent so Video JS knows it exists
 */
vjsComponent.registerComponent('vjsEpisodeList', vjsEpisodeList);

export default vjsEpisodeList;