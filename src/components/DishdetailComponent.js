import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

export default class Dishdetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
          selectedDish: null
        }
    }

renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

displayComments(comments){
  if(comments){  
    return comments.map( c => {
      return (<div>           
      <div> {c.comment} </div> 
      <div> -- {c.author} , <span>Date : {c.date}</span></div></div>)
    })
  } else {
    return (<div>No Comments !!</div>)
  }
}

render(){
    return (<div>
              <div className="row">
                            <div  className="col-12 col-md-5 m-1"> 
                              {this.props.selectedDish && this.renderDish(this.props.selectedDish)}                              
                            </div>
                            <div className="col-12 col-md-5 m-1">                            
                               <div className="row">
                               <h4>Comment :-</h4> 
                               {this.props.selectedDish && this.displayComments(this.props.selectedDish.comments)}
                                </div>
                            </div>
                          </div>
            </div>)
}

}