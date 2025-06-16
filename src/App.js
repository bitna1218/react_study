import React, { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import Control from './components/Control';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import './App.css';


class App extends Component{
    constructor(props){
        super(props);
        this.max_content_id = 3;
        this.state={
            mode:'read',
            selected_content_id:2,
            subject:{title:"WEB", sub:"world wide web!"},
            welcome:{title:'welcome', desc:'Hellow~~~~, React!!'},
            contents:[
                {id:1,title:'HTML',desc:'HTML is...'},
                {id:2,title:'CSS',desc:'CSS is...'},
                {id:3,title:'JavaScript',desc:'JavaScript is...'}
            ]
        }
    }

    getReadContent(){
        var i = 0;
        while(i < this.state.contents.length){
            var data = this.state.contents[i];
            if(data.id === this.state.selected_content_id){
                return data;
                break;
            }
            i = i + 1;
        }
    }
    
    
    getContent(){
        var _title, _desc, _alticle= null;
        if(this.state.mode === 'welcome'){
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
            _alticle = <Content title={_title} desc={_desc}></Content>
        }else if(this.state.mode === 'read'){

            var _content = this.getReadContent();
            _alticle = <Content title={_content.title} desc={_content.desc}></Content>  

        }else if(this.state.mode === 'create'){
            _alticle = <CreateContent onSubmit={function(_title,_desc){
                this.max_content_id = this.max_content_id+1;
                var _contents =this.state.contents.concat(
                    {id:this.max_content_id, title:_title, desc:_desc}
                );
                this.setState({
                    contents:_contents
                });
            }.bind(this)}></CreateContent>
        }else if(this.state.mode === 'update'){
            _content = this.getReadContent();
            _alticle = <UpdateContent data={_content} onSubmit={function(_title,_desc){
                this.max_content_id = this.max_content_id+1;
                var _contents =this.state.contents.concat(
                    {id:this.max_content_id, title:_title, desc:_desc}
                );
                this.setState({
                    contents:_contents
                });
            }.bind(this)}></UpdateContent>
        }

        return _alticle;
    }

    render(){

        return(
            <div className='App'>
               <Subject title={this.state.subject.title} sub={this.state.subject.sub} onChangePage={function(){
                this.setState({mode:'welcome'});
            }.bind(this)}
               >
               </Subject>


               <TOC 
                onChangePage={function(id){
                   this.setState({
                    mode:'read',
                    selected_content_id:Number(id)
                });
                }.bind(this)}
               data={this.state.contents}></TOC>

               <Control onChangeMode = {function(_mode){
                this.setState({
                    mode:_mode
                });
               }.bind(this)}></Control>
               
               {this.getContent()}
               
            </div>
        );
    }
}

export default App;