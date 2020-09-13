import React, { Component } from "react";

class App extends Component {
    state = {
        input: "input",
        results: "",
        array: [
            89,
            30,
            25,
            32,
            72,
            70,
            51,
            42,
            25,
            24,
            53,
            55,
            78,
            50,
            13,
            40,
            48,
            32,
            26,
            2,
            14,
            33,
            45,
            72,
            56,
            44,
            21,
            88,
            27,
            68,
            15,
            62,
            93,
            98,
            73,
            28,
            16,
            46,
            87,
            28,
            65,
            38,
            67,
            16,
            85,
            63,
            23,
            69,
            64,
            91,
            9,
            70,
            81,
            27,
            97,
            82,
            6,
            88,
            3,
            7,
            46,
            13,
            11,
            64,
            76,
            31,
            26,
            38,
            28,
            13,
            17,
            69,
            90,
            1,
            6,
            7,
            64,
            43,
            9,
            73,
            80,
            98,
            46,
            27,
            22,
            87,
            49,
            83,
            6,
            39,
            42,
            51,
            54,
            84,
            34,
            53,
            78,
            40,
            14,
            5,
        ],
    };

    indexOfLinear = (array, value) => {
        for (let i = 0; i < array.length; i++) {
            if (array[i] == value) {
                return i;
            }
        }
        return -1;
    };

    binarySearch = (array, value, start, end) => {
        var start = start === undefined ? 0 : start;
        var end = end === undefined ? array.length : end;

        if (start > end) {
            return -1;
        }

        const index = Math.floor((start + end) / 2);
        const item = array[index];

        console.log(start, end);
        if (item == value) {
            return index;
        } else if (item < value) {
			console.log(array[index])
            return this.binarySearch(array, value, index + 1, end);
        } else if (item > value) {
			console.log(array[index])
            return this.binarySearch(array, value, start, index - 1);
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let linear = this.indexOfLinear(this.state.array, this.state.input);
        let binary = this.binarySearch(
            this.state.array.sort(),
            this.state.input
        );

        console.log(linear, binary);
    };

    handleChange = (e) => {
        this.setState({
            input: e.target.value,
        });
    };

    render() {
        return (
            <>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="input">input</label>
                    <input
                        type="number"
                        name="input"
                        id="input"
                        onChange={(e) => this.handleChange(e)}
                    />
                    <button type="submit"> Submit </button>
                </form>
                <div>{this.state.results !== "" && this.state.results}</div>
            </>
        );
    }
}

export default App;
