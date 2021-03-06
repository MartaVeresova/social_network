import React, {Component} from 'react'
import {Header} from './Header';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/store';
import {logout} from '../../redux/auth-reducer';

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchToPropsType = {
    logout: () => void
}
export type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


class HeaderContainer extends Component<HeaderPropsType> {
    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

export default connect(mapStateToProps, {logout})(HeaderContainer)