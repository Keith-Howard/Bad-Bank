function Balance() {
    const currentUserCtx = React.useContext(currentUserContext);
    if (currentUserCtx.loginStatus) {
        const ctx = React.useContext(UserContext);
        return (
            <Card
                bgcolor="info"
                txtcolor="white"
                fontSizeHeader="1.5"
                headerBgColor="#F65058FF"
                header="Balance"
                body={
                    <>
                        <h1>{ctx.users[currentUserCtx.index].name}</h1>
                        <br/>Balance<input type="input" readOnly value={ctx.users[currentUserCtx.index].balance} id="balance"
                        style={{maxWidth: "100px"}} className="form-control float-right bg-info border-info text-white" />
                    </>
                }
                />
        );
    } else {
        alert("Please Log in");
    }
}