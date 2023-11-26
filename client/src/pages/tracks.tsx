import React from "react";
import { useQuery } from "@apollo/client";
import { gql } from "../__generated__";
import { Layout, QueryResult } from "../components";
import TrackCard from "../containers/track-card";

const TRACKS = gql(`
  query GetTracks {
    tracksForHome {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
    }
  }
`);
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { data, loading, error } = useQuery(TRACKS);
  return (
    <Layout grid>
      <QueryResult data={data} loading={loading} error={error}>
        {data?.tracksForHome.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
