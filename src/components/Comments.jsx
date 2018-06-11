import React, { Component } from 'react';
import { textInput, postComment } from '../actions';
import { connect } from 'react-redux'

class Comments extends Component {
    typingComment = (text) => {
        this.props.textInput({props: 'comment', value: text.target.value})
    };
    typingName = (text) => {
        this.props.textInput({props: 'name', value: text.target.value})
    };
    postComment = () => {
        const { name, comment } = this.props
        console.log({name, comment})
        this.props.postComment({name, comment})
    }
    displayComments = () => {
        const { commentsArray } = this.props;
        console.log('comment', commentsArray)
        return commentsArray.map((comment) => {
            console.log('displayComments', comment)
            return <div className='comment'>
                        <div id='commentText'>{comment.comment}</div>
                        <span style={{fontSize: '.8em'}}> <strong>Author:</strong>  {comment.name}</span>
                        <span style={{fontSize: '.8em'}}>{comment.date}</span>
                    </div>
        })
    }

    render() {
        return (
            <div id='commentDiv'>
                <form id='commentForm' onSubmit={this.postComment.bind(this)}>
                    <h3>Comment</h3>
                    <textarea value={this.props.comment} required={true} rows={3} onChange={this.typingComment.bind(this)} placeholder='Comments'/>
                    <input value={this.props.name} required={true} type="text" onChange={this.typingName.bind(this)} placeholder='Author'/>
                    <button style={{marginTop: '10px'}}>Post</button>         
                </form>  
                <div id='commentDisplay'>
                    <h2 style={{textDecoration: 'underline'}}>Comments:</h2>
                    {this.displayComments()}
                </div> 
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { comment, name } = state.comments;
    const { commentsArray } = state.userList;

    return (
        {
            comment,
            name,
            commentsArray,
        }
    );
};

export default connect(mapStateToProps, { textInput, postComment })(Comments);