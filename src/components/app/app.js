import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import './app.css';
import style from './App.module.css';
import styled from 'styled-components';

const AppBlock = styled.div`
   margin: 0 auto;
   max-width: 800px;
`;
//копия AppBlock с измененными/дополненными стилями не трогая изачальный компонент
const StyledAppBlock = styled(AppBlock)`
   background-color: grey;
`;

const App = () => {

    const data = [
        {label: 'Going to learn React', important:true, id: 'wwadas'},
        {label: 'That is no good', important:false, id: 'qwee'},
        {label: 'i need a break', important:false, id: 'sdfsdfs'}
    ];

    return (
        <AppBlock /*className="app"*/ /*className={style.app}*/>
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </AppBlock>
    )
}

export default App;