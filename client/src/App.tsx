import React from "react";
import axios from "axios";

import "./App.css";

type Data = {
    test: Record<string, string | number | string[]>;
};

function App() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState<Data | null>(null);

    React.useEffect(() => {
        async function fetchData() {
            const result = await axios.get("http://localhost:3000/api");
            setData(result.data);

            setTimeout(() => {
                setIsLoading(false);
            }, 1500);
        }

        fetchData();
    }, []);

    return (
        <div>
            <h1>Test!</h1>
            {data && !isLoading ? (
                Object.keys(data.test).map((key) => {
                    const value = data.test[key];

                    return (
                        <div key={key}>
                            <p>
                                <b>{key}:</b> {JSON.stringify(value)}
                            </p>
                        </div>
                    );
                })
            ) : isLoading ? (
                <p>Loading....</p>
            ) : (
                <p>No data</p>
            )}
        </div>
    );
}

export default App;
