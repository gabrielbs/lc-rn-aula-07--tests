import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react-native";
import mockAsyncStorage from "@react-native-async-storage/async-storage/jest/async-storage-mock";

import {Login} from ".";
import {useNavigation} from "@react-navigation/native";

describe("Login", () => {
  it("should render", () => {
    render(<Login />);
    expect(screen.getByPlaceholderText("Usuário")).toBeTruthy();
    expect(screen.getByPlaceholderText("Senha")).toBeTruthy();
    expect(screen.getByText("Login")).toBeTruthy();
    expect(screen.getByText("Cadastro")).toBeTruthy();
  });

  describe("signed user", () => {
    const mockedNavigate = jest.fn();

    beforeEach(() => {
      mockAsyncStorage.getItem = jest.fn(() => {
        return Promise.resolve(
          '{ "username": "teste@user.com.br", "password": "123456"  }'
        );
      });

      (useNavigation as jest.Mock).mockReturnValue({
        navigate: mockedNavigate,
      });
    });

    it("should login with success", async () => {
      render(<Login />);
      fireEvent.changeText(
        screen.getByPlaceholderText("Usuário"),
        "teste@user.com.br"
      );
      fireEvent.changeText(screen.getByPlaceholderText("Senha"), "123456");

      fireEvent.press(screen.getByText("Login"));
      await waitFor(() => expect(mockedNavigate).toBeCalledWith("feed"));
      expect(screen.queryByText("Usuário ou senha incorretos")).toBeFalsy();
    });
  });

  describe("error", () => {
    const mockedNavigate = jest.fn();
    beforeEach(() => {
      mockAsyncStorage.getItem = jest.fn(() => {
        return Promise.resolve(
          '{ "username": "teste@user.com.br", "password": "123456"  }'
        );
      });

      (useNavigation as jest.Mock).mockReturnValue({
        navigate: mockedNavigate,
      });
    });
    it("should see a login error", async () => {
      render(<Login />);
      fireEvent.changeText(
        screen.getByPlaceholderText("Usuário"),
        "teste@user.com.br"
      );
      fireEvent.changeText(screen.getByPlaceholderText("Senha"), "123456789");
      fireEvent.press(screen.getByText("Login"));
      await waitFor(() => expect(mockedNavigate).not.toBeCalledWith("feed"));
      expect(screen.queryByText("Usuário ou senha incorretos")).toBeTruthy();
    });
  });
});
