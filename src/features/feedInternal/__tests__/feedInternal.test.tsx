import {FeedInternal} from "..";
import {fireEvent, render, screen} from "@testing-library/react-native";
import {useRoute} from "@react-navigation/native";

describe("FeedInternal", () => {
  beforeEach(() => {
    (useRoute as jest.Mock).mockReturnValue({
      params: {
        imageUrl: "https://mockedimage.com",
      },
    });
  });

  it("should render without crashing", () => {
    const shareHandler = jest.fn();

    const {getByAccessibilityHint, getByText} = render(
      <FeedInternal onShare={() => shareHandler()} />
    );

    expect(getByAccessibilityHint("Imagem do feed em fullscreen")).toBeTruthy();
    expect(getByText("Compartilhar")).toBeTruthy();

    fireEvent.press(getByText("Compartilhar"));
    expect(shareHandler).toBeCalled();
  });
});
