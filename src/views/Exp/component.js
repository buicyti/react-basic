import React from "react";

class Mycomponent extends React.Component {
    state = {
        fname: 'Tư',
        lname: 'Đồ'
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('click me', this.state)
    }
    handOnChangefName = (event) => {
        this.setState({
            fname: event.target.value,
        })
    }
    handOnChangelName = (event) => {
        this.setState({
            lname: event.target.value,
        })
    }
    // state = {
    //     name: 'Tư',
    //     channel: 'Học React js'
    // };
    // handOnChangeName = (event) => {
    //     console.log(event.target.value)
    //     this.setState({
    //         name: event.target.value,
    //     })
    // };
    // handClickButton = () => {
    //     alert('óc chó')
    // }
    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" id="fname" className="fname" value={this.state.fname} onChange={(event) => this.handOnChangefName(event)} /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" id="lname" className="lname" value={this.state.lname} onChange={(event) => this.handOnChangelName(event)} /><br /><br />
                    <input type="submit" value="Submit" onClick={(event) => this.handleSubmit(event)} />
                </form>
                {/* <input value={this.state.name} type="text" onChange={(event) => this.handOnChangeName(event)} />
                <div> Tao là: {this.state.name}</div>
                <button onClick={() => this.handClickButton()}>Ấn vào đây</button> */}
            </>
        )
    }
}

export default Mycomponent;