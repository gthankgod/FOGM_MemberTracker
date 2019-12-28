import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'

const Dashboard = ({ isAuthenticated }) => {
    if (!isAuthenticated) {
        return <Redirect to="/login" />
    }
    return (
        <div className="wrapper ">
            <div className="sidebar" data-color="white" data-active-color="danger">
                <div className="logo">
                    <Link to="http://www.creative-tim.com" className="simple-text logo-mini">
                        <div className="logo-image-small">
                            <img src="../assets/img/logo-small.png" alt="" />
                        </div>
                    </Link>
                    <Link to="http://www.creative-tim.com" className="simple-text logo-normal">
                        Creative Tim
              {/* <div class="logo-image-big">
            <img src="../assets/img/logo-big.png">
          </div> */}
                    </Link>
                </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        <li className="active ">
                            <Link to="./dashboard.html">
                                <i className="nc-icon nc-bank" />
                                <p>Dashboard</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="./icons.html">
                                <i className="nc-icon nc-diamond" />
                                <p>Icons</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="./map.html">
                                <i className="nc-icon nc-pin-3" />
                                <p>Maps</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="./notifications.html">
                                <i className="nc-icon nc-bell-55" />
                                <p>Notifications</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="./user.html">
                                <i className="nc-icon nc-single-02" />
                                <p>User Profile</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="./tables.html">
                                <i className="nc-icon nc-tile-56" />
                                <p>Table List</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="./typography.html">
                                <i className="nc-icon nc-caps-small" />
                                <p>Typography</p>
                            </Link>
                        </li>
                        <li className="active-pro">
                            <Link to="./upgrade.html">
                                <i className="nc-icon nc-spaceship" />
                                <p>Upgrade to PRO</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="main-panel">
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
                    <div className="container-fluid">
                        <div className="navbar-wrapper">
                            <div className="navbar-toggle">
                                <button type="button" className="navbar-toggler">
                                    <span className="navbar-toggler-bar bar1" />
                                    <span className="navbar-toggler-bar bar2" />
                                    <span className="navbar-toggler-bar bar3" />
                                </button>
                            </div>
                            <Link className="navbar-brand" to="#pablo">Paper Dashboard 2</Link>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-bar navbar-kebab" />
                            <span className="navbar-toggler-bar navbar-kebab" />
                            <span className="navbar-toggler-bar navbar-kebab" />
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navigation">
                            <form>
                                <div className="input-group no-border">
                                    <input type="text" defaultValue className="form-control" placeholder="Search..." />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <i className="nc-icon nc-zoom-split" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link btn-magnify" to="#pablo">
                                        <i className="nc-icon nc-layout-11" />
                                        <p>
                                            <span className="d-lg-none d-md-block">Stats</span>
                                        </p>
                                    </Link>
                                </li>
                                <li className="nav-item btn-rotate dropdown">
                                    <Link className="nav-link dropdown-toggle" to="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="nc-icon nc-bell-55" />
                                        <p>
                                            <span className="d-lg-none d-md-block">Some Actions</span>
                                        </p>
                                    </Link>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                        <Link className="dropdown-item" to="#">Action</Link>
                                        <Link className="dropdown-item" to="#">Another action</Link>
                                        <Link className="dropdown-item" to="#">Something else here</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link btn-rotate" to="#pablo">
                                        <i className="nc-icon nc-settings-gear-65" />
                                        <p>
                                            <span className="d-lg-none d-md-block">Account</span>
                                        </p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* End Navbar */}
                {/* <div class="panel-header panel-header-lg">

  <canvas id="bigDashboardChart"></canvas>


</div> */}
                <div className="content">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="card card-stats">
                                <div className="card-body ">
                                    <div className="row">
                                        <div className="col-5 col-md-4">
                                            <div className="icon-big text-center icon-warning">
                                                <i className="nc-icon nc-globe text-warning" />
                                            </div>
                                        </div>
                                        <div className="col-7 col-md-8">
                                            <div className="numbers">
                                                <p className="card-category">Capacity</p>
                                                <p className="card-title">150GB
                          </p><p>
                                                </p></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer ">
                                    <hr />
                                    <div className="stats">
                                        <i className="fa fa-refresh" /> Update Now
                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="card card-stats">
                                <div className="card-body ">
                                    <div className="row">
                                        <div className="col-5 col-md-4">
                                            <div className="icon-big text-center icon-warning">
                                                <i className="nc-icon nc-money-coins text-success" />
                                            </div>
                                        </div>
                                        <div className="col-7 col-md-8">
                                            <div className="numbers">
                                                <p className="card-category">Revenue</p>
                                                <p className="card-title">$ 1,345
                          </p><p>
                                                </p></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer ">
                                    <hr />
                                    <div className="stats">
                                        <i className="fa fa-calendar-o" /> Last day
                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="card card-stats">
                                <div className="card-body ">
                                    <div className="row">
                                        <div className="col-5 col-md-4">
                                            <div className="icon-big text-center icon-warning">
                                                <i className="nc-icon nc-vector text-danger" />
                                            </div>
                                        </div>
                                        <div className="col-7 col-md-8">
                                            <div className="numbers">
                                                <p className="card-category">Errors</p>
                                                <p className="card-title">23
                          </p><p>
                                                </p></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer ">
                                    <hr />
                                    <div className="stats">
                                        <i className="fa fa-clock-o" /> In the last hour
                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="card card-stats">
                                <div className="card-body ">
                                    <div className="row">
                                        <div className="col-5 col-md-4">
                                            <div className="icon-big text-center icon-warning">
                                                <i className="nc-icon nc-favourite-28 text-primary" />
                                            </div>
                                        </div>
                                        <div className="col-7 col-md-8">
                                            <div className="numbers">
                                                <p className="card-category">Followers</p>
                                                <p className="card-title">+45K
                          </p><p>
                                                </p></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer ">
                                    <hr />
                                    <div className="stats">
                                        <i className="fa fa-refresh" /> Update now
                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card ">
                                <div className="card-header ">
                                    <h5 className="card-title">Users Behavior</h5>
                                    <p className="card-category">24 Hours performance</p>
                                </div>
                                <div className="card-body ">
                                    <canvas id="chartHours" width={400} height={100} />
                                </div>
                                <div className="card-footer ">
                                    <hr />
                                    <div className="stats">
                                        <i className="fa fa-history" /> Updated 3 minutes ago
                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card ">
                                <div className="card-header ">
                                    <h5 className="card-title">Email Statistics</h5>
                                    <p className="card-category">Last Campaign Performance</p>
                                </div>
                                <div className="card-body ">
                                    <canvas id="chartEmail" />
                                </div>
                                <div className="card-footer ">
                                    <div className="legend">
                                        <i className="fa fa-circle text-primary" /> Opened
                      <i className="fa fa-circle text-warning" /> Read
                      <i className="fa fa-circle text-danger" /> Deleted
                      <i className="fa fa-circle text-gray" /> Unopened
                    </div>
                                    <hr />
                                    <div className="stats">
                                        <i className="fa fa-calendar" /> Number of emails sent
                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card card-chart">
                                <div className="card-header">
                                    <h5 className="card-title">NASDAQ: AAPL</h5>
                                    <p className="card-category">Line Chart with Points</p>
                                </div>
                                <div className="card-body">
                                    <canvas id="speedChart" width={400} height={100} />
                                </div>
                                <div className="card-footer">
                                    <div className="chart-legend">
                                        <i className="fa fa-circle text-info" /> Tesla Model S
                      <i className="fa fa-circle text-warning" /> BMW 5 Series
                    </div>
                                    <hr />
                                    <div className="card-stats">
                                        <i className="fa fa-check" /> Data information certified
                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer footer-black  footer-white ">
                    <div className="container-fluid">
                        <div className="row">
                            <nav className="footer-nav">
                                <ul>
                                    <li>
                                        <Link to="https://www.creative-tim.com" target="_blank">Creative Tim</Link>
                                    </li>
                                    <li>
                                        <Link to="http://blog.creative-tim.com/" target="_blank">Blog</Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.creative-tim.com/license" target="_blank">Licenses</Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className="credits ml-auto">
                                <span className="copyright">
                                    ©
                    , made with <i className="fa fa-heart heart" /> by Creative Tim
                  </span>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

const mapStateToProps = ({ auth }) => ({
    isAuthenticated: auth.isAuthenticated
});
export default connect(mapStateToProps)(Dashboard)
