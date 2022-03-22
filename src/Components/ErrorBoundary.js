import React from 'react';
import {Text} from 'react-native';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error) {
    return {hasError: true};
  }

  render() {
    if (this.state.hasError) {
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
