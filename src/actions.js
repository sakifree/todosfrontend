import url from "./url";
import { redirect } from "react-router-dom";

export const CreateAction = async ({request}) => {
    // get form data
    const formData = await request.formData()

    // construct new todo
    const newTodo = {
        subject: formData.get("subject"),
        details: formData.get("details")
    }

    // request to create route in backend
    await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTodo)
    })

    // redirects back to index page
    return redirect("/")
}

export const UpdateAction = async ({request, params}) => {
        // get form data
        const formData = await request.formData()

        // construct request body
        const updatedTodo = {
            subject: formData.get("subject"),
            details: formData.get("details")
        }
    
        // request to update route in backend
        await fetch(url + params.id + "/", {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedTodo)
        })
    
        // redirects back to index page
        return redirect("/")
}

export const DeleteAction = async ({params}) => {
    await fetch(url + params.id + "/", {
        method: "delete"
    })

    return redirect("/")
}