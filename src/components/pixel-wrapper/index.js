import { h, Component } from 'preact';
import Helmet from "preact-helmet";
import $ from 'jquery';

class PixelWrapper extends Component {
  constructor(props) {
    super(props)
    this.loadScript = this.loadScript.bind(this)
    this.loadFb = this.loadFb.bind(this)
  }

componentDidMount(){
  this.loadScript('https://www.googletagmanager.com/gtag/js?id=AW-993583143')
 // google
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-993583143');
  gtag('event', 'conversion', {
    'send_to': 'AW-993583143/4TE-COKbt5gBEKfA49kD',
    'aw_remarketing_only': true
  });
  // end google

  this.loadFb()
}

 loadScript (src){
  var tag = document.createElement('script')
  tag.async = true;
  tag.src = src;
  document.body.appendChild(tag)
}

loadFb(){
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
  document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '457646594335935');
  fbq('track', 'PageView');

  var pixel = $('<noscript><img height="1" width="1" style="display:none"src="https://www.facebook.com/tr?id=457646594335935&ev=PageView&noscript=1"/></noscript>')
  document.body.appendChild(pixel[0])
}

  render() {
    return (
      <div class="pixel-wrapper" style="display: none;">
            </div>
    )
  }
}

export default PixelWrapper
