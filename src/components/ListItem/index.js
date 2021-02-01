import React, {useState} from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './styles';

const ListItem = ({item, onClick}) => {
  const [hoverActive, setHoverActive] = useState(false);

  const renderContent = () => {
    return (
      <React.Fragment>
        {item.title && <h2 style={styles.listTitle}>{item.title}</h2>}
        {item.content && <p style={styles.listContent}>{item.content}</p>}
      </React.Fragment>
    );
  };

  const render = () => {
    if (onClick) {
      return (
        <button 
          style={{...styles.listButton, ...(hoverActive && styles.listButtonHover)}}
          onMouseEnter={() => setHoverActive(true)}
          onMouseLeave={() => setHoverActive(false)} 
          data-testid="button"
          type="button"
          onClick={() => onClick(item)}>
          {renderContent()}
        </button>
      );
    }
     
    return (
      <div style={styles.listLine}>
        {renderContent()}
      </div>
    );
    
  };

  return render();
};

ListItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }),
  onClick: PropTypes.func,
};
ListItem.defaultProps = {
  item: {
    title: '',
    content: '',
  }
};

export default ListItem;
