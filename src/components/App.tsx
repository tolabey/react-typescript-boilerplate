import * as React from "react";

export class App extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: "TS"
        }
    }
    render() {
        return <h1>Hello {this.state.title}, Mello {this.props.name}</h1>
    }
}


interface IProps {
    name: string;
}

interface IState {
    title: string;
}
