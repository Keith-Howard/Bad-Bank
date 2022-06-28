function AllData() {
    const currentUserCtx = React.useContext(currentUserContext);
    if (currentUserCtx.loginStatus) {
        const font = "15px";
        const ctx = React.useContext(UserContext);
        return (
            <Card
                bgcolor="info"
                txtcolor="white"
                fontSizeHeader="1.5"
                headerBgColor="#F65058FF"
                header="All Data"
                body={
                    <>
                        <br/><h1 style={{fontSize: font}}>Name: <p style={{fontSize: font}} className="float-right text-white">{ctx.users[currentUserCtx.index].name}</p></h1>
                        <br/><h1 style={{fontSize: font}}>Email: <p style={{fontSize: font}} className="float-right text-white">{ctx.users[currentUserCtx.index].email}</p></h1>
                        <br/><h1 style={{fontSize: font}}>Balance: <p style={{fontSize: font}} className="float-right text-white">{ctx.users[currentUserCtx.index].balance}</p></h1>
                    </>
                }
                />
        );
    } else {
        alert("Please Log in");
    }
}