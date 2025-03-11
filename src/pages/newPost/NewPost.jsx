import {useForm} from "react-hook-form";
import "./NewPost.css";
import {useNavigate} from "react-router-dom";

function NewPost() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();

    function handleFormSubmit(data) {
        const addedData = {...data,
            created: new Date().toISOString(),
            readTime: 1,
            comments: 0,
            shares: 0,
        };
        console.log(addedData);

        navigate("/alle-posts");
    }

    return (
        <section className="new-post">
            <h2>Post toevoegen</h2>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <label htmlFor="title">
                    Titel
                </label>
                <input
                    type="text"
                    id="title"
                    {...register("title", {
                        required: {
                            value: true,
                            message: 'Dit veld is verplicht',
                        },
                    })}/>
                {errors.title && <p>{errors.title.message}</p>}

                <label htmlFor="subtitle">
                    Subtitel
                </label>
                    <input
                        type="text"
                        id="subtitle"
                        {...register("subtitle", {
                            required: {
                                value: true,
                                message: 'Dit veld is verplicht',
                            },
                        })}/>
                {errors.subtitle && <p>{errors.subtitle.message}</p>}

                <label htmlFor="author">
                    Auteur
                </label>
                    <input
                        type="text"
                        id="author"
                        {...register("author", {
                            required: {
                                value: true,
                                message: 'Dit veld is verplicht',
                            },
                        })}/>
                {errors.author && <p>{errors.author.message}</p>}

                <label htmlFor="message">
                    Bericht
                </label>
                    <textarea
                        id="message"
                        rows="5"
                        cols="30"
                        {...register("message", {
                            required: {
                                value: true,
                                message: 'Dit veld is verplicht',
                            },
                            minLength: {
                                value: 300,
                                message: 'Input moet minimaal 300 karakters bevatten',
                            },
                            maxLength: {
                                value: 2000,
                                message: 'Input mag maximaal 2000 karakters bevatten',
                            },
                        })}>
                    </textarea>
                {errors.message && <p>{errors.message.message}</p>}

                <button type="submit">Toevoegen</button>
            </form>
        </section>
    )
}

export default NewPost;