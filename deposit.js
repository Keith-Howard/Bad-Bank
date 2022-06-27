function Deposit() {
    const currentUserCtx = React.useContext(currentUserContext);
    if (currentUserCtx.loginStatus) {
        const [amount, setAmount] = React.useState(0);
        const ctx = React.useContext(UserContext);

        function validateAmount() {
            if (Number(amount) <= 0 || amount === null || amount.match(/[a-z]/i)){
                alert('Please enter a valid positive number');
                return false;
            } else {
                return true;
            }
        }

        function getNewBalance(enteredAmount) {
            ctx.users[currentUserCtx.index].balance = Number(ctx.users[currentUserCtx.index].balance) + Number(enteredAmount);
        }

        function makeDeposit(event) {
            if (validateAmount()) {
                alert('Your Deposit of $' + amount + ' Went Through');
                getNewBalance(amount);
            }
            setAmount(0);
            clearForm();
            event.preventDefault()
        }

        function clearForm() {
            document.getElementById("deposit").value = '';
        }

        return (
            <Card
            bgcolor="info"
            txtcolor="white"
            fontSizeHeader="1.5"
            headerBgColor="#F65058FF"
            header="Deposit"
            body={
                <>
                    <br/>Balance<input type="input" value={ctx.users[currentUserCtx.index].balance} readOnly 
                    style={{maxWidth: "100px"}} className="form-control float-right bg-info border-info text-white" />
                    <br/>
                    <br/>Deposit Amount
                    <br/><input type="input" className="form-control" id="deposit"
                    placeholder="Deposit amount" onChange={e => setAmount(e.currentTarget.value)} />
                    <br/><button type="submit" className="btn btn-light" onClick={makeDeposit}>Deposit</button>
                </>
            }
            />
        );
    } else {
        alert("Please Log in");
    }
}