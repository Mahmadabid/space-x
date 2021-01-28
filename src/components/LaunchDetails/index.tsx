import React from "react";
import { useLaunchinfoQuery } from "../../generated/graphql";
import LaunchDetails from "./LaunchDetalis";

interface Props {
    idstate: string;
}

const LaunchDeatailsContainer: React.FC<Props> = ({ idstate }) => {

    const { data, loading, error } = useLaunchinfoQuery({ variables: { id: idstate } });

    if (idstate === 'select') {
        return <h1 className="Select">Select to view</h1>
    }

    else {
        if (loading) {
            return <div>loading...</div>
        }

        if (error) {
            return <div>error</div>
        }

        if (!data) {
            return <div>select data</div>
        }

        return <LaunchDetails data={data} />
    }
}

export default LaunchDeatailsContainer;