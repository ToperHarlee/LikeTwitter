import React from "react";
import PostListItem from '../post-list-item';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import '../post-list/post-list.css';

const PostList = ({posts, onDelete}) => {

    const elements = posts.map(item => {
        //itemProps весь остальной обьект который не включает в себя свойство id
        const {id, ...itemProps} = item;
        return (
            <li key={id} className='list-group-item'>
                <PostListItem {...itemProps}
                              onDelete={() => onDelete(id)}
                    /*label={item.label}
                    important={item.important}*//>
            </li>
        )
    });

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;