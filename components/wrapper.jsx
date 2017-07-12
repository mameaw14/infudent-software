var ReactDOM = require("react-dom");

    var HelloWorld = React.createClass({
      getInitialState: function(){
        var self = this;
        setInterval(function(){
          $.ajax({
            url: 'localhost/free-elective'
          })
          .success(function(data){
            if (data !== currentMessage){
              var oldChat = self.state.message;
              var newChat = oldChat + '\n' + data;
              self.setState({
                message: newChat
              });
              currentMessage = data;
              // text.scrollTop(text[0].scrollHeight);
            }
            // text.html(data);
          });
        },500)

        return { message: 'Hello World'};
      },

      sendMessage: function(e){
        if(e.which == 13){
          var message = this.state.myMessage;
          var date = new Date();
          // var message = messageInput.val();
          // allChat.push(message);
          $.ajax({
            url: 'localhost/free-elective/' + "Thung : "+ message + " [ "+ date.getHours() + ":" + date.getMinutes() + " ]"
          })
          // messageInput.val('');
          this.setState({
            myMessage: ''
          });

        } else {
          this.setState({
            myMessage: e.target.value
          });
        }
      },

      render: function() {
        var Header = require('./header.jsx');
        return (
          <div>

            <div id="all" className= "panel panel-heading">
            <div id="header2" className="panel panel-success">
                <Header />
            </div>

              <div id="container2">
                <textarea readonly value={this.state.message} className="form-control" id="chat-list" ></textarea>

              </div>

              <div id="footer" className= "row">
                <input defualtValue={this.state.myMessage} onKeyUp={this.sendMessage} className="form-control" id="input"/>
                <button id="btn-send" className="btn btn-default">Send</button>
              </div>

            </div>

          </div>
        );
      }
    });

module.exports = HelloWorld;

var Wrapper = require('./wrapper.jsx');
ReactDOM.render(<Wrapper/>, document.getElementById("container"));
