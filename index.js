import './index.css';
import Regular from 'regularjs';
import './CommentApp';

var HelloRegular = Regular.extend({
    template: `
      <CommentApp></CommentApp>
    `,
  });
  
  var component = new HelloRegular({
  });
  
  component.$inject('#app'); 

  if (module.hot) {
    module.hot.dispose(function () {
        // 模块即将被替换时
        // regular 不会自动replace 需要清空
        document.getElementById('app').innerHTML=''
      });
  }