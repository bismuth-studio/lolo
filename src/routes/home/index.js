import './style';

import React, {Component} from 'preact-compat';
import ReactDOM from 'preact-compat';
import axios from 'axios';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
// import { Router, route } from 'preact-router';
// import { createHashHistory } from 'history'
import Pimage from 'pimg/src/preact';
import Helmet from "preact-helmet";
import Waypoint from 'preact-waypoint';

class Song extends Component {
    constructor(props) {
      super(props)

      this.state = {
        data: null,
        songs: []
      }
    }
    componentWillMount() {
      const { song } = this.props

      axios.get(`https://auxcorde.fodaco.de/wp-json/wp/v2/video/${song.acf['link_youtube'].ID}`)
       .then(({data}) => this.setState({data}))
    }

    render() {
      const { song, isActive } = this.props
      const { data } = this.state
      if(!data) { return false }
      return (
        <div>
          {isActive &&
            <Helmet
              htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
              title={song.title.rendered}
               titleTemplate="Lolo Zouaï - %s"

               meta={[
                {name: "description", content:song.title.rendered },
                {image: "og:image", content:song.acf.album_art.url },
                {name: "google-site-verification", content:"7B-0o_N_96Y5WSkqD8N72SluCmnomDCKnH9VCQN6BMo"}
               ]}

              // defaultTitle="My Default Title"
              // titleAttributes={{itemprop: "name", lang: "en"}}
              // base={{target: "_blank", href: "http://mysite.com/"}}

              // link={[
              //     {rel: "canonical", href: "http://mysite.com/example"},
              //     {rel: "apple-touch-icon", href: "http://mysite.com/img/apple-touch-icon-57x57.png"},
              //     {rel: "apple-touch-icon", sizes: "72x72", href: "http://mysite.com/img/apple-touch-icon-72x72.png"}
              // ]}
              // script={[
              //     {src: "http://include.com/pathtojs.js", type: "text/javascript"},
              //     {type: "application/ld+json", innerHTML: `{ "@context": "http://schema.org" }`}
              // ]}
              // noscript={[
              //     {innerHTML: `<link rel="stylesheet" type="text/css" href="foo.css" />`}
              // ]}
              // style={[
              //   {type: "text/css", cssText: "body {background-color: blue;} p {font-size: 12px;}"}
              // ]}
              // onChangeClientState={(newState) => console.log(newState)}
            />}
          <h1>{song.title.rendered}</h1>
          <div className="art">  <img src={song.acf.album_art.url} /></div>
            <div className="links">
            <a target="_blank" href={song.acf.link_apple}><img src="https://auxcorde.fodaco.de/wp-content/uploads/2018/01/apple-min.png" /></a>
            <a target="_blank" href={song.acf.link_spotify}><img src="https://auxcorde.fodaco.de/wp-content/uploads/2018/01/spotify-min.png" /></a>
            <a target="_blank" href={song.acf.link_soundcloud}><img src="https://auxcorde.fodaco.de/wp-content/uploads/2018/01/soundcloud-min.png" /></a>
            <a target="_blank" href={data.acf.url}><img src="https://auxcorde.fodaco.de/wp-content/uploads/2018/01/youtube-min.png" /></a>
            <a target="_blank" href={song.acf.link_deezer}><img src="https://auxcorde.fodaco.de/wp-content/uploads/2018/09/deezer-min.png" /></a>
            <a target="_blank" href={song.acf.link_pandora}><img src="https://auxcorde.fodaco.de/wp-content/uploads/2018/09/pandora-min.png" /></a>
            <a target="_blank" href={song.acf.link_amazon}><img src="https://auxcorde.fodaco.de/wp-content/uploads/2018/01/amazon-min.png" /></a>
            <a target="_blank" href={song.acf.link_google}><img src="https://auxcorde.fodaco.de/wp-content/uploads/2018/01/google-min.png" /></a>
            <a target="_blank" href={song.acf.link_tidal}><img src="https://auxcorde.fodaco.de/wp-content/uploads/2018/01/tidal-min.png" /></a>
            <a target="_blank" href={song.acf.link_genius}><img src="https://auxcorde.fodaco.de/wp-content/uploads/2018/04/genius-min.png" /></a>

         </div>
        </div>
      )
    }
  }

