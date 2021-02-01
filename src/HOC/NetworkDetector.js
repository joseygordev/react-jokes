import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {setConenction} from '../store/modules/connection/actions';

// Components
import ConnectionDown from '../components/ConnectionDown';

export default function (ComposedComponent) {
  class NetworkDetector extends Component {
    state = {
      isDisconnected: false
    }

    componentDidMount() {
      this.handleConnectionChange();
      window.addEventListener('online', this.handleConnectionChange);
      window.addEventListener('offline', this.handleConnectionChange);
    }

    componentWillUnmount() {
      window.removeEventListener('online', this.handleConnectionChange);
      window.removeEventListener('offline', this.handleConnectionChange);
    }

    handleConnectionChange = () => {
      // eslint-disable-next-line no-shadow
      const { setConenction } = this.props;
      const condition = navigator.onLine ? 'online' : 'offline';
      
      if (condition === 'online') {
        const webPing = setInterval(
          () => {
            fetch('//google.com', {
              mode: 'no-cors',
            })
              .then(() => {
                setConenction(false);
                this.setState({isDisconnected: false}, () => {
                  return clearInterval(webPing);
                });
              }).catch(() => {
                setConenction(true);
                this.setState({isDisconnected: true});
              });
          }, 2000);
        return;
      }

      setConenction(true);
      // eslint-disable-next-line consistent-return
      return this.setState({isDisconnected: true});
    }

    render() {
      const { isDisconnected } = this.state;
      return (
        <React.Fragment>
          { isDisconnected && <ConnectionDown /> }
          <ComposedComponent {...this.props} />
        </React.Fragment>
      );
    }
  }

  NetworkDetector.propTypes = {
    setConenction: PropTypes.func.isRequired
  };
  NetworkDetector.defaultProps = {
   
  };

  return connect(null, {setConenction})(NetworkDetector);
}
