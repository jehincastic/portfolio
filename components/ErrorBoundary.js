import { Component } from "react"
import posthog from "posthog-js"

class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error) {
    posthog.captureException(error)
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong. Please refresh the page and try again.</p>
    }

    return this.props.children
  }
}

export default ErrorBoundary
