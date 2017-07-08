# TransitionRoute
## React Router v4

A simple TransitionRoute component that uses CSSTransitionGroup to easily add
routes that have a transition/animation applied. Use it as you would any other react router 4 route. You can use several in a `<Switch />`. Uses the same props as CSSTransitionGroup and you use the same css setup.

```
import TransitionRoute from 'transition-route';

<TransitionRoute
  key="sub-page"
  transitionName="translate-view"
  transitionEnterTimeout={ 500 }
  transitionLeaveTimeout={ 500 }
  transitionAppear
  transitionAppearTimeout={ 500 }
  path="/subpage/path"
  component={ SubPage }
/>
```
