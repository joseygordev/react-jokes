import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// Config
import {metrics} from '../../config/metrics';

// Selectors
import getJoke from '../../store/modules/jokes/selectors';

// Actions
import {getJokeByCategory} from '../../store/modules/jokes/actions';

// Services
import NetworkDetector from '../../HOC/NetworkDetector';

// Hooks
import {useMediaQuery} from '../../hooks/useMediaQuery';

// Components
import Button from '../../components/Button';
import Container from '../../components/Container';
import Error from '../../components/Error';
import List from '../../components/List';
import Loader from '../../components/Loader';
import Logo from '../../components/Logo';

// styles
import styles from './styles';

const JokeScreen = ({connection, jokeCache, getJokeByCategory, history, match}) => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const isPageWide = useMediaQuery(metrics.tablet);

  const {category} = match.params;
  const {isDisconnected} = connection;

  /**
   * 
   * Handle joke and save to local state
   * 
   * @param {Objet} data 
   */
  const handleJoke = (data = {}) => {
    setItem([{
      title: category,
      content: data.value,
      ...data
    }]);
  };

  /**
   * Fetch joke by category from Store if it exists
   */
  const getDataFromStore = () => {
    setLoading(true);
    if (jokeCache.id) {
      handleJoke(jokeCache);
    } else {
      setError(true);
    }

    setLoading(false);
  };

  /**
   * Fetch joke by category from API
   */
  const getData = async () => {
    setLoading(true);
    getJokeByCategory(category)
      .then(handleJoke)
      .catch(() => {
        setError(true);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    setLoading(true);

    if (isDisconnected) {
      getDataFromStore();
    } else {
      getData();
    }
  }, []);

  /**
   * Renders error
   */
  const renderError = () => {
    return <Error />;
  };

  /**
   * Renders content
   */
  const renderContent = () => {
    if (loading)
      return <Loader />;

    return (
      <React.Fragment>
        <List items={item} />
      </React.Fragment>
    );
  };

  return (
    <Container>
      <Logo />
      {error ? renderError() : renderContent()}
      <div style={{...styles.buttons, ...(isPageWide && styles.buttonsMobile)}}>
        <Button label="Back" onClick={() => history.push('/')} />
        {!isDisconnected && <Button label="New search" onClick={() => getData()} />}
      </div>
    </Container>
  );
};

JokeScreen.propTypes = {
  connection: PropTypes.shape({
    isDisconnected: PropTypes.bool.isRequired
  }).isRequired,
  jokeCache: PropTypes.shape({
    id: PropTypes.string
  }),
  getJokeByCategory: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      category: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
};
JokeScreen.defaultProps = {
  jokeCache: {
    id: ''
  },
  getJokeByCategory: () => {}
};

const mapStateToProps = (state, props) => ({
  connection: state.data.connection,
  jokeCache: getJoke(state.data, {category: props.match.params.category})
});

export default NetworkDetector(connect(mapStateToProps, {getJokeByCategory})(JokeScreen));
