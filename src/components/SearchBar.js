import React from "react"

class SearchBar extends React.Component{

    state = {term: ""}

    /*onInputChange(e){
        console.log(e.target.value)
    }*/

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmitTerm(this.state.term) /* passing data from child to parent component */
    }

    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className = "ui form">
                    <div className = "field">
                        <label>Image Search</label>
                      {/* <input type="text" onChange = {this.onInputChange} /> *} {/*Alternate way of writing is below */}

                      {/* <input type = "text" onChange={(event) => console.log(event.target.value)} /> */ 
                      /*When we have only one line of code we will use this instead of above */}

                      <input 
                        type="text" 
                        value= {this.state.term} 
                        onChange = {(e) => this.setState({term: e.target.value})} />

                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar