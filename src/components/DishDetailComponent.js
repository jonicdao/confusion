import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
        console.log("menu constructor called from DishDetailComponent")
    }

    renderDish(dish) {
        if (dish != null) {
            return(
                 <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                </Card>
            );
        } else {
            return (
            <div></div>
            );
        }
    }

    renderComments(dish) {
        console.log("Dishdetail renderComments")

        if (dish != null) {
            const comments = dish.comments.map((comment) => {
                return (
                    <ul className="list-unstyled" >
                    <p>{comment.comment} {comment.id}</p>
                    <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'long',day: '2-digit'}).format(new Date(comment.date))}</p>
                    </ul>
                );
            });
            return (comments);
        }
        else {
            return (
                <div></div>
            );
        }
    }

    render() {
        return (
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div>
                    {this.renderComments(this.props.selectedDish)}
                </div>
            </div>
        )
    }
};

export default DishDetail;