import React, { useState } from "react";
import Sam from "./assets/samfullcrop-250.png";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Input,
  InputLabel,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import { useWindowSize } from "@uidotdev/usehooks";
import Confetti from "react-confetti";
type SubmitEvent =
  | React.MouseEvent<HTMLButtonElement, MouseEvent>
  | React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>;

export default function Hero() {
  const [enterName, setEnterName] = useState<null | Boolean>(null);
  const [visitorName, setVisitorName] = useState<string>("");
  const [showConfetti, setShowConfetti] = useState<boolean>(false)

  const { width, height } = useWindowSize();

  function handleRadioChange(
    _event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) {
    console.log(value);
    setEnterName(value === "sure");
  }

  function handleFormSubmission() {
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 5000)
  }

  return (
    <>
      {showConfetti && <Confetti width={width as number} height={height as number} />}
      <img src={Sam} alt="Sam and Sookie" />
      <div>
        <p>Hello there! I'm Sam Glass.</p>
        <Box>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Care you tell me your name?
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={handleRadioChange}
            >
              <FormControlLabel value="sure" control={<Radio />} label="Sure" />
              <FormControlLabel
                value="noThanks"
                control={<Radio />}
                label="No Thanks"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        {enterName && (
          <FormControl color="secondary">
            {/* Input */}
            <InputLabel htmlFor="my-input">Your name is...</InputLabel>
            <Input
              onChange={(e) => {
                setVisitorName(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleFormSubmission()
                }
              }}
              id="my-input"
              aria-describedby="my-helper-text"
            />
          <Button variant="text" onClick={handleFormSubmission}>Text</Button>
          </FormControl>
        )}
      </div>
    </>
  );
}
