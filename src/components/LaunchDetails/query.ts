import gql from "graphql-tag";

export const QUERY_LAUNCH_Details = gql`
    query launchinfo($id: ID!) {
        launch(id: $id) {
        launch_success
        id
        launch_site {
            site_name
        }
        links {
            flickr_images
            video_link
            article_link
        }
        mission_name
        rocket {
            rocket_name
            rocket_type
        }
        details
        launch_year
        }
    }  
`;