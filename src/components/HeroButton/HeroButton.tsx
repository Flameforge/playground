import Button, { ButtonProps } from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";
import { Omit } from "@material-ui/types";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

interface HeroButtonProps {
  scale: number;
}

const HeroButton = styled(
  ({
    ...other
  }: HeroButtonProps & Omit<ButtonProps, keyof HeroButtonProps>) => (
    <Button {...other} />
  )
)({
  transform: (props: HeroButtonProps) =>
    `translate(-50%, -50%) scale(${props.scale})`,
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  position: "fixed",
  bottom: "25%",
  left: "50%",
  transition: "transform 3s ease-in",
  borderRadius: "90px",
  color: (props: HeroButtonProps) =>
    `${props.scale > 1 ? "transparent" : "white"}`,
  zIndex: 1,
  whiteSpace: "nowrap",
});

export default function AdaptingStyledComponents(): JSX.Element {
  const history = useHistory();
  const [consumed, consume] = useState(false);

  function handleClick() {
    consume(true);
    setTimeout(() => {
      window.stopMatrix = true;
      history.push("/playground");
    }, 500);
  }

  return (
    <HeroButton
      variant="contained"
      color="primary"
      scale={!consumed ? 1 : 2000}
      data-testid="HeroButton"
      onClick={() => handleClick()}
    >
      Enter the playground
    </HeroButton>
  );
}
