import styled from "styled-components";
// shift navigation bar to right or makes the div center
const StyledDiv = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

export default function Center({children}) {
  return (
    <StyledDiv>{children}</StyledDiv>
  );
}