import React from 'react'
import {v1} from 'uuid';
import {ActionsTypes} from './store';

export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const addPostActionCreator = () => ({type: ADD_POST}) as const
export const updateNewPostTextActionCreator = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText
    } as const
}

export type ProfilePageType = {
    postsData: Array<PostType>
    newPostText: string
}
export type PostType = {
    id?: string
    message: string
    likesCount: number
}
const initialState = {
    postsData: [
        {id: v1(), message: 'Hello', likesCount: 11},
        {id: v1(), message: 'Buy', likesCount: 15},
    ] as Array<PostType>,
    newPostText: ''
}

export type InitialStateType = typeof initialState

const profileReduser = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0,
            }
            state.postsData.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export default profileReduser