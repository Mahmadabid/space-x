import React from "react";
import { LaunchesQuery } from "../../generated/graphql";
import './style.css';

interface Props {
    data: LaunchesQuery;
    setid: any;
}

const Launch: React.FC<Props> = ({setid, data}) => {
    return (
        <div className="launches">
            <h3>All Space X Launches</h3>
            <ol className="LaunchesOL">
                {!!data.launches && data.launches.map((launch, i) => !!launch && 
                    <li key={i} className="LaunchesItem" onClick={() => setid(launch.flight_number?.toString())}>
                        {launch.mission_name} - {launch.launch_year} (<span className={launch.launch_success? "LaunchDetailsSuccess": launch.launch_success===null? "": "LaunchDetailsFailed"}>{JSON.stringify(launch.launch_success)}</span>)
                    </li>
                )}
            </ol>
        </div>
    );
}

export default Launch;