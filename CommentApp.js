import Regular from 'regularjs';
import  './CommentInput'
import  './CommentList'
const extend = Regular.util.extend;


const CommentApp = Regular.extend({
  template:`
    <div class='wrapper'>
      <CommentInput on-submit={this.handleSubmitComment($event)}></CommentInput>
      <CommentList comments={comments}></CommentList>
    </div>
    
  `,
  name: 'CommentApp',
  config(data){
    extend(data,{
      comments:[]
    })
  },
  handleSubmitComment(comment){
    //如果直接传comment，传的是comment的引用，也就是双向绑定
    const newComment = Object.assign({},comment)
    this.data.comments.push(newComment);


  },
})

export default CommentApp;