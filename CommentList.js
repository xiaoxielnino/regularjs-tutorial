import Regular from 'regularjs'
import './Comment'
const extend = Regular.util.extend;

const CommentList = Regular.extend({
  template:`
    {#list comments as comment by comment_index}
    <Comment comment={comment} key={comment_index}></Comment>
    {/list}
  `,
  name: 'CommentList',
  config(data){
    extend(data,{
      comments:[]
    })
  }
})

export default CommentList;