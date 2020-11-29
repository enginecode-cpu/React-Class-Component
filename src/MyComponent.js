import React from 'react';
import PropTypes from 'prop-types';

function MyComponent({className, name, children, favoriteNumber}) {
  return (
    <div className={className}>
      나의 이름은 {name} 입니다. <br />
      chilren의 값은 {children} 입니다. <br />
      좋아하는 숫자는 {favoriteNumber} 입니다
    </div>
  )
}

MyComponent.defaultProps = {
  className: '기본 클래스 이름',
  name: '기본 이름'
}

MyComponent.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
}

export default MyComponent;