import React from 'react';  
import './App.css';

class App extends React.Component{
   constructor(props){
     super(props);
     this.state={
       items: [],
       operation:'add', 
       currentItem: {
         start: '',
         end: '',
         prior: ''
       }
      };
    //  this.addItem = this.addItem.bind(this);
     this.deleteItem = this.deleteItem.bind(this);
     this.editItem = this.editItem.bind(this);
   }
   
   addItem = (e) =>{
     e.preventDefault();
     const 
     {items, currentItem, operation}=this.state;
    //  const 
    //  {start, end, prior}=this.state.items;

    if(operation === 'add'){
     var id;
     if(items.length){
      id = items[items.length - 1].id + 1;
      currentItem.id = id;
     }
     else{
       id = 1;
       currentItem.id = id;
     }
     
   this.setState({
    items: [...items, currentItem]
  });
  
  this.setState({currentItem: {
    start: '',
    end: '',
    prior: ''
  }});
}else{
  let updatedItems = items;
  console.log("CITEM:", currentItem.id)
  let index = updatedItems.findIndex(obj => obj.id === currentItem.id);
  updatedItems[index].start=currentItem.start;
  updatedItems[index].end=currentItem.end;
  updatedItems[index].prior=currentItem.prior;
  this.setState({updatedItems})

  this.setState({currentItem: {
    start: '',
    end: '',
    prior: '',
    id: ''
  }});
}
}

deleteItem(id){
  let { items } = this.state;
  let index = items.findIndex(obj => obj.id === id);
  items.splice(index, 1);
  this.setState({start: '', end: '', prior: '', id: ''})
}

editItem(id){
  //console.log();
  let { items, currentItem, operation} = this.state;
  console.log("items:id",id)
  const found = items.find(obj => obj.id === id);
  console.log("found:", found)
  this.setState({currentItem:{
    start: found.start,
    end: found.end,
    prior: found.prior,
    id
  }, operation: 'update'
  });
}

 handleChange = (e) => {
const { currentItem } = this.state;
currentItem[e.target.name] = e.target.value;
this.setState(currentItem);
}

render(){
  const { items, currentItem, operation } = this.state;
  console.log("items:", items)
  console.log("currentItem:", currentItem)
return(
  <div className="todo-name">
    <form className="todo-form">
      <input type="text" placeholder="Task start" value={currentItem.start} name="start" onChange={this.handleChange} />
      <input type="text" placeholder="Task end" value={currentItem.end} name="end" onChange={this.handleChange} />
      <input type="text" placeholder="Priority" value={currentItem.prior} name="prior" onChange={this.handleChange} />
<button type="submit" onClick={this.addItem}>{operation === 'add' ? 'Add' : 'Update'}</button>
    </form> 

    <h2>ADDED LIST</h2>
    {items.map((item) => 
    <div className="list" key={item.id}> 
      <label>{item.start}</label>
      <label>{item.end} </label>
      <label>{item.prior}</label>
      <button onClick={() => this.deleteItem(item.id)}> Delete</button>
      <button onClick={() => this.editItem(item.id)}>Edit</button>
    </div>
    )}
  </div> 
)
}
}
export default App
