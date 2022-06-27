function Home() {
    return (
        <Card
            bgcolor="info"
            txtcolor="white"
            header="BadBank Landing Page"
            fontSizeHeader="1.5"
            headerBgColor="#F65058FF"
            title="Welcome to the bank"
            text="You can use this bank"
            body={(<img src="bank.png" className="img-fluid"
            alt="Responsive image" />)}
        />
    );
}