import React, {Component} from 'react';
import Data from './data/data_melp.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class Restaurant extends Component{

    constructor(){
        super();
        this.state = {
            search: ''
          
        };

    }

    updateSearch(event){
     this.setState({search:event.target.value.substr(0,50)})
      
    }
    render(){

        let filterData = Data.filter(
          (element)=>{
              return element.name.toLowerCase().indexOf(
                        this.state.search.toLowerCase()) !== -1;
          }  
        );
       
        return(
            <div>
            

                <br/>
                    
                    <input type="text" 
                           placeholder="Buscar Restaurant"
                            value={this.state.search}
                            onChange = {this.updateSearch.bind(this)}
                     />
                      <br/> <br/>
                            
                        <button type="button" outline color="primary" onClick={ function refreshPage(){ 
                                window.location.reload(); 
                            } }> 
                            <span>Reestablecer</span> </button> 
                    <ul>
                        {filterData.map((data)=>{
                            return <div>
                                     <h4>{data.name}</h4>
                                     <p>Calle: {data.address.street}</p>
                                     <p>Ranking: {data.rating}</p>
                                  </div>

                                
                    })}
                    </ul>

                    
                    
            </div>
        );
    }

}

export default Restaurant;
