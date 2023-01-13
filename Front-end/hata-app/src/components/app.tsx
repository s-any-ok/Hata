import React from 'react';
import {Switch, useHistory} from 'react-router-dom';
import {RouteEnum} from '../common/enum';
import {Footer, PrivateRoute, PublicRoute} from './common';
import {HomePage} from './home-page';
import Navbar from './common/navbar';
import {SignUpPage} from './sign_up-page';
import {NotFoundPage} from './not_found-page';
import {OpacityHOC} from './common/hoc';
import './index.css';
import {UserCabinet} from './user_cabinet-page';
import {FlatsPage} from './flat-page';
import {LogInPage} from './log_in-page';
import {FlatPage} from './selected-flat-page';
import {UnderWorkPage} from './under_work-page';

function App() {
  const history = useHistory();
  const scroll = React.useRef<any>();
  const [prevPage, setPrevPage] = React.useState<string>('/');
  const onRouteChangeHandler = () => {
    scroll.current.scrollIntoView({behavior: 'smooth'});
  };
  React.useEffect(() => {
    return history.listen(location => {
      console.log(
        `You changed the page to: ${location.pathname} prevPage: ${prevPage}`,
      );
      if (location.pathname !== prevPage) {
        setPrevPage(location.pathname);
        onRouteChangeHandler();
      }
    });
  }, [history, prevPage]);

  return (
    <div className={'wrapper'} ref={scroll}>
      <Navbar />
      <Switch>
        <PublicRoute
          component={OpacityHOC(HomePage)}
          path={RouteEnum.HOME}
          exact={true}
        />
        <PublicRoute
          component={OpacityHOC(SignUpPage)}
          path={RouteEnum.SIGN_UP_USER}
          exact={true}
        />
        <PublicRoute
          component={OpacityHOC(LogInPage)}
          path={RouteEnum.LOG_IN_USER}
          exact={true}
        />
        <PrivateRoute
          component={OpacityHOC(UserCabinet)}
          RedirectRoute={RouteEnum.LOG_IN_USER}
          path={RouteEnum.USER_CABINET}
          exact={true}
        />
        <PublicRoute
          component={OpacityHOC(FlatsPage)}
          path={RouteEnum.FLATS}
          exact={true}
        />
        <PublicRoute
          component={OpacityHOC(FlatPage)}
          path={`${RouteEnum.FLAT}/:id`}
          exact={true}
        />
        <PublicRoute
          component={OpacityHOC(UnderWorkPage)}
          path={RouteEnum.UNDER_WORK}
          exact={true}
        />
        <PublicRoute
          component={OpacityHOC(NotFoundPage)}
          path={RouteEnum.ANY}
          exact={true}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
