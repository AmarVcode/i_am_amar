import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { GlassCard } from './Card';
import { Text } from './Typography';
import { PrimaryButton } from './Button';

const ErrorContainer = styled(GlassCard)`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  text-align: center;
`;

const ErrorIcon = styled.div`
  font-size: 4rem;
  color: #ff6b6b;
  margin-bottom: 1rem;
`;

const ErrorTitle = styled(Text)`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ff6b6b;
  margin-bottom: 1rem;
`;

const ErrorMessage = styled(Text)`
  margin-bottom: 2rem;
`;

const RetryButton = styled(PrimaryButton)`
  margin: 0 auto;
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // Log the error to an error reporting service
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    // Attempt to recover by reloading the page
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ErrorIcon>⚠️</ErrorIcon>
          <ErrorTitle>Oops! Something went wrong</ErrorTitle>
          <ErrorMessage>
            We're sorry, but something unexpected happened. Please try again or contact support if the problem persists.
          </ErrorMessage>
          <RetryButton
            onClick={this.handleRetry}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Try Again
          </RetryButton>
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <div style={{ marginTop: '2rem', textAlign: 'left' }}>
              <Text color="rgba(255, 255, 255, 0.7)" size="small">
                Error details (visible in development only):
              </Text>
              <pre style={{ 
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '0.8rem',
                overflow: 'auto',
                padding: '1rem',
                background: 'rgba(0, 0, 0, 0.2)',
                borderRadius: '8px',
                marginTop: '0.5rem'
              }}>
                {this.state.error.toString()}
                {this.state.errorInfo.componentStack}
              </pre>
            </div>
          )}
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 