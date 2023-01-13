import * as React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export const OpacityHOC = (Component: React.ComponentType) => (props: any) => {
  return (
    <ReactCSSTransitionGroup
      transitionName="show"
      transitionAppear={true}
      transitionAppearTimeout={300}
      transitionEnter={true}
      transitionLeave={true}
    >
      <Component {...props} />
    </ReactCSSTransitionGroup>
  );
};
