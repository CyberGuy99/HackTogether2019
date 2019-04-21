'use strict';

const e = React.createElement;

class ReviewForm extends React.Component {
  constructor(props) {
    this.state = {
      subject: '',
      rating: '',
      textReview: '' 
    };
  }
  

  handleChange(e) { 
    this.setState({
      [e.target.name]: e.target.value;
    });
  }

  handleSubmit(e) {
    console.log("submitting");
    e.preventDefault();
  }

  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          name="subject"
          placeholder="Thing Reviewing"
          value={this.state.subject}
          onChange={e => this.handleChange(e)}
        />

        <input 
          name="rating"
          type="number"
          placeholder="0"
          value={this.state.rating}
          onChange={e => this.handleChange(e)}
        />

        <textarea 
          name="subject"
          rows="10"
          cols="30"
          placeholder="Insert review here"
          value={this.state.textReview}
          onChange={e => this.handleChange(e)}
        >
        </textarea>


        <input type="submit" value="Submit" />

      </form>
    );

  }
}

const domContainer = document.querySelector('#make_review_container');
ReactDOM.render(e(ReviewForm), domContainer);
