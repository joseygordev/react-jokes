import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// Actions
import {getJokesCategories} from '../../store/modules/categories/actions';
 
// Services
import NetworkDetector from '../../HOC/NetworkDetector';

// Components
import Container from '../../components/Container';
import Error from '../../components/Error';
import List from '../../components/List';
import Loader from '../../components/Loader';
import Logo from '../../components/Logo';

const JokesScreen = ({categories, connection, history, getJokesCategories}) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getDataFromStore = () => {
    const {allIds = []} = categories;

    if (allIds.length) {
      setItems(allIds.map((item, index) => ({
        id: index.toString(),
        title: item
      })));
      setLoading(false);
    }
  };

  const getData = () => {
    setLoading(true);

    const {isDisconnected} = connection;

    if (isDisconnected)
      return getDataFromStore();

    return getJokesCategories()
      .catch(() => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }; 
  
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getDataFromStore();
  }, [categories]);

  /**
   * Renders error
   */
  const renderError = () => {
    return <Error />;
  };

  /**
   * 
   * On click button navigate to route /joke/:category
   * 
   * @param {String} item 
   */
  const onClickItem = ({title}) => history.push(`/joke/${title}`);

  /**
   * Renders content
   */
  const renderContent = () => {
    if (loading)
      return <Loader />;

    return <List items={items} onClick={onClickItem} />;
  };

  return (
    <Container>
      <Logo />
      {error ? renderError() : renderContent()}
    </Container>
  );
};

JokesScreen.propTypes = {
  categories: PropTypes.shape({
    allIds: PropTypes.array
  }),
  connection: PropTypes.shape({
    isDisconnected: PropTypes.bool.isRequired
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  getJokesCategories: PropTypes.func.isRequired
};
JokesScreen.defaultProps = {
  categories: {
    allIds: []
  }
};

const mapStateToProps = state => ({
  categories: state.data.categories,
  connection: state.data.connection
});

export default NetworkDetector(connect(mapStateToProps, {getJokesCategories})(JokesScreen));