export default class MainPage extends Component {
    constructor(props) {
      super(props)
      this.state = {
        current: 0,
        songs: [],
        isInitialScroll: true
      }
    }

    componentDidMount() {
      axios.get('https://auxcorde.fodaco.de/wp-json/wp/v2/singles?post_name=lolo-zouai')
      .then(res => {
        const { hash } = window.location

        let index = 0
        if (hash) {
          index = res.data.findIndex(song => song.acf.slug === hash.slice(1))

          if (index === -1) {
            index = 0
          }
        }

        Events.scrollEvent.register('end', (to, element) => {
          this.isScrolling = false
        });
        // initial scroll
        this.scrollTo(index)
        console.log(res.data)
        this.setState({songs: res.data})
      })
    }

    // componentDidUpdate(prevProps, prevState) {
    //   if (prevState.current !== this.state.current ) {
    //     console.log(this.state.current)
    //     const currentSong = this.state.songs[this.state.current]


    //   }
    // }

    scrollTo(index) {
      this.isScrolling = true
      scroll.scrollTo(index * window.innerHeight)
      this.setState(state => ({current: index}))
    }

    render() {
      const { current, isInitialScroll, songs } = this.state

      return (
        <div>


          {/* <Header>
              {
                songs.map((song, key) =>
                  <a key={key} href={`#${song.acf.slug}`} onClick={() => this.scrollTo(key)}>{song.title.rendered}</a>
                )
              }
              <button onClick={e => route('/cart')}>Cart</button>
          </Header> */}

          {songs.map((song, i) =>
            <Section key={i} className="custom-section" verticalAlign="true" color={song.acf.background_color} background_image={song.acf.background_image.url} title={song.title.rendered.toLowerCase()}>
              <Waypoint
                key={i}
                  onEnter={() => {
                    if (!this.isScrolling || current === i) {
                      this.setState(state => ({current: i}))
                      window.location.hash = song.acf.slug

                    }
                  }}
              />

              <Song song={song} isActive={i === current} />
            </Section>
            )

          }


          <div className="btnGroup">
              <button onClick={() => this.scrollTo(current - 1)} disabled={current === 0}>newer</button>
              <button onClick={() => this.scrollTo(current + 1)} disabled={current === songs.length - 1}>older</button>
          </div>
        </div>
      )
    }
}

class Section extends React.Component {
  constructor() {
      super();

      this.state = {
          windowHeight: 2 * window.innerHeight
      };
  }

  handleResize() {
    this.setState({
        windowHeight: window.innerHeight
    });
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener('resize', () => this.handleResize());
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.handleResize());
  }

  render() {

    const alignVertical = this.props.verticalAlign || this.context.verticalAlign;
    const backgroundContent = this.props.background_image ? `url(${this.props.background_image})` : this.props.color;

    const sectionStyle = {
      width: '100%',
      display: alignVertical ? 'table' : 'block',
      height: this.state.windowHeight,
      maxHeight: this.state.windowHeight,
      overflow: 'auto',
      autoScrolling:'false',
      scrollBar:'false',
      background: backgroundContent,
      paddingTop: this.context.sectionPaddingTop,
      paddingBottom: this.context.sectionPaddingBottom,
    };

    return (
      <div className={this.context.sectionClassName + (this.props.className ? ` ${this.props.className}` : '')}
        id={this.props.id} style={sectionStyle}>
        {alignVertical ? this._renderVerticalAlign() : this.props.children}
      </div>
    );
  }

  _renderVerticalAlign() {
    const verticalAlignStyle = {
        display: 'table-cell',
        verticalAlign: 'middle',
        width: '100%'
    };

    return (
        <div style={verticalAlignStyle}>
            {this.props.children}
        </div>
    );
  }
}

class Footer extends React.Component {
    render() {
        const footerStyle = {
            position: 'fixed',
            width: '100%',
            zIndex: '1',
            bottom: '0'
        };

        return (
            <footer style={footerStyle}>
                {this.props.children}
            </footer>
        );
    }
}

class Header extends React.Component {
    render() {
        const headerStyle = {
            position: 'fixed',
            width: '100%',
            zIndex: '1',
            top: '0'
        };

        return (
            <header style={headerStyle}>
                {this.props.children}
            </header>
        );
    }
}
