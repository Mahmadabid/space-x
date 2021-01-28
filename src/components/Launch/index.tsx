import React from "react";
import { useLaunchesQuery } from "../../generated/graphql";
import Launch from './Launch';

interface Props {
    setid: any;
}

const LaunchContainer: React.FC<Props> = ({setid}) => {
    const {data, loading, error} = useLaunchesQuery();

    if (loading) {
        return <div>loading...</div>
    }

    if (error || !data) {
        return <div>error</div>
    }

    return <Launch setid={setid} data={data} />
}

export default LaunchContainer;