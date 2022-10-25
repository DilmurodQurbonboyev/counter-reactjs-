import axios from "axios";
import React from "react";

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

class Table extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get(API_URL)
            .then((response) => {
                this.setState({
                    data: response.data
                })
            })

    }

    render() {
        return (
            <div>
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="table-responsive">
                            <table className="table table-striped table-hover table-boredered">
                                <thead>
                                <tr>
                                    <th scope='col'>UserId</th>
                                    <th scope='col'>Id</th>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Body</th>
                                </tr>
                                </thead>

                                <tbody>
                                {
                                    this.state.data.map(e =>
                                        <tr key={e.id}>
                                            <td>{e.userId} </td>
                                            <td>{e.id}</td>
                                            <td>{e.title}</td>
                                            <td>{e.body}</td>
                                        </tr>
                                    )
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Table