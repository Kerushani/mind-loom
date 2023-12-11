import { NavLink, Form } from "react-router-dom";
import { TrashIcon } from '@heroicons/react/24/solid'

export default function Nav({userName}){
    return(
        <nav>
            <NavLink
                to="/"
                aria-label="Go to home"
            >
                <span>MindLoom</span>
            </NavLink>
            {
                userName && (
                    <Form
                        method="post"
                        action="logout"
                        onSubmit={(event) => {
                            if(!confirm("Delete user and all data?")){
                                event.preventDefault()
                            }
                        }}
                    >
                        <button type="submit">
                            <span>Delete User</span>
                            <TrashIcon width={20}/>
                        </button>
                    </Form>
                )
            }
        </nav>
    )
}