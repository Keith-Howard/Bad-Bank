function NavBar() {
    const currentUserCtx = React.useContext(currentUserContext);

    console.log('login status ' + currentUserCtx.loginStatus);
    
    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#FFFDD0", fontSize: "2em"}}>
                <div className="container-fluid">
                    <a className="navbar-brand text-danger navSpacing" style={{fontSize: "1.5em", marginRight: "25px"}} href="#">BadBank</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-danger" style={{marginRight: "25px"}} href="#/createaccount/">Create Account</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-danger" style={{marginRight: "25px"}} href="#/login/">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-danger" style={{marginRight: "25px"}} href="#/deposit/">Deposit</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-danger" style={{marginRight: "25px"}} href="#/withdraw/">Withdraw</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-danger" style={{marginRight: "25px"}} href="#/balance/">Balance</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-danger" style={{marginRight: "25px"}} href="#/alldata/">All Data</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}