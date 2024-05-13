import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

export default function Home() {
  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <Typography variant="h1" gutterBottom>
        Sam Glass
      </Typography>
      <Typography variant="h6" gutterBottom>
        I'm a software engineer who enjoys talking to people
      </Typography>
      <Typography variant="h6" gutterBottom>
      🖥️🙇🏻🏙️
      </Typography>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div>
        <Button>About</Button>
        <Button>Experience</Button>
        <Button>Resume</Button>
      </div>
      </Box>
  )
}