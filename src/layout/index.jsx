import './layout.css';
import { BrowserRouter,  Switch, Route, Router, HashRouter, Link} from 'react-router-dom';

const LayoutView = () => {
    return (
        <HashRouter>
        <div className="home">
            <div className="left">
                <ul>
                    <li>
                        <Link to={'/'}>
                        Home
                        </Link>
                        </li>
                    <li >
                    <Link to={'/table'}>
                    Table
                        </Link></li>
                    <li >
                    <Link to={'/form'}>
                    Form
                        </Link></li>
                </ul>
            </div>
            <div className="right">
                <h1>测试头部</h1>
                <Switch>
                    <Route path={'/table'}>table</Route>
                    <Route path={'/form'}>form</Route>
                    <Route path={'/'}>home</Route>
                </Switch>
            
            </div>
        </div>
        </HashRouter>
    )
}

const Layout = () => {
    return <LayoutView />
}

export default Layout