import React from "react";
import { LaunchesListQuery } from "../../generated/graphql";
import './style.css';

interface Props {
    data: LaunchesListQuery;
    setid: (str: string) => void;
    setsuccess: (str: string) => void;
}

const Launch: React.FC<Props> = ({setid, data, setsuccess}) => {
    return (
        <div className="launches">
            <h3>All Space X Launches</h3>
            <ol className="LaunchesOL">
                {!!data.launches && data.launches.map((launch, i) => !!launch && 
                    <li key={i} className="LaunchesItem" onClick={() => {
                        setid(launch.id && launch.id!==undefined?launch.id.toString(): '')
                        setsuccess(JSON.stringify(launch.launch_success))
                    }}>
                        {launch.mission_name} - {launch.launch_year} (<span className={launch.launch_success? "LaunchDetailsSuccess": launch.launch_success===null? "": "LaunchDetailsFailed"}>{JSON.stringify(launch.launch_success)==='true'? "success": JSON.stringify(launch.launch_success)==='null'? "unknown": "failed"}</span>)
                    </li>
                )}
            </ol>
        </div>
    );
}

export default Launch;