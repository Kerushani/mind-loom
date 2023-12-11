import { Form } from "react-router-dom"

//library
import { UserPlusIcon } from "@heroicons/react/24/solid"

const Intro = () => {
    return(
        <div>
            <div>
                <h1 className="text-[#4A4D4D]">Mind<span className="text-[#E27D60]">Loom</span></h1>
                <p>Your thoughts, thoughtfully woven together on a vibrant platform.</p>
                <Form method="post">
                    <input 
                        type="text" 
                        name="username" 
                        required 
                        placeholder="What is your name?"
                        aria-label="Your name"
                        autoComplete="given-name"
                    />
                    <button type="submit">
                        <span>Create Account</span>
                        <UserPlusIcon width={20} />
                    </button>
                </Form>
            </div>
        </div>
    )
}

export default Intro