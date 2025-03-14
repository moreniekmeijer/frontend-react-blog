import {useForm} from "react-hook-form";
import "./NewPost.css";
import {Link} from "react-router-dom";
import axios from "axios";
import {useState} from "react";

function NewPost() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [error, setError] = useState(false);
    const [successId, setSuccessId] = useState(null);

    function handleFormSubmit(data) {
        const addedData = {
            ...data,
            created: new Date().toISOString(),
            readTime: 1,
            comments: 0,
            shares: 0,
        };

        async function postData() {
            setError(false);
            try {
                const response = await axios.post(`http://localhost:3000/posts`, addedData)
                setSuccessId(response.data.id);
            } catch (e) {
                console.error(e);
                setError(true);
            }
        }

        postData();
    }

    return (
        <section className="new-post">
            {successId ? <p>De blogpost is succesvol toegevoegd. Je kunt deze <Link
                    to={`/post/${successId}`}>hier</Link> bekijken.</p> :
                (<>
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
                            id="content"
                            rows="5"
                            cols="30"
                            {...register("content", {
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
                        {errors.content && <p>{errors.content.message}</p>}

                        <button type="submit">Toevoegen</button>
                    </form>
                    {error && <p>Er is iets misgegaan bij het versturen van de data...</p>}
                </>)}
        </section>
    )
}

export default NewPost;