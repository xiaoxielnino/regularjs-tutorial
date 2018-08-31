import Regular from 'regularjs'
const extend = Regular.util.extend;

const Comment = Regular.extend({
  template:`
    <div class="comment">
      <div class="comment-user">
        <span>{comment.username} </span>: 
      </div>
      <p> {comment.content}</p>
    </div>
  `,
  name: 'Comment',
  config(data){
    extend(data,{
      comment:{
        username:'',
        content:''
      }
    })
  }
})

export default Comment;