import { List, ListItem } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Experience() {
  return (
    <>
      <List sx={{ listStyleType: "disc" }}>
        <ListItem sx={{ display: "list-item" }}>
          Responsible for architecting and leading development of voice memo
          capabilities in Bloomberg’s instant messenger
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          Decreased memory footprint and latency of proprietary tabular data
          calculation platform responsible for delivering 3-5 million messages
          per day with 100% accuracy
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          Developed node.js CLI tool for instrumenting applications with
          Bloomberg’s SLO monitoring solution
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          Led initiative to improve observability in Grafana with a focus on
          “Four Golden Signals” from the Google SRE handbook
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          Collaborated closely with UX, product, and backend teams to ensure
          intuitive and performant recording, sending, and playback of audio
          clips
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          Analyzed and fixed performance issues reported by clients in NYC,
          London, and Hong Kong using Chrome Dev Tools (flamegraphs and heap
          snapshots) and other proprietary performance inspection tooling
        </ListItem>

        <ListItem sx={{ display: "list-item" }}>
          Responsible for architecture, development and integration of
          greenfield initiative to migrate lightweight version of Bloomberg’s
          instant messenger to the web
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          Developed a secure websocket server that consumed a Kafka topic to
          send messages to a React client
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          Created and led development on Bloomberg’s first browser-based logging
          tool for web clients, later adopted as recommended logging tool for
          web applications according to Bloomberg’s Web DevX Working Group
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          Mentored a new hire and guided them through improvements to
          high-visibility application with proprietary JS library frontend and
          C++ backend
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          Assumed ownership of Bloomberg Terminal application OAS1 and
          overhauled its interface and functionality by improving or, where
          necessary, fixing features and UI related to single and multi-path
          structured product cashflow analytics
        </ListItem>
        {/* Cedrus */}
        <ListItem sx={{ display: "list-item" }}>
          Wrote Node.js scripts to leverage AWS DMS in migrating data from
          Oracle DB to AWS DynamoDB and MySQL RDS
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          Overhauled legacy Angular frontend to updated Angular 2, adding
          (submodules, lazy loading, and reusable components{" "}
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          Created GraphQL API with AWS Appsync to interact with microservices
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          Implemented Apache Kafka to increase data durability and throughput of
          microservice architecture
        </ListItem>
      </List>
    </>
  );
}
