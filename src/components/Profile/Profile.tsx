import React from 'react'
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';


export type ProfilePropsType = {
    stateData: ProfilePageType
    addPost: (postText: string) => void
}


export function Profile(props: ProfilePropsType) {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts postsData={props.stateData.postsData} addPost={props.addPost}/>
        </div>
    )
}

