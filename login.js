function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext);
    const currentUserCtx = React.useContext(currentUserContext);

    function getUser() {
        const users = ctx.users;
        for (const [index, user] of Object.entries(users)) {
            if (email === user.email & password === user.password) {
                alert('Your login was successful');
                clearForm();
                return [index, user];
            }
        }
        alert('One or more of your credientials is not correct');
        clearForm();
        return {};
    }

    function updateCurrentUser(name, email, password, balance, index, loginStatus) {
        currentUserCtx.name = name;
        currentUserCtx.email = email;
        currentUserCtx.password = password;
        currentUserCtx.balance = balance;
        currentUserCtx.index = index;
        currentUserCtx.loginStatus = loginStatus 
    }
    
    function login() {
        console.log('Login email is ' + email + ' password is ' + password);
        const user = getUser();
        if (user.length > 0) {
            if (Object.keys(user[1]).length > 0) {
                updateCurrentUser(user[1].name, user[1].email, user[1].password, user[1].balance, user[0], true);
            } else {
                updateCurrentUser('', '', '', 0, 0, false);
            }
            console.log('user ' + JSON.stringify(currentUserCtx));  
        }else {
            alert('No Valid User');
        }
    }


    function clearForm() {
        setEmail('');
        setPassword('');
    }

    return (
        <Card
        bgcolor="info"
        txtcolor="white"
        fontSizeHeader="1.5"
        headerBgColor="#F65058FF"
        header="Login"
        body={
            <>
                <br/>Email address
                <br/><input type="input" className="form-control" id="email"
                placeholder="Enter email" value={email} onChange={e => setEmail(e.
                    currentTarget.value)} />
                <br/>Password
                <br/><input type="password" className="form-control" id="password"
                placeholder="Enter password" value={password} onChange={e => setPassword(e.
                    currentTarget.value)} />
                <br/><button type="submit" className="btn btn-light" onClick={login}>Login</button>
            </>
        }
        />            
    )
}
