import {v1} from 'uuid';
import {ActionsTypes} from './store';

export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
export const SET_USER_PROFILE = 'SET-USER-PROFILE'

export const addPost = () => ({type: ADD_POST}) as const
export const updateNewPostText = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText,
    } as const
}
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile}) as const

export type ProfileType = {
    aboutMe: string
    contacts: ProfileContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotoType
}
type ProfileContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
type PhotoType = {
    small: string
    large: string
}
export type PostType = {
    id: string
    message: string
    likesCount: number
}

const initialState = {
    postsData: [
        {id: v1(), message: 'Hello', likesCount: 11},
        {id: v1(), message: 'Buy', likesCount: 15},
    ] as Array<PostType>,
    newPostText: '',
    profile: null as ProfileType | null,
}

export type InitialStateType = {
    postsData: Array<PostType>
    newPostText: string
    profile: ProfileType | null,
}

const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                postsData: [
                    ...state.postsData,
                    {id: v1(), message: state.newPostText, likesCount: 0}
                ],
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}

export default profileReducer