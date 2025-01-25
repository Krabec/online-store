import { useContext } from "react";
import { Context } from "../index";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button} from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import {observer} from "mobx-react-lite"
import {useNavigate} from "react-router-dom"

const NavBar = observer(() => {
    const navigate = useNavigate() //onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}
    const {user} = useContext(Context)

    return(
        <Navbar bg="dark" data-bs-theme="dark">
         <Container>
            <NavLink style={{color: 'white', textDecoration: 'none'}} to={SHOP_ROUTE}>Крабология</NavLink>
            {user.isAuth ?
                <Nav className="ml-auto">
                    <Button 
                        variant={"outline-light"} 
                        onClick={() => navigate(ADMIN_ROUTE)}
                    >
                        Админ панель
                    </Button>
                    <Button 
                        style={{marginLeft: '7px'}} 
                        variant={"outline-light"} 
                        onClick={() => navigate(LOGIN_ROUTE)}
                    >
                        Выйти
                    </Button>
                </Nav>
                :
                <Nav className="ml-auto">
                    <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                </Nav>
            }
         </Container>
        </Navbar>
    )
})

export default NavBar;