import React from "react";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function Main() {
    return (
        <div>
            <Nav variant="underline" defaultActiveKey="/home">
                <li class="nav-item">
                    <Link class="nav-link clr" to="/">Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link clr" to="/Post">Posts</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link clr" to="/Comment">Comments</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link clr" to="/Albums">Albums</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link clr" to="/Photo">Photos</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link clr" to="/Todo">Todos</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link clr" to="/User">Users</Link>
                </li>
            </Nav>
        </div>
    );
}
