import React from "react";
import { LaunchinfoQuery } from "../../generated/graphql";
import './style.css';

interface Props {
    data: LaunchinfoQuery;
}

const LaunchDetails: React.FC<Props> = ({data}) => {

    var videoLink: string | undefined | null = '';
    videoLink = data.launch?.links?.video_link?.replace('/watch?v=','/embed/');

    if (!data.launch) {
        return <div>Launch data not available</div>
    }

    return (
        <div className="launchDetails">
            <div className="LaunchDetailsStatus">
                <span>Flight {data.launch.flight_number}</span>
            </div>
            <h1 className="LaunchDetailsTitle">
                {data.launch.mission_name} - {data.launch.rocket?.rocket_name}
            </h1>
            <p>Launched from {data.launch.launch_site?.site_name} in {data.launch.launch_year}</p>
            <p>{data.launch.details}</p>
            {!!data.launch.links && !!data.launch.links?.flickr_images && (
                <div className="LaunchDetailsImageList">
                    {data.launch.links.flickr_images.map((images, ind) => images? <img key={ind} className="LaunchDetailsImage" src={images} alt="img" />: null )}
                    {data.launch.links.video_link? <iframe className="LaunchDetailsImage" src={videoLink} title={(Math.random()).toString()}></iframe>: null}
                </div>
            )}
        </div>
    );
}

export default LaunchDetails;