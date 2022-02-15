import React, { useState } from "react";
import { useAction } from "./hooks/useActions";

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState("");
    const {searchRepositories} = useAction();

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchRepositories(term);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={term} type="text" onChange={(event) => setTerm(event.target.value)} />
                <button>Search</button>
            </form>
        </div>
    )
}

export default RepositoriesList;