import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddPropertiesModal} from './AddPropertiesModal';

export class Properties extends Component{

    constructor(props){
        super(props);
        this.state={prop:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch('http://localhost:2816/api/Properties/GetProperties')
        .then(response=>response.json())
        .then(data=>{
            this.setState({prop:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteProp(propid){
        if(window.confirm('Are you sure want to buy?')){
            fetch('http://localhost:2816/api/Properties/'+propid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {prop, propid,type,area,address,contactdetails,estimatedvalue}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>PropertyId</th>
                        <th>Type</th>
                        <th>Area</th>
                        <th>Address</th>
                        <th>ContactDetails</th>
                        <th>EstimatedValue</th>
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prop.map(dep=>
                            <tr key={dep.PropertyId}>
                                <td>{dep.PropertyId}</td>
                                <td>{dep.Type}</td>
                                <td>{dep.Area}</td>
                                <td>{dep.Address}</td>
                                <td>{dep.ContactDetails}</td>
                                <td>{dep.EstimatedValue}</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        propid:dep.PropertyId,type:dep.type,area:dep.Area,address:dep.Address,contactdetails:dep.ContactDetails,estimatedvalue:dep.EstimatedValue})}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteProp(dep.PropertyId)}>
            BUY
        </Button>

        
</ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                
            </div>
        )
    }
}