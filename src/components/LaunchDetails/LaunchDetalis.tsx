import React from "react";
import { LaunchinfoQuery } from "../../generated/graphql";
import './style.css';

interface Props {
    data: LaunchinfoQuery;
}

const LaunchDetails: React.FC<Props> = ({ data }) => {

    function getId(url: string | null | undefined) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url?.match(regExp);

        return (match && match[2].length === 11)
            ? match[2]
            : null;
    }

    const videoId = getId(data.launch?.links?.video_link);

    if (!data.launch) {
        return <div>Launch data not available</div>
    }

    var success: string = JSON.stringify(data.launch.launch_success);

    return (
        <div className="launchDetails">
            <div className="LaunchDetailsStatus">
                <span>Flight {data.launch.id}</span>
            </div>
            <h1 className="LaunchDetailsTitle">
                {data.launch.mission_name} - {data.launch.rocket?.rocket_name}
                <span className="report">
                    (<span className={success === 'true' ? "LaunchDetailsSuccess" : success === 'null' ? "" : "LaunchDetailsFailed"}>{success === 'true' ? "success" : success === 'null' ? "unknown" : "failed"}</span>)
                </span>
            </h1>
            <p>Launched from {data.launch.launch_site?.site_name} in {data.launch.launch_year}</p>
            <p>{data.launch.details}</p>
            {data.launch.links?.article_link? 
                <a href={data.launch.links?.article_link} rel="noreferrer" target="_blank"> View Article</a>: ''
            }
            {!!data.launch.links && !!data.launch.links?.flickr_images && (
                <div className="LaunchDetailsImageList">
                    {data.launch.links.flickr_images.map((images, ind) => images ? <img key={ind} className="LaunchDetailsImage" src={images} alt="img" /> : null)}
                    {data.launch.links.video_link ? <iframe className="LaunchDetailsImage" src={`https://www.youtube.com/embed/${videoId}`} title={(Math.random()).toString()}></iframe> : null}
                </div>
            )}
        </div>
    );
}

export default LaunchDetails;