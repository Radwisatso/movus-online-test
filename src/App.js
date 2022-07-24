import { InnerContainer, OuterContainer } from "./common/Container";

export default function App() {
  return (
    <OuterContainer>
      <InnerContainer>
        <div>
          <h1>Bookkeeper! Hello!</h1>
        </div>
      </InnerContainer>
    </OuterContainer>
  );
}