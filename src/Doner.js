import React from 'react';

export default class Doner extends React.Component {
    render() {
        return (
            <div className="card blue-grey darken-2" style={{ margin: "1vh 5em" }}>
                <div className="card-content white-text">
                    <span className="card-title">Doner</span>
                    <div className="input-field col s12">
                        <select>
                            <option value="0">Choose your option</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                        <label>Materialize Select</label>
                    </div>
                </div>
                <div className="card-action">
                    <a href="#">This is a link</a>
                    <a href="#">This is a link</a>
                </div>
            </div>
        )
    }
}