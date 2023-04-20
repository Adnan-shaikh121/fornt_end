function MyComponent() {
    const [isOpen, setIsOpen] = React.useState(false);

    function handleClick() {
        setIsOpen(!isOpen);
    }

    return (
        React.createElement("div", null,
            React.createElement("button", { onClick: handleClick }, "Toggle"),
            isOpen && React.createElement("p", null, "Hello, world!")
        )
    );
}

ReactDOM.render(
    React.createElement(MyComponent, null),
    document.getElementById('root')
);
