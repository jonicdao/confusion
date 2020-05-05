<div className="col-12 col-md-5 m-1">
<h4>Comments</h4>
<ul className="list-unstyled">
    {console.log({dish})}
</ul>
</div>

function RenderComments({comments, postComment, dishId}) {
    if (comments != null)
        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    <Stagger in>
                        {comments.map((comment) => {
                            return (
                                <Fade in key={comment._id}>
                                    <li>
                                    <p>{comment.comment}</p>
                                    <p>{comment.rating} stars</p>
                                    <p>-- {comment.author.firstname} {comment.author.lastname} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.updatedAt)))}</p>
                                    </li>
                                </Fade>
                            );
                        })}
                    </Stagger>
                </ul>
                <CommentForm dishId={dishId} postComment={postComment} />
            </div>
        );
    else
        return(
            <div></div>
        );
}


<div key={comments.id} className="col-12 col-md-5 m-1">
<h4>Comments</h4>
<ul className="list-unstyled">
    <li>
        <p>{comments.dishId}</p>
        <p>{comments.rating} stars</p>
        <p>-- {comments.author} {comments.author} </p>
    </li>
</ul>
</div>
);