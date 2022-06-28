function Balance() {
    const currentUserCtx = React.useContext(currentUserContext);
    if (currentUserCtx.loginStatus) {
        const ctx = React.useContext(UserContext);
        function getBalance() {
            document.getElementById('balance').value = ctx.users[currentUserCtx.index].balance;
        }
        return (
            <Card
                bgcolor="info"
                txtcolor="white"
                fontSizeHeader="1.5"
                headerBgColor="#F65058FF"
                header="Balance"
                body={
                    <>
                        <br/>Balance<input type="input" readOnly value={ctx.users[currentUserCtx.index].balance} id="balance"
                        style={{maxWidth: "100px"}} className="form-control float-right bg-info border-info text-white" />
                        <br/>
                        <br/><button type="submit" className="btn btn-light" onClick={getBalance}>Deposit</button>
                    </>
                }
                />
        );
    } else {
        alert("Please Log in");
    }
}