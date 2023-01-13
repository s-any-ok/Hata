import * as React from 'react';
import {
  Redirect,
  Route,
  RouteComponentProps,
  RouteProps,
} from 'react-router-dom';
import {RouteEnum} from '../../../common/enum';
import {useSelector} from 'react-redux';
import {TRootState} from '../../../store/reducers';

interface IPrivateRoute<P> extends RouteProps {
  component:
    | React.ComponentType<RouteComponentProps<P>>
    | React.ComponentType<P>;
  RedirectRoute?: RouteEnum;
  routeProps?: RouteProps;
}

export const PrivateRoute = ({
  component: RenderedComponent,
  RedirectRoute,
  routeProps,
}: IPrivateRoute<any>) => {
  let {isAuth} = useSelector((state: TRootState) => ({
    isAuth: state.auth.isAuth,
  }));
  return (
    <Route
      {...routeProps}
      render={props =>
        isAuth ? (
          <RenderedComponent {...props} />
        ) : (
          <Redirect to={RedirectRoute} />
        )
      }
    />
  );
};
