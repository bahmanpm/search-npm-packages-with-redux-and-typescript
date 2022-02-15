import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useAction } from "./hooks/useActions";

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState("");
    const {searchRepositories} = useAction();
    const {data, loading, error} = useSelector((state: any) => state.repositories);

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
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading....</h3>}
            {!error && !loading && data.map((name: string) => <div key={name}>{name}</div>)}
        </div>
    )
}

export default RepositoriesList;