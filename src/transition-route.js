import React from 'react';
import { Route } from 'react-router';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export const TransitionRoute = ({
  key,
  transitionName,
  transitionEnterTimeout,
  transitionLeaveTimeout,
  transitionAppear,
  transitionEnter,
  transitionLeave,
  transitionAppearTimeout,
  ...rest
}) => (
  <Route
    render={ ({ location }) => (
      <CSSTransitionGroup
        transitionName={ transitionName }
        transitionEnterTimeout={ transitionEnterTimeout }
        transitionLeaveTimeout={ transitionLeaveTimeout }
        transitionAppear={ transitionAppear }
        transitionAppearTimeout={ transitionAppearTimeout }
        transitionEnter={ transitionEnter }
        transitionLeave={ transitionLeave }
      >
        <Route
          location={ location }
          key={ key }
          { ...rest }
        />
      </CSSTransitionGroup>
    )}
  />
);

export default TransitionRoute;
