import React from 'react';
import {Text} from 'react-native';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error) {
    // Bir sonraki render'da son çare arayüzünü göstermek için
    // state'i güncelleyin.
    return {hasError: true};
  }

  render() {
    if (this.state.hasError) {
      // İstediğiniz herhangi bir son çare arayüzünü render edebilirsiniz.
      return (
        <Text
          style={{
            fontSize: 30,
            alignSelf: 'center',
            fontWeight: 'bold',
            color: 'red',
          }}>
          Something went wrong.
        </Text>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
