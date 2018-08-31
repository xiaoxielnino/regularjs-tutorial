import Regular from 'regularjs'
const extend = Regular.util.extend;
const CommentInput = Regular.extend({
  template:`
  <div class='comment-input'>
    <div class='comment-field'>
      <span class='comment-field-name'>用户名：</span>
      <div class='comment-field-input'>
        <input 
          value={comment.username}
          on-change={this.handleUserNameChnage($event)}
        />
      </div>
    </div>
    <div class='comment-field'>
      <span class='comment-field-name'>评论内容：</span>
      <div class='comment-field-input'>
        <textarea 
          value={comment.content}
          on-change={this.handleContentChange($event)}
        />
      </div>
    </div>
    <div class='comment-field-button'>
      <button
        on-click={this.handleSubmit($event)}
      >
        发布
      </button>
    </div>
  </div>
  `,
  name: 'CommentInput',
  config(data) {
    extend(data,{
      comment:{
        username:'',
        content:''
      }
    })
  },
  handleUserNameChnage(event) {
    this.data.comment.username = event.target.value;
  },
  handleContentChange(event) {
    this.data.comment.content = event.target.value;
  },
  handleSubmit(event){
    this.$emit('submit', this.data.comment)
    this.data.comment.content=''
  }
})

export default CommentInput;