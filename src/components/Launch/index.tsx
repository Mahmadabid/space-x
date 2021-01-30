import React from "react";
import { useLaunchesListQuery } from "../../generated/graphql";
import Launch from './Launch';

interface Props {
    setid: (str: string) => void;
    setsuccess: (str: string) => void;
}

const LaunchContainer: React.FC<Props> = ({ setid, setsuccess }) => {
    const { data, loading, error } = useLaunchesListQuery();

    if (loading) {
        return <div>loading...</div>
    }

    if (error || !data) {
        return <div>error</div>
    }

    return <Launch
        data={data}
        setid={(str: string) => {
            setid(str);
        }}
        setsuccess={(str: string) => {
            setsuccess(str);
        }} />
}

export default LaunchContainer;